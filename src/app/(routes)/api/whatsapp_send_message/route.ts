import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const response = await axios.post('https://send2.digital/whatsapp/api/sendwhatsapp_1.php', {
                key: 'Access-Control-Allow-Origin',
                user_name: 'Aagam8788',
                password: 'dhmag@9f',
                template_name: 'kashmir_chardham_marketing',
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = response.data;
            res.status(200).json(data);
        } catch (error) {
            console.error('Error sending WhatsApp message:', error);
            res.status(500).json({ error: 'An error occurred while sending the WhatsApp message.' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed.' });
    }
}