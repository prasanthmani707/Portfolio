import nodemailer from 'nodemailer';

export const runtime = 'nodejs'; // Nodemailer needs the Node.js runtime on Vercel

interface ContactPayload {
    name?: string;
    email?: string;
    message?: string;
}

export async function POST(req: Request) {
    try {
        const { name, email, message } = (await req.json()) as ContactPayload;

        if (!name || !email || !message) {
            return Response.json(
                { error: 'Missing required fields: name, email, and message are all required.' },
                { status: 400 }
            );
        }

        const user = process.env.EMAIL_USER;
        const pass = process.env.EMAIL_PASS;

        if (!user || !pass) {
            console.error('EMAIL_USER or EMAIL_PASS is not configured');
            return Response.json(
                { error: 'Email service is not configured. Please try again later.' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user,
                pass,
            },
        });

        const plainBody = `Name: ${name}
Email: ${email}

${message}`;

        const htmlBody = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        `;

        await transporter.sendMail({
            from: `"${name}" <${user}>`,
            to: user, // send to your own inbox
            replyTo: email,
            subject: 'Portfolio Contact Message',
            text: plainBody,
            html: htmlBody,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error('Contact API error:', error);
        return Response.json(
            { error: 'Unable to send message at this time.' },
            { status: 500 }
        );
    }
}
