import nodemailer from "nodemailer"

export const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "sujal84071@gmail.com",
                pass: process.env.PASSWORD
            }
        })

        await transporter.sendMail({
            from: "sujal84071@gmail.com",
            to: email,
            subject: subject,
            text: text
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to send email",
        })  
    }
}