import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
try {
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: 'aagamholiday@gmail.com',
        subject: 'Hello world',
        react: EmailTemplate({ firstName: 'John' }),
        text: 'Hello world', // Add the 'text' property with a value
    });

    if (error) {
        throw new Error(error.toString()); // Modify the line to pass the error message as a string
    }

    res.status(200).json(data);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
};