import { CircleDollarSign, ShieldCheck, Truck } from "lucide-react";
import "./benefitStyle.css";
import { memo } from "react";
import table from "../../../assets/img/table.jpg"

const cardContent = [
    { icon: <Truck />, title: "Free shipping", content: "We really understand our customers, so we will free shipping costs to any location quickly and safely." },
    { icon: <CircleDollarSign />, title: "Best price", content: "We provide the best price for you compared to other places with the same quality as other stores." },
    { icon: <ShieldCheck />, title: "7 years warranty", content: "We really believe in our products, so we provide a guarantee time of 7 years for you our customers." }
];

export const BenefitsCards = memo(() => {
    return (
        <>
            <section >
                <div className="grid lg:grid-flow-col md:grid-flow-col grid-rows-1 gap-5 lg:gap-11 mr-[35px] ml-[35px] mt-[100px] parent">
                    {
                        cardContent.map((content, index) => (
                            <div key={index} className="p-[16px] bg-[#F5F3F1] rounded-[8px] ">
                                <div className="flex mb-[6px] font-medium">{content.icon}&#160; {content.title}</div>
                                <div>{content.content}</div>
                            </div>
                        ))
                    }
                </div>

                <div className="mx-5 mt-[80px] ml-9 mr-9 border border-[#D9D9D9] rounded-lg flex lg:flex-row items-center gap-6 lg:gap-12">
                    {/* Image Section */}
                    <div className="lg:flex-1 hidden  lg:block max-[1100px]:absolute">
                        <img
                            src={table}
                            className="w-full h-auto object-cover maxlg:rounded-t-lg lg:rounded-l-lg max-[1100px]:hidden"
                            alt="Modern furniture design"
                            loading="lazy"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:flex-1 max-[1100px]:p-6 ">
                        <div className="max-w-xl max-[1100px]:space-y-6 lg:space-y-5">
                            <h2 className="text-3xl md:text-4xl font-semibold leading-tight ">
                                Quality Keeps Us Moving Forward
                            </h2>
                            <p className="md:text-lg text-gray-600">
                                With over 30 years of experience in manufacturing and exporting furniture for global markets, we've delivered more than ten million pieces to homes and businesses worldwide.
                            </p>
                            <button
                                className="border-2 border-black rounded-lg px-8 py-2.5 hover:bg-black hover:text-white transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                                aria-label="Learn more about our quality furniture"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>            </section>
        </>
    );
})