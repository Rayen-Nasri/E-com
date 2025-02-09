import { useEffect } from "react"
import { FooterChilds, HeaderChilds } from "../childs";



export const Newpass = () => {
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
                imgSrc="src\assets\Forgot.jpg"
            />

            <div className="p-2 space-y-3">
                <label htmlFor="" className="font-medium text-[17px] ">Password</label>
                <br />
                <input type="text" placeholder="Enter your email" className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm focus:border-stone-300 opacity-[0.5]" />

                <label htmlFor="" className="font-medium text-[17px] ">Confirm Password</label>
                <br />
                <input type="text" placeholder="Enter your email" className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm focus:border-stone-300 opacity-[0.5]" />

            </div>

            <div className="mt-2 p-2">
                <button type="submit"
                    className="text-[15px] w-full flex justify-center py-2 px-4 border border-transparent rounded-md  text-sm font-medium hover:shadow-sm "
                    style={{ backgroundColor: "#F5F3F1" }}>
                    Reset password
                </button>
            </div>

            <FooterChilds buttonContent="Back to login" />

        </section>
    )

}