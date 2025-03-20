import { memo, useEffect, useState, useRef } from "react";
import { Link } from "react-router"
import { ArrowRightt } from "../../../assets/assets";
import homeTL from "../../../assets/img/homeTL.svg"
import { motion, useAnimation } from "framer-motion";

export const HomePageContent = memo(() => {
    const controls = useAnimation();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible");
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, [controls]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 15 
            }
        }
    };

    const buttonHoverVariants = {
        hover: { 
            scale: 1.05,
            transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
            }
        },
        tap: { scale: 0.98 }
    };

    return (
        <>
            <section ref={sectionRef} className="contentAnimation">
                <motion.article 
                    className="mt-30 ml-[33px] lg:mt-[120px] xl:mt-[80px] 2xl:mt-[140px]
                               lg:ml-[66px] lg:grid lg:gap-6 mb-15 2xl:mr-[85px] 2xl:ml-[85px]"
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    <motion.h1 
                        className="text-[#000000] 2xl:text-[55px] 2xl:w-[650px] font-['Poppins-Bold',_sans-serif]
                                 text-[36px] md:text-[45px] xl:text-[50px] leading-[128.18%] 
                                 font-bold left-px xl:w-[515px]"
                        variants={itemVariants}
                    >
                        Classic Design for Your Home
                    </motion.h1>
                    
                    <motion.p 
                        className="mt-7 lg:mt-0 text-[rgba(0,0,0,0.67)] 2xl:text-[24px] 2xl:w-[555px] md:w-[700px] xl:w-[455px]
                                 text-left font-['Poppins-Regular',_sans-serif] sm:text-[20px] md:text-[20px] font-normal"
                        variants={itemVariants}
                    >
                        Embrace timeless sophistication with our classic furniture designs.
                        Enhance your space with our carefully curated collections.{" "}
                    </motion.p>
                    
                    <motion.div 
                        className="mt-10 lg:mt-5 2xl:mt-9 ml- lg:ml-0 mr-4"
                        variants={itemVariants}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.1 }}
                            viewport={{ amount: 0.7, once: true }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-block"
                        >
                            <Link 
                                to={"/Products"} 
                                className="inline-block p-[9px] bg-[#000000] font-semibold 
                                          rounded-[90px] text-white border-solid 
                                          border-[#030303] border w-[158.73px] lg:w-[160.73px] 
                                          h-[46.11px] transition-all duration-500 
                                          hover:bg-[#B4936D] hover:border-[#B4936D]"
                            >
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

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.1 }}
                            viewport={{ amount: 0.7, once: true }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-block ml-2 lg:ml-8"
                        >
                            <Link 
                                to={"/Information"} 
                                className="inline-block font-['Poppins-SemiBold',_sans-serif] 
                                          text-[17px] border p-2 h-[46.11px] w-[130px] 
                                          lg:w-[160.73px] rounded-full font-semibold
                                          transition-all duration-500 hover:bg-[#B4936D] 
                                          hover:text-white hover:border-[#B4936D]"
                            >
                                <div className="text-center">
                                    <p>Learn More</p>
                                </div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.article>
                
                <motion.img
                    src={homeTL}
                    alt=""
                    loading="lazy"
                    className="absolute hidden md:hidden 2xl:block xl:block
                             w-auto h-auto max-w-full  
                             lg:max-w-none bottom-2 2xl:top-[-70px] top-0 xl:top-[-80px] left-1/2 
                             transform md:-translate-x-3/10
                             xl:-translate-x-1/5 md:w-[790px] 2xl:-translate-x-2/7
                             xl:left-[50%] 2xl:left-[58%] 2xl:w-[890px]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { 
                            opacity: 1, 
                            scale: 1,
                            transition: { 
                                delay: 0.6, 
                                duration: 0.8,
                                ease: "easeOut"
                            }
                        }
                    }}
                />
            </section>
        </>
    )
})
