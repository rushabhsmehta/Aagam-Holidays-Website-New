import axios from 'axios';

async function sendWhatsAppMessage(
    userName: string,
    password: string,
    templateName: string,
    phoneNumber: string,
    mediaType: string,
    mediaLink: string,
    variable: string,
    headerVariable: string
): Promise<string> {
    const baseUrl = 'https://send2.digital/whatsapp/api/sendwhatsapp_1.php';
    const params = new URLSearchParams({
        user_name: userName,
        password: password,
        template_name: templateName,
        number: phoneNumber,
        media_type: mediaType,
        media_link: mediaLink,
        variable: variable,
        header_variable: headerVariable
    });

    try {
        const response = await axios.post(`${baseUrl}?${params.toString()}`);
        console.log('Message sent successfully:', response.data);
        return 'Message sent successfully';
    } catch (error: any) {
        console.error('Failed to send message:', error);
        return `Failed to send message: ${error.message}`;
    }
}

export default sendWhatsAppMessage;