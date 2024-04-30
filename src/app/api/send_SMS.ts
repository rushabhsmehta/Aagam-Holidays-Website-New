import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const sendMessage = async (body: string, to: string = '+919978783238', from: string = '+16812026060') => {
  try {
    const message = await client.messages.create({
      body,
      from,
      to,
    });

    console.log(message.sid);
  } catch (error) {
    console.error(error);
  }
};

export default sendMessage;