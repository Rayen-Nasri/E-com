import { Link } from "react-router"
import meror from "../../../assets/img/merrorr.svg"
import { ArrowRightt } from "../../../assets/assets"
import { motion } from "framer-motion"

export const DiscountSection = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-4 bg-[#F5EDDD] 
                      xl:rounded-[20px] md:ml-0 md:mr-0 xl:ml-[80px] xl:mr-[88px] mt-10 mb-10
                      hover:shadow-xl transition-shadow duration-500"
        >
            <motion.article 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                viewport={{ amount: 0.8,once: true }}
                className="ml-[33px] mr-[33px] lg:mr-0 lg:ml-[64px] 2xl:ml-[83px] my-17 lg:my-auto xl:my-auto 2xl:my-30"
            >
                <motion.h2 
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="font-bold text-[33px] md:text-[40px] lg:text-[40px] 2xl:text-[47px]"
                >
                    <motion.span
                        initial={{ color: "#000" }}
                        whileInView={{ color: "#B4936D" }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        20% Discount
                    </motion.span>{" "}
                    Explore more with Decoration
                </motion.h2>

                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="h-[3px] w-[60%] bg-[#B4936D] rounded-full my-4 origin-left"
                />

                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-8 sm:text-[20px] md:text-[20px] text-[rgba(0,0,0,0.67)] lg:text-[19px] 2xl:text-[24px]"
                >
                    Spruce up your home for the season with a fantastic 25% discount on our curated
                    collection of décor pieces. Brighten up every corner with style and savings.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <Link to={"/Features"} className="
                        inline-block p-[9px] mt-15 bg-black w-[180px] 
                        font-semibold rounded-[90px] text-white h-[44.11px]
                        transition-all duration-300 hover:bg-[#B4936D] relative
                        overflow-hidden group"
                    >
                        <motion.span 
                            className="relative left-3 z-10"
                            animate={{ x: [0, 2, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Explore Now 
                        </motion.span>
                        <motion.span 
                            className="absolute right-6 mt-2 z-10"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <ArrowRightt />
                        </motion.span>
                    </Link>
                </motion.div>
            </motion.article>

            <motion.figure 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                viewport={{ amount: 0.8,once: true }}
                className="flex justify-end lg:mr-[64px] 2xl:mr-[86px] md:my-20 xl:my-5 2xl:my-5"
            >
                <motion.img
                    transition={{ duration: 0.5 }}
                    src={meror}
                    alt="Decorative illustration for discount section"
                    loading="lazy"
                    className="hidden lg:block bg-transparent  rounded-lg transition-shadow duration-300"
                />
            </motion.figure>
        </motion.section>
    )
}