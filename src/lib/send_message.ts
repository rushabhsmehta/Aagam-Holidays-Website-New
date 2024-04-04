'use server'
import axios from "axios";

export async function send_message (user_name : string , password : string, template_name : string, numbers : string[], media_type : string, media_link : string, variable : string, header_variable : string) {
    const baseUrl = 'https://send2.digital/whatsapp/api/sendwhatsapp_1.php';

    for (const number of numbers) {
        const params = new URLSearchParams({
            user_name,
            password,
            template_name,
            number,
            media_type,
            media_link,
            variable,
            header_variable
        });

        try {
            const response = await axios.post(`${baseUrl}?${params.toString()}`);
            console.log(response.data);
            return 'Operation successful';
        } catch (error) {
            console.error('Error sending WhatsApp message:', error);
            return 'Operation failed';
        }
    }
};