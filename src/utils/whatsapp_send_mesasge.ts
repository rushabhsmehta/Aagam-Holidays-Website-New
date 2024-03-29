import axios from "axios";

export default function Whatsapp_Send_Message() {
    const fetchData = async () => {
        console.log('fetchData called');
        const baseUrl = 'https://send2.digital/whatsapp/api/sendwhatsapp_1.php';
        const numbers = ['919978783238']; // Add more numbers as needed

        for (const number of numbers) {
            const params = new URLSearchParams({
                user_name: 'Aagam8788',
                password: 'dhmag@9f',
                template_name: 'kashmir_chardham_marketing',
                number: number,
                media_type: 'image',
                media_link: 'aHR0cHM6Ly9hYWdhbWhvbGlkYXlzLmNvbS9fbmV4dC9pbWFnZT91cmw9JTJGaW1hZ2VzJTJGa2FzaG1pciUyRmd0MjE5LmpwZyZ3PTEwODAmcT03NQ==',
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
    fetchData();
}