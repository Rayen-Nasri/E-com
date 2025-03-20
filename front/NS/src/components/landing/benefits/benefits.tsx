import { Link } from "react-router"
import { ArrowRightt } from "../../../assets/assets"
import storage from "../../../assets/img/glas.svg"
import { memo } from "react"
import { motion } from "framer-motion"

export const Benefits = memo(() => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:mt-0 overflow-hidden"
        >
            <div className="lg:grid grid-cols-1 lg:grid-cols-2 grid-rows-1 2xl:mr-[85px]
                            2xl:ml-[85px] mt-5 mr-[33px] ml-[33px] lg:mr-[66px] lg:ml-[66px]">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, type: "spring", stiffness: 50, damping: 20 }}
                    className="lg:mt-[60px] 2xl:mt-[150px]"
                >
                    <motion.img transition={{ duration: 0.9, ease: "easeInOut" }}
                        src={storage}
                        alt="storage"
                        className="hidden lg:block 2xl:w-[51%] rounded-lg"
                        loading="lazy"
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, type: "spring", stiffness: 50, damping: 20, delay: 0.3 }}
                    className="mb-10 mt-10 md:mt-[100px] lg:mt-[240px] xl:mt-[250px] 2xl:mt-[320px] lg:relative"
                >
                    <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                        viewport={{ amount: 0.5, once: true }}
                        className="font-bold text-[33px] md:text-[40px] xl:text-[47px] 2xl:text-[55px]"
                    >
                        The Timeless Elegance of Classic Decor
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
                        viewport={{ amount: 0.8, once: true }}
                        className="bg-[#B4936D] h-[3px] rounded-[30px] mt-2 mb-8 xl:mb-9 2xl:mb-9 w-[90%] lg:w-full origin-left"
                    />

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
                        viewport={{ amount: 0.5, once: true }}
                        className="sm:text-[19px] md:text-[20px] xl:text-[20px] 2xl:text-[24px] text-[rgba(0,0,0,0.67)]"
                    >
                        redefines interior design by harmonizing tradition and sophistication. It showcases how enduring styles seamlessly integrate craftsmanship and timeless materials
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        viewport={{ amount: 0.7, once: true }}
                        whileHover={{ scale: 1.03, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Link to={"/Products"} className="inline-block p-[9px] mb-4 mt-8 bg-[#000000] font-semibold rounded-[90px] text-white border-solid border-[#030303] border w-[160.73px] h-[46.11px] transition-all duration-500 hover:bg-[#B4936D] hover:border-[#B4936D]">
                            <span className="relative left-3">Shop Now &#160; &#160; &#160; &#160;</span>
                            <motion.span
                                className="absolute mt-2"
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2.5,
                                    ease: "easeInOut",
                                    times: [0, 0.6, 1]
                                }}
                            >
                                <ArrowRightt />
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ amount: 0.8, once: true }}
                className="bg-[#B4936D] h-[3px] rounded-[30px] mr-[30px] mb-[20px] ml-[30px] mt-[22px] lg:mr-[66px] lg:ml-[66px] 2xl:mr-[85px] 2xl:ml-[85px] origin-left"
            />
        </motion.section>
    )
})