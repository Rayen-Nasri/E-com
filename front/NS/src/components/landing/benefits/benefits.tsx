import { Link } from "react-router"
import { ArrowRightt } from "../../../assets/assets"
import storage from "../../../assets/img/glas.svg"
import { memo } from "react"
export const Benefits = memo(() => {
    return (
        <section className="lg:mt- ">
            <div className="lg:grid grid-cols-1 lg:grid-cols-2 grid-rows-1 2xl:mr-[85px]
                            2xl:ml-[85px] mt-5 mr-[33px] ml-[33px] lg:mr-[66px] lg:ml-[66px] 
                            ">
                <div className=" lg:mt-[60px] 2xl:mt-[150px]   ">
                    <img
                        src={storage}
                        alt="storage"
                        className="hidden lg:block 2xl:w-[51%] "
                        loading="lazy"
                    />
                </div>
                <div className="mb-10 mt-10 md:mt-[100px] lg:mt-[240px] xl:mt-[250px] 2xl:mt-[320px]  lg:relative  ">
                    <h2 className="font-bold text-[33px] md:text-[40px] xl:text-[47px] 2xl:text-[55px]">
                        The Timeless Elegance of Classic Decor
                    </h2>

                    <div className="bg-[#B4936D] h-[3px] rounded-[30px] mt-2 mb-8 xl:mb-9 2xl:mb-9 w-[90%] lg:w-full" />

                    <p className="sm:text-[19px] md:text-[20px] xl:text-[20px] 2xl:text-[24px]  text-[rgba(0,0,0,0.67)] ">
                        redefines interior design by harmonizing tradition and sophistication. It showcases how enduring styles seamlessly integrate craftsmanship and timeless materials
                    </p>
                    <Link to={"/ProductPage"} className="inline-block p-[9px] mb-4 mt-8 bg-[#000000] font-semibold rounded-[90px] text-black border-solid border-[#030303] text-white border w-[160.73px] h-[46.11px]">
                        <span className="relative left-3">Shop Now &#160; &#160; &#160; &#160;</span>
                        <span className="absolute mt-2 "><ArrowRightt /></span>
                    </Link>
                </div>

            </div>
            <div className="bg-[#B4936D] h-[3px] rounded-[30px] mr-[30px] mb-[20px] ml-[30px] mt-[22px] lg:mr-[66px] lg:ml-[66px]  2xl:mr-[85px] 2xl:ml-[85px] " />
        </section>
    )
})