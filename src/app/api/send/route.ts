import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextApiRequest, res: NextApiResponse) {

    const { name, mobile, email, message } = req.body

    try {
        const { error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'aagamholiday@gmail.com',
            subject: `Inquiry from ${name}`,
            react: EmailTemplate({ name, mobile, email, message }),  
            text: message, // Add the 'text' property with a value
        });

        if (error) {
            throw new Error(error.toString()); // Modify the line to pass the error message as a string
        }

        return Response.json({ message: "Email sent sucessfully" })

    } catch (error) {
        console.error(error);
        return Response.json({ error: 'An error occurred while sending the email' });
    }
};