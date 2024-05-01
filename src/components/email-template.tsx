import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  mobile,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
    <h1 style={{ color: '#333', borderBottom: '1px solid #ddd' }}>New Inquiry Received</h1>
    <p>You have received a new inquiry from your webiste :</p>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Mobile:</strong> {mobile}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Message:</strong> {message}
    </p>
    <p>Please respond to this inquiry at your earliest convenience.</p>
  </div>
);