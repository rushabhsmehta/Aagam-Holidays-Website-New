'use client'
import React, { useState } from 'react';  
import { Button } from "@/components/ui/button";
import sendWhatsAppMessage from '@/api/sent_whatsapp_message';

export default function Send_Message() {
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const fetchData = async () => {
        setIsSending(true);
        const numbers = ['919724444701','919429550582','917780927646','917006424669','919978783238','916005077187','918980977858']; // Add more numbers as needed

        for (const number of numbers) {
            try {
                await sendWhatsAppMessage(
                    'Aagam8788',
                    'dhmag@9f',
                    'message_srinagar_to_pahalgam_day_trip',
                    number,
                    'image',
                    'aHR0cHM6Ly9hYWdhbS1ob2xpZGF5cy13ZWJzaXRlLW5ldy52ZXJjZWwuYXBwL2ltYWdlcy90ZW1wbGF0ZV9pbWFnZXMvc3JpbmFnYXJfdG9fcGFoYWxnYW1fZGF5X3RyaXAuanBn',
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