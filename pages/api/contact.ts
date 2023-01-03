import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing some fields' });
  }

  if(!email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email, please try with different email' });
  }

  try {
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL_AUTH,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
      secure: true,
    })

    const info = await transporter.sendMail({
      from: `"${name} 👻" ${email}`,
      to: process.env.EMAIL_TO,
      subject: `Message from ${name} - ${email}`,
      text: message,
      html: `<p>${message}</p>`,
      replyTo: email,
    });

    res.status(200).json({ message: 'Mensagem enviada', messageId: info.messageId });
  } catch (error: any) {
    res.status(500).json(error);
  }
}