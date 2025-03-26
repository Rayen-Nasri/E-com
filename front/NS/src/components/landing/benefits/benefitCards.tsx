import { motion, useAnimation, useInView } from "framer-motion"; // Added useInView from framer-motion
import { useEffect, useRef } from "react"; // Added useRef
import chair1 from "../../../assets/img/chair11.svg";
import chair2 from "../../../assets/img/chair22.svg";
import chair3 from "../../../assets/img/chair33.svg";
import chair4 from "../../../assets/img/chair44.svg";
import { Link } from "react-router";

const cardsItems = [
    { img: chair1, ProcutName: "Classic brown chair", ProductPrice: "$69.99" },
    { img: chair2, ProcutName: "Classic white chair", ProductPrice: "$69.99" },
    { img: chair3, ProcutName: "Classic brown chair", ProductPrice: "$69.99" },
    { img: chair4, ProcutName: "Wooden sturdy chair", ProductPrice: "$69.99" },
];

const categories = ["Chair", "Desk", "Bed", "Table"];

export const CardSection = () => {
    // Animation controls
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, {
        amount: 0.2
    });

    // Header animation variants
    const headerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // Category animation variants
    const categoryContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const categoryItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    // Card container animation variants
    const cardContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5
            }
        }
    };

    // Card item animation variants
    const cardItemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for a bouncy effect
            }
        }
    };

    // Button animation variants - updated for better hover effect
    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 1.2,
                duration: 0.5
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(180, 147, 109, 0.3)",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        tap: { scale: 0.95 }
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            className="mt-10 py-10 overflow-hidden"
        >
            <motion.article
                variants={headerVariants}
                className="mb-12"
            >
                <motion.h2
                    className="font-bold text-center text-[33px] md:text-[43px] xl:text-[47px] 2xl:text-[55px] mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-[#b4936d]">Our</span> Products
                </motion.h2>
                <motion.p
                    className="text-center mx-auto max-w-2xl text-[15px] lg:text-[19px] text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Explore our high-quality, stylish items designed to elevate
                    <span className="hidden lg:inline"> </span>
                    your daily life.
                </motion.p>
            </motion.article>

            <figure>
                {/* Updated category selector with improved responsive design */}
                <motion.div
                    className="flex justify-center mx-auto mb-12 mt-9 px-4"
                    variants={categoryContainerVariants}
                >
                    <div className="bg-[#F5EDDD] rounded-full px-2 sm:px-3 md:px-4 py-2 flex items-center shadow-md overflow-x-auto max-w-full">
                        {categories.map((category, index) => (
                            <motion.div
                                key={index}
                                className="relative mx-1 sm:mx-2"
                                variants={categoryItemVariants}
                            >
                                <div className={`
                                    ${index === 0 ? "bg-[#b4936d] text-white" : "bg-transparent text-[#030303] h"} 
                                    px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full
                                    transition-all duration-300
                                `}>
                                    <p className="font-['Poppins-Regular',_sans-serif] text-[14px] sm:text-[16px] font-medium whitespace-nowrap">
                                        {category}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="sm:p-7 md:p-13 lg:p-13 xl:p-10 
                        2xl:mx-35 px-4
                        grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1
                        gap-6 lg:gap-9 xl:mt-12 xl:mb-12 mt-[18px]"
                    variants={cardContainerVariants}
                >
                    {cardsItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#F5EDDD] rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            variants={cardItemVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                        >
                            <motion.div
                                className="overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.ProcutName}
                                    className="w-full h-full object-cover p-2 md:p-5 lg:p-3 xl:p-3 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </motion.div>
                            <div className="bg-black h-[1px] mx-[12px] opacity-30" />
                            <div className="p-[16px]">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-[13px] md:text-[15px] xl:text-[20px] 2xl:text-[22px] font-semibold">{item.ProcutName}</h4>
                                </div>
                                <div className="mt-2 flex justify-between items-center">
                                    <p className="text-[14px] md:text-[15px] xl:text-[19px] 2xl:text-[19px] font-semibold text-[#b4936d]">{item.ProductPrice}</p>
                                    <motion.button
                                        className="bg-black text-white rounded-full p-2 w-8 h-8 flex items-center justify-center"
                                        whileHover={{ scale: 1.1, backgroundColor: "#b4936d" }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        +
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <Link to={"/Products"}>
                    <div className="text-center mt-12">

                        <motion.button
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            whileTap="tap"
                            className="inline-flex items-center justify-center py-3 px-8 
                            bg-black hover:bg-[#b4936d] font-semibold rounded-[90px] text-white 
                            w-[220.73px] h-[46.11px] 2xl:w-[220px] 
                            transition-colors duration-300 shadow-lg"                    >
                            <span>View all products</span>
                        </motion.button>
                    </div>

                </Link>
            </figure>
        </motion.section>
    );
};