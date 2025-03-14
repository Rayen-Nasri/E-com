import { ArrowRight } from "lucide-react";
import Cardmg from "../../assets/img/contentCard.svg";
import { Link } from "react-router";

export const ContentCard = () => {
    return (
        <section className="mt-40 bg-[#F5EDDD] lg:mx-20 xl:mx-40 2xl:mx-60">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                {/* Image Section */}
                <div className="lg:block hidden">
                    <img
                        src={Cardmg}
                        alt="A decorative image showcasing the product collection"
                        className="w-full"
                        loading="lazy"
                    />
                </div>

                {/* Content Section */}
                <article className="my-20 lg:my-auto lg:text-left mx-10 lg:px-6 xl:px-7 2xl:px-10">
                    <p className="text-[#876D49]/57 text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">
                        Make it true and memorable
                    </p>
                    <h1 className="text-[#876D49] text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl mt-4">
                        Find Everything You Want
                    </h1>
                    <Link to={"/ProductPage"}
                        className="mt-10 inline-block flex items-center border border-[#876D49] text-[#876D49] hover:text-white px-6 py-2 hover:bg-[#876D49] transition-colors duration-300 group"
                        aria-label="Shop our collection"
                    >
                        <div className="flex">
                            <span className="mr-4 text-lg font-semibold">Shop Collection</span>
                            <ArrowRight className="w-6 h-6" />

                        </div>
                    </Link>
                </article>
            </div>
        </section>
    );
};