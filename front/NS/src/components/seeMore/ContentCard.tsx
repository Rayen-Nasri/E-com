import { ArrowRight } from "lucide-react";
import Cardmg from "../../assets/img/contentCard.svg";
import { Link } from "react-router";
import { motion } from "framer-motion";

export const ContentCard = () => {
    const springTransition = {
        type: "spring",
        stiffness: 50,
        damping: 15,
    };

    const fadeUpTransition = {
        duration: 0.9,
        ease: "easeOut",
    };

    const fadeUpVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-40 bg-[#F5EDDD] lg:mx-20 xl:mx-40 2xl:mx-60"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...springTransition, delay: 0.2 }}
                    className="lg:block hidden"
                >
                    <img
                        src={Cardmg}
                        alt="A decorative image showcasing the product collection"
                        className="w-full"
                        loading="lazy"
                    />
                </motion.div>

                <motion.article 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...springTransition, delay: 0.3 }}
                    className="my-20 lg:my-auto lg:text-left mx-10 lg:px-6 xl:px-7 2xl:px-10"
                >
                    <motion.p 
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ ...fadeUpTransition, delay: 0.4 }}
                        className="text-[#876D49]/57 text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl"
                    >
                        Make it true and memorable
                    </motion.p>
                    <motion.h1 
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ ...fadeUpTransition, delay: 0.5 }}
                        className="text-[#876D49] text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl mt-4"
                    >
                        Find Everything You Want
                    </motion.h1>
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ ...fadeUpTransition, delay: 0.8 }}
                    >
                        <Link to={"/Products"}
                            className="mt-10 inline-block flex items-center border border-[#876D49] text-[#876D49] hover:text-white px-6 py-2 hover:bg-[#876D49] transition-colors duration-300 group"
                            aria-label="Shop our collection"
                        >
                            <div className="flex">
                                <span className="mr-4 text-lg font-semibold">Shop Collection</span>
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </Link>
                    </motion.div>
                </motion.article>
            </div>
        </motion.section>
    );
};