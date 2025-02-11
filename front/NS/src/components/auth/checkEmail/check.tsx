import { useEffect } from "react"
import { HeaderChilds, FooterChilds } from "../childs.tsx";
import check from "../../../assets/emailCheck.jpg"


export const Check = () => {
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).backgroundColor;
        document.body.style.backgroundColor = "#FFFCF8";
        return () => {
            document.body.style.backgroundColor = originalStyle;
        };
    }, [])

    return (
        <section className="space-y-3 p-6 grid place-content-center mt-[120px]">
            <HeaderChilds
                h3Content="Check your email"
                pContent={
                    <>
                        We sent a password reset link to <br /> Example@untitledui.com
                    </>
                }
                imgSrc={check}
            />
            <div className="text-[15px] text-center mt-6">
                <p className="font-medium">Didn’t receive the email? <button style={{ color: "#6B8696" }}>Click to resend</button></p>

            </div>
            <FooterChilds buttonContent="Back to login" />
        </section>
    )

}