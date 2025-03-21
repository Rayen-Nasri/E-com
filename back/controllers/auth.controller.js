import bcrypt from "bcrypt";
import crypto from "crypto";

import { sendResetPassword, sendResetPaswordEmail, sendVerificationEmail, sendWelcomeEmail } from "../mail/email.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { User } from "../models/user.model.js";


const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        if (!email || !password || !name) {
            throw new Error("All field are required");
        };

        const userAlredyExists = await User.findOne({ email });
        if (userAlredyExists) {
            return res.status(400).json({ success: false, message: "user already exists" });
        };

        const hashPassword = await bcrypt.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString()
        const user = new User({
            email,
            password: hashPassword,
            name,
            verificationToken,
            verificationTokenExpiredAt: Date.now() + 24 * 60 * 60 * 1000 // 24h by miliSec
        });

        await user.save();

        await generateTokenAndSetCookie(res, user._id);

        await sendVerificationEmail(user.email, verificationToken);

        res.status(201).json({
            success: true,
            message: "userCreated",
            user: {
                ...user._doc,
                password: undefined
            }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    };
};

const verifyEmail = async (req, res) => {

    const { code } = req.body;
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiredAt: { $gt: Date.now() }

        });

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalide or expired Verification code" });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiredAt = undefined;

        await user.save();

        await sendWelcomeEmail(user.email, user.name);

        res.status(201).json({
            success: true, message: {
                success: true,
                message: "verification has been donne",
                ...user._doc

            }
        });


    } catch (error) {
        throw new Error(`verifyEmail Code Problem : ${error}`);
    }

}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            throw new Error("email or password Invalid");
        };

        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User not Found");
        };
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Password is Invalid");
        };

        await generateTokenAndSetCookie(res, user._id);
        user.lastLogin = new Date();
        await user.save();

        res.status(201).json({
            success: true,
            message: "login successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        });




    } catch (error) {
        throw new Error(`login Error : ${error}`);
    }
};

const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(201).json({ success: true, message: "lougout successfully" });

};

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        if (!email) {
            throw new Error("email required");
        };

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(505).json({ success : false , message : "userEmail notFound" })
        };

        //!creating new tokne to find out the user 
        const resetToken = await crypto.randomBytes(30).toString("hex");

        user.resetPasswordToken = resetToken;
        user.verificationTokenExpiredAt = Date.now() + 1 * 60 * 60 * 1000;
        user.save();

        //*send RestPassEmail to user
        await sendResetPassword(user.email, `${process.env.RESTL_LINK}/authentication/setNew-password/${resetToken}`);
        res.status(201).json({ success: true, message: `email send successfully` });


    } catch (error) {
        throw new Error(`forgotPassword Error`);

    }



}

const resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;
        const user = await User.findOne({
            resetPasswordToken: token,
        });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalide User" });
        };

        user.password = await bcrypt.hash(newPassword, 10);
        user.resetPasswordToken = undefined;
        user.verificationTokenExpiredAt = undefined;


        await user.save();

        await sendResetPaswordEmail(user.email);


        res.status(201).json({ success: true, message: "password reset successfully" });

    } catch (error) {
        throw new Error(`resetPassword Error : ${error}`);
    };

}

const checkAuth = async (req, res) => {
    try {
        const userId = req.userId || req.body.userId || req.query.userId;
        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required" });
        }

        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(400).json({ success: false, message: "User Not Found" });
        };
        res.status(201).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export { signup, login, logout, verifyEmail, forgotPassword, resetPassword, checkAuth  }