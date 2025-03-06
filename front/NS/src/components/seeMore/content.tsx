import { ArrowRight } from 'lucide-react';
import { ArrRight } from '../../assets/assets';
import contentSee from "../../assets/img/contentSee.png";
import { useEffect } from 'react';

{
    document.body.style.backgroundColor = "#FFF8E9"
}

export const Content = () => {
    useEffect(() => {
        const dots = document.querySelectorAll('.decorative-dot');
        dots.forEach(dot => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 70;
            (dot as HTMLElement).style.left = `${randomX}%`;
            (dot as HTMLElement).style.top = `${randomY}%`;
        });
    }, []);

    return (
        <>
            <main className="relative overflow-hidden z-0">
                {/* Decorative dots */}
                <div className='mx-10 lg:block hidden'>
                    <div className="decorative-dot absolute w-3 h-3 rounded-full bg-black/60 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-4 h-4 rounded-full bg-[#B4936D]/30 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-3 h-3 rounded-full bg-[#C19D63]/60 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-6 h-6 rounded-full bg-black/60 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-4 h-4 rounded-full bg-[#B4936D]/30 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-4 h-4 rounded-full bg-[#B4936D]/30 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-4 h-4 rounded-full bg-black/30 animate-float z-0"></div>                <div className="decorative-dot absolute w-3 h-3 rounded-full bg-[#C19D63]/60 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-3 h-3 rounded-full bg-[#C19D63]/60 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-5 h-5 rounded-full bg-[#B4936D]/30 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-5 h-5 rounded-full bg-[#B4936D]/30 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-5 h-5 rounded-full bg-[#B4936D]/30 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-4 h-4 rounded-full bg-[#C19D63]/60 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-6 h-6 rounded-full bg-[#B4936D]/30 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-8 h-8 rounded-full bg-black/60 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-3 h-3 rounded-full bg-[#C19D63]/60 animate-float z-0"></div>
                    <div className="decorative-dot absolute w-4 h-4 rounded-full bg-[#B4936D]/60 animate-float z-0"></div>

                </div>

                <div className=" container mx-auto py-10 xl:py-20 2xl:py-20 lg:flex lg:flex-col lg:flex-row items-center justify-between z-1">
                    <div className="ml-[5%]  xl:w-1/2 z-1 xl:ml-30">
                        <h1 className="text-[30px] z-1  md:text-5xl mt-20  lg:mt-10 lg:text-5xl font-medium text-brown leading-tight mb-10 ">
                            Noble Nurturing For
                            <br />
                            Every Chapter of Life
                        </h1>

                        <button className="z-1 flex items-center border border-[#876D49] text-[#876D49] hover:text-white px-6 py-1 lg:py-3 hover:bg-[#876D49] hover:text-[#876D49] transition-colors duration-300 group">
                            <span className="mr-4 text-lg">Shop Now</span>
                            <ArrowRight width={30} />
                        </button>
                    </div>

                    <div className="flex 2xl:w-1/2 justify-end mr-10 xl:mr-30 z-1">
                        <div className="absolute md:relative lg:relative overflow-hidden ">
                            <img src={contentSee} alt="" className='lg:block hidden  2xl:h-170' />
                        </div>
                    </div>
                </div>

                <style >{`
                @keyframes float {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0); }
                }
                .animate-float {
                    animation: float 2.5s ease-in-out infinite;
                }
            `}</style>
            </main>
            <div className='flex mx-auto h-[3px]  w-[90%] bg-[#B4936D]/80 mt-[40px] lg:mt-[0px] xl:mb-10 2xl:mb-10 lg:mt-[-10px]' />
        </>


    )
}