import { ArrowRight } from 'lucide-react';
import contentSee from "../../assets/img/contentSee.png";
import { useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

const decorativeDots = Array(19).fill(null).map(() => ({
    sizeClass: ['dot-sm', 'dot-md', 'dot-lg'][Math.floor(Math.random() * 3)],
    color: ['bg-black/60', 'bg-[#C19D63]/60', 'bg-[#B4936D]/30'][Math.floor(Math.random() * 3)]
}));

const animations = {
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8 }
    },
    slideUp: {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8 }
    },
    slideLeft: {
        initial: { x: -50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.8 }
    },
    slideRight: {
        initial: { x: 50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.8 }
    },
    scaleIn: {
        initial: { scaleX: 0 },
        animate: { scaleX: 1 },
        transition: { duration: 0.8 }
    }
};

export const Content = () => {
    useEffect(() => {
        const dots = document.querySelectorAll('.decorative-dot');
        dots.forEach((dot) => {
            const el = dot as HTMLElement;
            el.style.left = `${Math.random() * 100}%`;
            el.style.top = `${Math.random() * 90}%`;
            el.style.animationDelay = `${Math.random() * 2}s`;
        });
    }, []);

    return (
        <AnimatePresence>
            <motion.section {...animations.fadeIn}>
                <main className="relative overflow-hidden z-0">
                    <div className='mx-10 lg:block hidden'>
                        {decorativeDots.map((dot, index) => (
                            <div
                                key={index}
                                className={`decorative-dot absolute ${dot.sizeClass} rounded-full ${dot.color} animate-float z-0`}
                            />
                        ))}
                    </div>

                    <motion.div 
                        className="container lg:mx-auto py-10 xl:py-5 2xl:py-15 lg:flex lg:flex-col lg:flex-row items-center justify-between z-1"
                        {...animations.slideUp}
                    >
                        <motion.div 
                            className="ml-[5%] xl:w-1/2 z-1 xl:ml-30"
                            {...animations.slideLeft}
                        >
                            <motion.h1 
                                className="text-[33px] lg:text-5xl md:text-[48px] xl:text-[44px] 2xl:text-[50px] mt-20 z-1 lg:mt-10 font-medium text-[#876D49] leading-tight mb-10"
                                {...animations.slideUp}
                            >
                                Noble Nurturing For<br />
                                Every Chapter of Life
                            </motion.h1>

                            <motion.div {...animations.slideUp}>
                                <Link to={"/Products"} className="z-1 inline-block flex border border-[#876D49] text-[#876D49] hover:text-white px-6 py-3 hover:bg-[#876D49] transition-all duration-300 group">
                                    <div className='flex items-center'>
                                        <span className="mr-4 text-lg font-semibold">Shop Now</span>
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <ArrowRight width={24} />
                                        </motion.div>
                                    </div>
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="flex 2xl:w-1/2 justify-end mr-10 xl:mr-30 z-1"
                            {...animations.slideRight}
                        >
                            <div className="absolute md:relative lg:relative overflow-hidden">
                                <motion.img 
                                    src={contentSee} 
                                    alt="" 
                                    loading="lazy" 
                                    className='lg:block hidden 2xl:h-170'
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    <style>
                        {`
                            .dot-sm {
                                width: 12px;
                                height: 12px;
                            }
                            .dot-md {
                                width: 16px;
                                height: 16px;
                            }
                            .dot-lg {
                                width: 24px;
                                height: 24px;
                            }
                            @keyframes float {
                                0% { transform: translateY(0) scale(1); opacity: 0.6; }
                                50% { transform: translateY(-15px) scale(1.1); opacity: 1; }
                                100% { transform: translateY(0) scale(1); opacity: 0.6; }
                            }
                            .animate-float {
                                animation: float 3s ease-in-out infinite;
                                opacity: 0;
                                animation-fill-mode: both;
                            }
                            .decorative-dot {
                                transition: all 0.3s ease;
                            }
                            .decorative-dot:hover {
                                transform: scale(1.2);
                                opacity: 1 !important;
                            }
                        `}
                    </style>
                </main>
                <motion.div 
                    className='flex mx-auto h-[3px] w-[90%] bg-[#B4936D]/80 mt-[40px] lg:mt-[0px] mb-12 xl:mb-15 2xl:mb-13 lg:mt-[-10px]'
                    {...animations.scaleIn}
                />
            </motion.section>
        </AnimatePresence>
    );
};