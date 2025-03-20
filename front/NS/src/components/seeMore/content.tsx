import { ArrowRight } from 'lucide-react';
import contentSee from "../../assets/img/contentSee.png";
import { memo, useMemo } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

// Reduce number of dots and optimize their generation
const useDecorativeDots = () => {
  return useMemo(() => 
    Array(15).fill(null).map(() => ({
      sizeClass: ['dot-sm', 'dot-md', 'dot-lg'][Math.floor(Math.random() * 3)],
      color: ['bg-black/60', 'bg-[#C19D63]/60', 'bg-[#B4936D]/30'][Math.floor(Math.random() * 3)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 90}%`,
      delay: `${Math.random() * 2}s`
    })), 
  []);
};

// Simplified animations with shorter durations
const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 }
  },
  slideUp: {
    initial: { y: 15, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.4 }
  },
  slideLeft: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.4 }
  },
  slideRight: {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.4 }
  },
  scaleIn: {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: { duration: 0.4 }
  }
};

export const Content = memo(() => {
  const decorativeDots = useDecorativeDots();

  return (
    <motion.section 
      initial="initial"
      animate="animate"
      exit="initial"
      variants={animations.fadeIn}
    >
      <main className="relative overflow-hidden z-0">
        <div className='mx-10 lg:block hidden'>
          {decorativeDots.map((dot, index) => (
            <div
              key={index}
              className={`decorative-dot absolute ${dot.sizeClass} rounded-full ${dot.color} animate-float z-0`}
              style={{
                left: dot.left,
                top: dot.top,
                animationDelay: dot.delay
              }}
            />
          ))}
        </div>

        <div className="container lg:mx-auto py-10 xl:py-5 2xl:py-15 lg:flex lg:flex-col lg:flex-row items-center justify-between z-1">
          <motion.div 
            className="ml-[5%] xl:w-1/2 z-1 xl:ml-30"
            variants={animations.slideLeft}
          >
            <motion.h1 
              className="text-[33px] lg:text-5xl md:text-[48px] xl:text-[44px] 2xl:text-[50px] mt-20 z-1 lg:mt-10 font-medium text-[#876D49] leading-tight mb-10"
              variants={animations.slideUp}
            >
              Noble Nurturing For<br />
              Every Chapter of Life
            </motion.h1>

            <motion.div variants={animations.slideUp}>
              <Link to={"/Products"} className="z-1 inline-block flex border border-[#876D49] text-[#876D49] hover:text-white px-6 py-3 hover:bg-[#876D49] transition-all duration-300 group">
                <div className='flex items-center'>
                  <span className="mr-4 text-lg font-semibold">Shop Now</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      repeatType: "loop" 
                    }}
                  >
                    <ArrowRight width={24} />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex 2xl:w-1/2 justify-end mr-10 xl:mr-30 z-1"
            variants={animations.slideRight}
          >
            <div className="absolute md:relative lg:relative overflow-hidden">
              <motion.img 
                src={contentSee} 
                alt="Noble Nurturing product showcase" 
                loading="lazy" 
                width={600}
                height={400}
                className='lg:block hidden 2xl:h-170 w-auto'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>

        <style>{`
          .dot-sm {
            width: 8px;
            height: 8px;
          }
          .dot-md {
            width: 12px;
            height: 12px;
          }
          .dot-lg {
            width: 16px;
            height: 16px;
          }
          @keyframes float {
            0% { transform: translateY(0) scale(1); opacity: 0.6; }
            50% { transform: translateY(-10px) scale(1.05); opacity: 0.8; }
            100% { transform: translateY(0) scale(1); opacity: 0.6; }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
            opacity: 0;
            animation-fill-mode: both;
            will-change: transform, opacity;
          }
          .decorative-dot {
            transition: all 0.3s ease;
            will-change: transform;
            contain: layout style paint;
          }
          .decorative-dot:hover {
            transform: scale(1.1);
            opacity: 0.9 !important;
          }
        `}</style>
      </main>
      <motion.div 
        className='flex mx-auto h-[3px] w-[90%] bg-[#B4936D]/80 mt-[40px] lg:mt-[0px] mb-12 xl:mb-15 2xl:mb-13 lg:mt-[-10px]'
        variants={animations.scaleIn}
      />
    </motion.section>
  );
});

Content.displayName = 'Content';