import { memo } from "react"
import { FooterChilds, HeaderChilds } from "./childs";
import forgot from "../../assets/img/KEY.png"
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../global/authStore";
import { toast } from "react-hot-toast"

// Zod schema for validation
const forgotSchema = z.object({
    email: z.string().email("Invalid email address")
})

type ForgotForme = z.infer<typeof forgotSchema>



export const Forgot = memo(() => {
    const navigate = useNavigate();
    const { forgotPassword } = useAuthStore() as { forgotPassword: (email: string) => Promise<void> };
    const { register, handleSubmit, formState: { errors } } = useForm<ForgotForme>({ resolver: zodResolver(forgotSchema) });

    const onSubmit: SubmitHandler<ForgotForme> = async (data) => {
        // API fetch Logique
        try {
            await forgotPassword(data.email);
            toast.success("Valid email ");
            navigate(`/authentication/check/${data.email}`);
            

        } catch (error: any) {
            
            toast.error("Email Not valid");

        }

    }
    {
        document.body.style.backgroundColor = "FFFCF8";
    }


    return (
        <section className="space-y-3 p-6 grid  place-content-center mt-[120px]">

            <HeaderChilds
                h3Content="Forgot password?"
                pContent="No worries, we’ll send you reset instructions."
                imgSrc={forgot}
            />

            {/* Forme */}

            <div className="p-2">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="" className="font-medium text-[17px] ">Email</label>
                    <br />
                    <input type="text" placeholder="Enter your email" 
                    className={`w-full px-3 py-1 border-1 rounded-md
                     border-[#B2916C]  opacity-[0.7] 
                    ${errors.email ? "border-red-500" : "border-[#B2916C]"}`}
                        {...register("email")}
                    />
                    <div className="mt-2 p-2">

                        <button
                            type="submit"
                            className="text-[15px] w-full flex justify-center py-2 px-4 border 
                            bg-transparent border-[#B2916C] rounded-md  text-sm font-medium hover:shadow-sm"
                            >
                            Reset password
                        </button>

                    </div>
                </form>

            </div>



            <FooterChilds buttonContent="Back to login" />

        </section>
    )

})