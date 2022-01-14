import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';
import saveTheDateHTML from '@public/HtmlTemplates/savethedate.html'
import inviteHTML from '@public/HtmlTemplates/invite.html'
import { getAllGuests, updateGuestStatus } from '../guests';
import { Guest, Status } from '../../../utils/Types';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log(process.env.EMAIL)

const sendEmails = async (guests: Guest[], subject: string, text: string, type: string) => {
  let htmlTemplate = type === 'invite' ? inviteHTML : saveTheDateHTML;

  const data: sgMail.MailDataRequired[] = guests.map(g => {
    
  if (type === 'invite') {
    htmlTemplate = htmlTemplate.replace('replace-me', g.id);
    htmlTemplate = htmlTemplate.replace('replace-guest', g.name);
  }
    return{
      to: g.email,
      from: process.env.EMAIL,
      subject,
      text,
      html: htmlTemplate, // TODO use string replace for dynamic URI
    }})

  const result = await sgMail.send(data);
  console.log(result);
  Promise.all(guests.map(g => updateGuestStatus(g.id || '', type == 'invite' ? Status.Invitation_Sent : Status.Save_The_Date_Sent)));
}

const emailAll = async (subject: string, text: string, type: string) => {
  const guests = await getAllGuests();
  let unEmailedGuests = [];
  if (type === 'invite') {
    unEmailedGuests = guests.filter(g => (g.status !== Status.Invitation_Sent && g.status !== Status.RSVPed && g.status !== Status.Declined) && g.email.includes('@'));
  }
  else if (type === 'save-the-date') {
  unEmailedGuests = guests.filter(g => g.status === Status.Save_The_Date_Not_Sent && g.email.includes('@'));
  }
  else {
    throw new Error('passed in type not implemented')
  }
  console.log(unEmailedGuests)
  await sendEmails(unEmailedGuests, subject, text, type);

  console.log('here');
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    switch (req.method) {
      case 'POST':
        await emailAll(req.body.subject, req.body.text, req.body.type);
        return res.status(200).json({ message: "Successfully emailed all guests" });
      default:
        return res.status(200).json({ message: "not implemented" });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
}