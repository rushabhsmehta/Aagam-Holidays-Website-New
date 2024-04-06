'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import sendWhatsAppMessage from '@/api/sent_whatsapp_message';

export default function Send_Message() {
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const fetchData = async () => {
        setIsSending(true);
        const numbers = ['919978783238']; // Add more numbers as needed

        for (const number of numbers) {
            try {
                await sendWhatsAppMessage(
                    'Aagam8788',
                    'dhmag@9f',
                    'message_welcome_to_srinagar',
                    number,
                    'image',
                    'aHR0cHM6Ly9hYWdhbS1ob2xpZGF5cy13ZWJzaXRlLW5ldy52ZXJjZWwuYXBwL2ltYWdlcy90ZW1wbGF0ZV9pbWFnZXMvd2VsY29tZV90b19zcmluYWdhci5qcGc=',
                    'hi,aagamholidays',
                    'hi,hello'
                );
                setIsSent(true);
            } catch (error) {
                console.error('Error sending WhatsApp message:', error);
            } finally {
                setIsSending(false);
            }
        }
    };

    if (isSent) {
        alert('Message sent successfully');
    }

    return (
        <div>
            <h1>Send Message</h1>
            <Button className="mt-40 ml-20 mb-20" onClick={fetchData} disabled={isSending || isSent}>
                Send Message
            </Button>
        </div>
    );
}