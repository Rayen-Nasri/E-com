import { HeaderChilds, FooterChilds } from "./childs.tsx";
import check from "../../assets/img/mailSend.png"
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./animations";


export const Check = () => {
    {
        document.body.style.backgroundColor = "FFFCF8";
    }
    const { email } = useParams<{ email: string }>();
    return (
        <motion.section 
            className="space-y-3 p-6 grid place-content-center mt-[120px]"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={staggerContainer}
        >
            <motion.div variants={fadeIn}>
                <HeaderChilds
                    h3Content="Check your email"
                    pContent={
                        <>
                            We sent a password reset link to <br /> {email}
                        </>
                    }
                    imgSrc={check}
                />
            </motion.div>

            <motion.div variants={fadeIn}>
                <FooterChilds buttonContent="Back to login" />
            </motion.div>
        </motion.section>
    )

}