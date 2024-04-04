'use client'
import react from 'react';  
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function Send_Message() {

    const fetchData = async () => {
       console.log('fetchData called');
        const baseUrl = 'https://send2.digital/whatsapp/api/sendwhatsapp_1.php';
        const numbers = ['918980413633', '919824218518', '919724444701', '919978783238']; // Add more numbers as needed

        for (const number of numbers) {
             const params = new URLSearchParams({
                user_name: 'Aagam8788',
                password: 'dhmag@9f',
                template_name: 'message_exciting_pahalgam_adventure_awaits',
                number: number,
                media_type: 'image',
                media_link: 'aHR0cHM6Ly9hYWdhbS1ob2xpZGF5cy13ZWJzaXRlLW5ldy52ZXJjZWwuYXBwL2ltYWdlcy90ZW1wbGF0ZV9pbWFnZXMvZXhjaXRpbmdfcGFoYWxnYW1fYWR2ZW50dXJlX2F3YWl0cy5qcGc=',
                variable: 'hi,aagamholidays',
                header_variable: 'hi,hello'
            });

            try {
                const response = await axios.post(`${baseUrl}?${params.toString()}`);
                console.log(response.data);
            } catch (error) {
                console.error('Error sending WhatsApp message:', error);
            }
        }
    };
  // fetchData();
     return (
        <div>
            <h1>Send Message</h1>
            <Button className = "mt-40 ml-20 mb-20" onClick={fetchData}>Send Message</Button>
        </div>
    ); 
}