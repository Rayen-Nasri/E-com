import { useEffect } from "react"
import { FooterChilds, HeaderChilds } from "./childs";
import forgot from "../../assets/img/Forgot.jpg"
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router";
import { useAuthStore } from "../../global/authStore";
import toast from "react-hot-toast";

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
        await toast.success("Pasword rest")
        Navigate("/authentication/logIn");
        

    } catch (error) {
        toast.error("Expired link ")
        
    }
    
    }
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).backgroundColor;
        document.body.style.backgroundColor = "#FFFCF8";
        return () => {
            document.body.style.backgroundColor = originalStyle;
        };
    }, [])

    return (
        <section className="space-y-3 p-6 grid place-content-center mt-[90px]">
            <HeaderChilds
                h3Content="Set new password?"
                pContent={
                    <>
                        Your new password must be different to <br /> previously used passwords.
                    </>
                }
                imgSrc={forgot}
            />
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="p-2 space-y-3">
                    <label htmlFor="" className="font-medium text-[17px] ">Password</label>
                    <br />
                    <input type="text
                    " id="password"
                        placeholder="Enter your Password"
                        className={`w-full px-3 py-1 border 
                        border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm focus:border-stone-300
                        opacity-[0.5]
                        ${errors.password ? "border-red-500" : "border-gray-300"}
                        `}
                        {...register("password")}
                    />

                    <label htmlFor="" className="font-medium text-[17px] ">Confirm Password</label>
                    <br />
                    <input
                        type="text"
                        id="confirmPassword"
                        placeholder="Enter your Password"
                        className={`w-full px-3 py-1 border 
                        border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm focus:border-stone-300
                        opacity-[0.5]
                        ${errors.password ? "border-red-500" : "border-gray-300"}
                        `}
                        {...register("confirmePassword")}
                    />

                </div>

                <div className="mt-2 p-2">
                    <button type="submit"
                        className="text-[15px] w-full flex justify-center py-2 px-4 border border-transparent rounded-md  text-sm font-medium hover:shadow-sm "
                        style={{ backgroundColor: "#F5F3F1" }}>
                        Reset password
                    </button>
                </div>
            </form>
            <FooterChilds buttonContent="Back to login" />

        </section>
    )

}