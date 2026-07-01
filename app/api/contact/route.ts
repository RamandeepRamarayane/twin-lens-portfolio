import moment from "moment";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, details, timeline, budget, _honey } = body;
        const time = moment().format("MMMM Do YYYY, h:mm:ss a");

        // 1. SPAM PROTECTION: If a bot fills out the hidden honeypot field, reject it silently
        if (_honey) {
            return NextResponse.json({ message: "Spam detected" }, { status: 400 });
        }
        const from = `${process.env.NEXT_PUBLIC_BRAND_NAME} <hello@${process.env.RESEND_EMAIL}>`;
        const { data, error } = await resend.emails.send({
            from: from,
            to: [process.env.BRAND_EMAIL as string],
            subject: `New Project Inquiry from ${name}`,
            replyTo: email,
            html: `
        <h2 style="color: #1a1a1a;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Project Details:</strong><br/>${details}</p>
    `,
        });
        // 2. If Resend passes back an error (like your 422), intercept it here!
        if (error) {
            return NextResponse.json({ success: false, error: error.message }, { status: 400 });
        }

        // 3. Otherwise, success!
        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}
