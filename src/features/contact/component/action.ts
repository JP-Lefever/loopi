"use server"
import nodemailer from "nodemailer"
import {ContactProps, ResultProps} from "@/types/definitions";




export const sendEmail = async (data: ContactProps) : Promise<ResultProps<string>> => {

    const {firstName, lastName, email,  message, phone, subject} = data;

    try {

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587", 10),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            }
        })
        await transporter.sendMail({
            from: `"Nouveau message Loopi WEB" <${process.env.SMTP_USER}>`,
            to : process.env.CONTACT_RECEIVER,
            subject: `Nouveau message de ${firstName} ${lastName}`,
            text : `
                subject : ${subject}
                Email : ${email}
                tel : ${phone}
                Message : ${message}
        `,
            html: `
        <p>Email: ${email}</p>
        <p>tel : ${phone}</p>
        <p>Sujet : ${subject}</p>
        <p>Message:</br>${message}</p>
        `,
            replyTo: email,
        })

        return {success: true, data: "Le message a bien été envoyé"}
    } catch (error) {
        console.error(error)
        return {success: false, error: "Une erreur est survenue"}
    }
}

