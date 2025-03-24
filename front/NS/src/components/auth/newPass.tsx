import { FooterChilds, HeaderChilds } from "./childs";
import forgot from "../../assets/img/KEY.png"
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router";
import { useAuthStore } from "../../global/authStore";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, formItemVariant, buttonVariant, inputVariant } from "./animations";

const newPassSchema = z.object(
    {
        password: z.string().min(8),
        confirmePassword: z.string().min(8)
    }
)

type setNewPassForm = z.infer<typeof newPassSchema>;


export const Newpass = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<setNewPassForm>({
        resolver: zodResolver(newPassSchema)
    })
    const Navigate = useNavigate();
    const { setNewPassword }: any = useAuthStore();
const { tokenID } = useParams<{ tokenID: string }>();

const onSubmit: SubmitHandler<setNewPassForm> = async(data:any) => {
    if (!tokenID) {
        console.error("Token ID is missing");
        return;
    }
    
    try {
        await setNewPassword(data.password , tokenID);
        toast.success("Pasword rest")
        Navigate("/authentication/validPassword");
        

    } catch (error) {
        toast.error("Expired link ")
        
    }
    
    }
    {
        document.body.style.backgroundColor = "FFFCF8";
    }

    return (
        <motion.section 
            className="space-y-3 p-6 grid place-content-center mt-[90px]"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={staggerContainer}
        >
            <motion.div variants={fadeIn}>
                <HeaderChilds
                    h3Content="Set new password?"
                    pContent={
                        <>
                            Your new password must be different to <br /> previously used passwords.
                        </>
                    }
                    imgSrc={forgot}
                />
            </motion.div>

            <motion.form 
                action="" 
                onSubmit={handleSubmit(onSubmit)}
                variants={formItemVariant}
            >
                <motion.div 
                    className="p-2 space-y-3"
                    variants={staggerContainer}
                >
                    <motion.label 
                        htmlFor="password" 
                        className="font-medium text-[17px]"
                        variants={formItemVariant}
                    >
                        Password
                    </motion.label>
                    <br />
                    <motion.input 
                        type="password"
                        id="password"
                        placeholder="Enter your Password"
                        className={`w-full px-3 py-1 border rounded-md transition-all duration-200
                            ${errors.password ? "border-red-500" : "border-[#B2916C]"}
                        `}
                        variants={inputVariant}
                        initial="initial"
                        whileFocus="focus"
                        animate={errors.password ? "invalid" : "valid"}
                        {...register("password")}
                    />

                    <motion.label 
                        htmlFor="confirmPassword" 
                        className="font-medium text-[17px]"
                        variants={formItemVariant}
                    >
                        Confirm Password
                    </motion.label>
                    <br />
                    <motion.input
                        type="password"
                        id="confirmPassword"
                        placeholder="Enter your Password"
                        className={`w-full px-3 py-1 border rounded-md transition-all duration-200
                            ${errors.confirmePassword ? "border-red-500" : "border-[#B2916C]"}
                        `}
                        variants={inputVariant}
                        initial="initial"
                        whileFocus="focus"
                        animate={errors.confirmePassword ? "invalid" : "valid"}
                        {...register("confirmePassword")}
                    />
                </motion.div>

                <motion.div 
                    className="mt-2 p-2"
                    variants={formItemVariant}
                >
                    <motion.button
                        type="submit"
                        className="text-[15px] w-full flex justify-center py-2 px-4 border-[#B2916C] border 
                            bg-transparent rounded-md text-sm font-medium transition-all duration-200"
                        variants={buttonVariant}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Reset password
                    </motion.button>
                </motion.div>
            </motion.form>

            <motion.div variants={fadeIn}>
                <FooterChilds buttonContent="Back to login" />
            </motion.div>
        </motion.section>
    )

}