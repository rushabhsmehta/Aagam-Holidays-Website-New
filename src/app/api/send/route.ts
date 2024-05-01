import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

    const res = await req.json();
    const { name, mobile, email, message } = res;

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