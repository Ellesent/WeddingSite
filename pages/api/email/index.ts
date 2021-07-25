import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';

const htmlstuff = require('@/public/HtmlTemplates/savethedate.html')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method == 'POST') {
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
      res.status(500).json({ error: `Error sending email ${error}` })
    }
  }
}