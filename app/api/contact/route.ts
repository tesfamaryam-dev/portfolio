import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10).max(500),
});

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const parsed = contactSchema.parse(data);

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${parsed.name}" <${parsed.email}>`,
            to: process.env.EMAIL_TO,
            subject: `Portfolio Contact Form: ${parsed.name}`,
            text: parsed.message,
            html: `<p>${parsed.message}</p><p>From: ${parsed.name} (${parsed.email})</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ success: false, error: err.message }, { status: 400 });
    }
}
