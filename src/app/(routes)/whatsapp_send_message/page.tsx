'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { send_message } from '@/lib/send_message';
import { useRouter } from 'next/navigation';

export default function Send_Whatsapp_Message() {

    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const router = useRouter();
    const handleOnClick = async () => {
        setIsSending(true);
        try {
            const result = await send_message(
                'Aagam8788',
                'dhmag9f',
                'message_journey_completion',
                ['919978783238'],
                'image',
                'aHR0cHM6Ly9hYWdhbS1ob2xpZGF5cy13ZWJzaXRlLW5ldy52jZWwuYXBwL2ltYWdlcy90ZW1wbGF0ZV9pbWFnZXMvbXlzb3JlLmpwZw==',
                'hi,aagamholidays',
                'hi,hello'
            ) as string; // Add type assertion here
            setMessage(result);
        } catch (error) {
            setMessage(`Error: ${(error as Error).message}`);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div>
            <h1>Send Message</h1>
            <Button className='mt-40 ml-20 mb-20'
                onClick={handleOnClick}
                disabled={isSending}
            >
                Send Message
            </Button>
            {message && <p>{message}</p>}
        </div>
    );
}