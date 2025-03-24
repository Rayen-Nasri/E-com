import { memo } from "react";
import { ArrBack } from "../../assets/assets";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { formItemVariant, buttonVariant } from "./animations";

const HeaderChilds = memo(({ h3Content, pContent, imgSrc }: any) => {
    return (
        <>
            <motion.div 
                className="flex justify-center"
                variants={formItemVariant}
            >
                <motion.img 
                    src={imgSrc} 
                    alt="Forgot password illustration"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
            </motion.div>
            <motion.div 
                className="lg:space-y-8"
                variants={formItemVariant}
            >
                <motion.h3 
                    className="text-[26px] text-center font-bold lg:text-[35px]"
                    variants={formItemVariant}
                >
                    {h3Content}
                </motion.h3>
                <motion.p 
                    className="text-[17px] text-center font-medium"
                    variants={formItemVariant}
                >
                    {pContent}
                </motion.p>
            </motion.div>
        </>
    )
})

const FooterChilds = memo(({ buttonContent }: any) => {
    return (
        <motion.div 
            className="mt-15 flex justify-center p-2"
            variants={formItemVariant}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.label 
                htmlFor="" 
                className="relative right-[20px] top-[6px]"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <ArrBack />
            </motion.label>
            <motion.div
                whileHover={{ x: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                <Link 
                    className="relative font-medium" 
                    to={"/authentication/logIn"}
                >
                    {buttonContent}
                </Link>
            </motion.div>
        </motion.div>
    )
})

export { HeaderChilds ,FooterChilds}