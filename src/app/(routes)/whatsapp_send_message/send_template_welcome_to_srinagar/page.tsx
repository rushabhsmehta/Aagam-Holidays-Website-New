'use client'
import React, { useState } from 'react';  
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function Send_Message() {
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const fetchData = async () => {
        setIsSending(true);
        const baseUrl = 'https://send2.digital/whatsapp/api/sendwhatsapp_1.php';
        const numbers = ['919978783238']; // Add more numbers as needed

        for (const number of numbers) {
            const params = new URLSearchParams({
                user_name: 'Aagam8788',
                password: 'dhmag@9f',
                template_name: 'message_welcome_to_srinagar',
                number: number,
                media_type: 'image',
                media_link: 'aHR0cHM6Ly9hYWdhbS1ob2xpZGF5cy13ZWJzaXRlLW5ldy52ZXJjZWwuYXBwL2ltYWdlcy90ZW1wbGF0ZV9pbWFnZXMvd2VsY29tZV90b19zcmluYWdhci5qcGc=',
                variable: 'hi,aagamholidays',
                header_variable: 'hi,hello'
            });

            try {
                const response = await axios.post(`${baseUrl}?${params.toString()}`);
                console.log(response.data);
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
        window.close();
    }

    return (
        <div>
            <h1>Send Message</h1>
            <Button className="mt-40 ml-20 mb-20" onClick={fetchData} disabled={isSending}>
                Send Message
            </Button>
        </div>
    ); 
}