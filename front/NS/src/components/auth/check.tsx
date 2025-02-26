import { HeaderChilds, FooterChilds } from "./childs.tsx";
import check from "../../assets/img/mailSend.png"
import { useParams } from "react-router";


export const Check = () => {
    {
        document.body.style.backgroundColor = "FFFCF8";
    }
    const { email } = useParams<{ email: string }>();
    return (
        <section className="space-y-3 p-6 grid place-content-center mt-[120px]">
            <HeaderChilds
                h3Content="Check your email"
                pContent={
                    <>
                        We sent a password reset link to <br /> {email}
                    </>
                }
                imgSrc={check}
            />

            <FooterChilds buttonContent="Back to login" />
        </section>
    )

}