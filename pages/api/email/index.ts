import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';
import path from "path";
import htmlstuff from '../../../HtmlTemplates/savethedate.html'


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method == 'POST') {
    console.log("here");
    let htmlContents;
    console.log(htmlstuff);
    try {
      //htmlContents = fs.readFileSync('HtmlTemplates/savethedate.html');
    }
    catch (e) {
      console.error(e);

    }
   // console.log(htmlContents);

    const { email, subject, message, html } = req.body
    const msg = {
      to: 'francesca.paterinaldi@gmail.com',
      from: email,
      subject: subject,
      text: message,
      html: htmlstuff
    };

    try {
      await sgMail.send(msg);
      res.json({ message: `Email has been sent` })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Error sending email' })
    }
  }
}