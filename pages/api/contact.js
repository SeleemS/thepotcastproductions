import nodemailer from 'nodemailer';
import { IncomingForm } from 'formidable';


export const config = {
    api: {
        bodyParser: false, // Disabling body parsing
    },
};

export default async (req, res) => {
    if (req.method === 'POST') {
        // Parse the form data
        const form = new IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error('Error parsing the form data', err);
                res.status(500).json({ success: false, message: 'Error parsing form data' });
                return;
            }

            // Extract fields
            const { name, email, phone, subject, message } = fields;

            // Set up nodemailer transporter
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
            });

            // Set up email data
            const mailOptions = {
                from: "Nodemailer",
                to: process.env.EMAIL_TO,
                subject: `${subject}`,
                text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
            };

            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ success: false, message: 'Error sending email' });
                } else {
                    console.log('Email sent: ' + info.response);
                    res.status(200).json({ success: true, message: 'Email sent successfully' });
                }
            });
        });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
