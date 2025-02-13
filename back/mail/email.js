import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify Your Email",
            html: `weldone XD ${verificationToken}`,
            category: "Email Verfication"
        })

        console.log("email Send Succ");

    } catch (error) {
        console.log(`Error sending Verification : ${error}`);

        throw new Error(`Error sending Verification email : ${error}`);

    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }]
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "bb878086-7b8a-43ea-adee-238e6a7ca30c",
            template_variables: {
                "name": "Noble Nurture",
                "company_info_name": "Noble Nurture"
            }
        })
    } catch (error) {
        throw new Error(`Error in welcome email ${error}`)
    }
}

export const sendResetPassword = async (email, resetLink) => {

    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            subject: "ResetPass",
            from: sender,
            to: recipient,
            html: resetLink
        })
    } catch (error) {
        throw new Error(`Error in sendResetPassword email ${error}`)
    }

}

export const sendResetPaswordEmail = async (email) => {

    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            subject: "Password Reset",
            from: sender,
            to: recipient,
            html: "Mabrouk"
        })
    } catch (error) {
        throw new Error(`sendResetPaswordEmail Error ${error}`);
    }

}