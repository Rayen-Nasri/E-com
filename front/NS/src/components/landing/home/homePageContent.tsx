import { memo } from "react";
import { Link } from "react-router"
import { ArrowRightt } from "../../../assets/assets";
import homeTL from "../../../assets/img/homeTL.png"
import "./homeStyle.css"


export const HomePageContent = memo(() => {

    return (
        <>
            <section className="contentAnimation ">
                <article className="mt-30 ml-[33px] lg:mt-[120px] xl:mt-[100px] 2xl:mt-[140px]
                                    lg:ml-[66px] lg:grid lg:gap-6 mb-15 2xl:mr-[85px] 2xl:ml-[85px]">
                    <h1 className="
                            text-[#000000] 2xl:text-[55px] 2xl:w-[650px] font-['Poppins-Bold',_sans-serif]
                            text-[36px] md:text-[45px] xl:text-[50px] leading-[128.18%] 
                            font-bold left-px  xl:w-[515px] ">
                        Classic Design for Your Home
                    </h1>
                    <p className="
                                mt-7  lg:mt-0 text-[rgba(0,0,0,0.67)]  2xl:text-[24px] 2xl:w-[555px] md:w-[700px] xl:w-[455px]
                                text-left font-['Poppins-Regular',_sans-serif] sm:text-[20px]  md:text-[20px] font-normal ">
                        Embrace timeless sophistication with our classic furniture designs.
                        Enhance your space with our carefully curated collections.{" "}
                    </p>
                    <div className="mt-10 lg:mt-5 2xl:mt-9">
                        <Link to={""} className="
                            inline-block p-[9px] bg-[#000000] font-semibold rounded-[90px] text-black border-solid 
                            border-[#030303] text-white border w-[160.73px] h-[46.11px]">
                            <span className="relative left-3">Shop Now &#160; &#160; &#160; &#160;</span>
                            <span className="absolute mt-2 "><ArrowRightt /></span>
                        </Link>
                        <Link to={""} className="inline-block ml-8 font-['Poppins-SemiBold',_sans-serif] 
                        text-[17px] font-semibold ">
                            Learn More
                        </Link>
                    </div>

                </article>
                <img
                    src={homeTL}
                    alt=""
                    loading="lazy"
                    className=" absolute hidden md:hidden 2xl:block xl:block
                                w-auto h-auto max-w-full 
                                lg:max-w-none bottom-2 2xl:top-[-60px] top-0 xl:top-[-100px] left-1/2 
                                transform md:-translate-x-3/10
                                xl:-translate-x-1/5 md:w-[780px] 2xl:-translate-x-2/7
                                xl:left-[50%] 2xl:left-[58%] 2xl:w-[850px] 
                                "
                />
            </section>


        </>
    )
})
