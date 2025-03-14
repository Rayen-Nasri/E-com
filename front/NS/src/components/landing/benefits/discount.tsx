import { Link } from "react-router"
import meror from "../../../assets/img/merrorr.svg"
import { ArrowRightt } from "../../../assets/assets"

export const DiscountSection = () => {
    return (
        <section className="flex lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-4 bg-[#F5EDDD] 
                            xl:rounded-[20px] md:ml-0 md:mr-0 xl:ml-[80px] xl:mr-[88px] mt-10 mb-10">
            <article className="ml-[33px] mr-[33px] lg:mr-0 lg:ml-[64px]  2xl:ml-[83px] my-17 lg:my-auto xl:my-auto 2xl:my-30 ">
                    <h2 className="font-bold text-[33px] md:text-[40px] lg:text-[40px] 2xl:text-[47px] ">
                        Explore more with 20% Discount Decoration
                    </h2>
                    <p className="mt-8 sm:text-[20px] md:text-[20px] text-[rgba(0,0,0,0.67)]  lg:text-[19px] 2xl:text-[24px] ">
                        Spruce up your home for the season with a fantastic 25% discount on our curated
                        collection of décor pieces. Brighten up every corner with style and savings.
                    </p>
                    <Link to={"/Information"} className="
                    inline-block p-[9px] mt-15 bg-[#000000] w-[180px] 
                    font-semibold  rounded-[90px]  text-white h-[44.11px]">
                        <span className="relative left-3">Explore Now </span>
                        <span className="absolute ml-10 mt-2  "><ArrowRightt /></span>
                    </Link>
            </article>
            <figure className=" flex justify-end lg:mr-[64px] 2xl:mr-[86px] md:my-20 xl:my-5 2xl:my-5 ">
                <img
                    src={meror}
                    alt="Decorative illustration for discount section"
                    loading="lazy"
                    className="hidden lg:block bg-transparent "
                />
            </figure>
        </section>
    )
}