import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';
import path from "path";
import html from '../../../HtmlTemplates/savethedate.html'
import { getAllGuests, updateGuestStatus } from '../guests';
import { Guest, Status } from '../../../utils/Types';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmails = async (guests: Guest[], subject: string, text: string) => {
  const data: sgMail.MailDataRequired[] = guests.map(g => ({
      to: g.email,
      from: "no-reply@domandfrankie.wedding",
      subject,
      text,
      html,
    }))

  const result = await sgMail.send(data);
  console.log(result);
  Promise.all(guests.map(g => updateGuestStatus(g.id || '', Status.Invitation_Sent)));
}

const emailAll = async (subject: string, text: string) => {
  const guests = await getAllGuests();
  const unEmailedGuests = guests.filter(g => g.status === Status.Not_Sent && g.email.includes('@'));
  console.log(unEmailedGuests)
  console.log(guests);
  await sendEmails(unEmailedGuests, subject, text);

  console.log('here');
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    switch (req.method) {
      case 'POST':
        await emailAll(req.body.subject, req.body.text);
        return res.status(200).json({ message: "Successfully emailed all guests" });
      default:
        return res.status(200).json({ message: "not implemented" });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
}