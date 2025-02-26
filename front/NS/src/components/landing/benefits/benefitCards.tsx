import { Link } from "react-router";
import { ArrowRightCard } from "../../../assets/assets";
import chair1 from "../../../assets/img/Frame 237.jpg";
import chair2 from "../../../assets/img/Frame 238.jpg";
import chair3 from "../../../assets/img/Frame 239.jpg";
import chair4 from "../../../assets/img/Frame 240.jpg";
// import chair5 from "../../../assets/img/Frame 241.jpg";
// import chair6 from "../../../assets/img/Frame 242.jpg";
// import chair7 from "../../../assets/img/Frame 243.jpg";
// import chair8 from "../../../assets/img/Frame 244.jpg";

const cardsItems = [
    { img: chair1, ProcutName: "Classic brown chair", ProductPrice: "$69.99" },
    { img: chair2, ProcutName: "Classic white chair", ProductPrice: "$69.99" },
    { img: chair3, ProcutName: "Classic brown chair", ProductPrice: "$69.99" },
    { img: chair4, ProcutName: "Wooden sturdy chair", ProductPrice: "$69.99" },
    // { img: chair5, ProcutName: "Netting Dining Chair", ProductPrice: "$69.99" },
    // { img: chair6, ProcutName: "Campbell wooden chair", ProductPrice: "$69.99" },
    // { img: chair7, ProcutName: "Wood Rocking Chair", ProductPrice: "$69.99" },
    // { img: chair8, ProcutName: "Brown burma chair", ProductPrice: "$69.99" },
];
const categories = ["Chair", "Desk", "Bed", "Table"];

export const CardSection = () => {
    return (
        <section className="mt-10">
            <article>
                <h2 className="font-bold text-center text-[33px] md:text-[43px] xl:text-[47px] 2xl:text-[55px]">
                    Our Products
                </h2>
                <p className="text-center mr-[30px] ml-[30px] text-[15px] lg:text-[19px]">
                    Explore our high-quality, stylish items designed to elevate
                    <span className="hidden lg:block md:block"></span>
                    your daily life.
                </p>
            </article>
            <figure>


                <div className="flex justify-center ml-[30px] mr-[30px] space-x-3 lg:space-x-4 mb-10 2xl:mb-0 xl:mb-0 mt-9">
                    {categories.map((category, index) => (
                        <div key={index} className="relative">
                            <button
                                className="
                                    text-[#030303] hover:text-[#b4936d] text-left
                                    font-['Poppins-Regular',_sans-serif] text-[25px]
                                    hover:text-[27px] font-normal transition-all duration-300
                                    lg:static mx-2 md:mx-4 lg:mx-4
                                "
                            >
                                {category}
                            </button>
                            {index !== categories.length - 1 && (
                                <div
                                    className="
                                        absolute top-1/2 right-[-4px] transform -translate-y-1/2
                                        h-[40px] w-[2px] bg-black rounded-[20px] 
                                    "
                                />
                            )}
                        </div>
                    ))}
                </div>


                {/* //!CardSection */}

                <div className="  xl:p-10 lg:mr-[64px] lg:ml-[64px]
                    grid grid-cols-2 grid-rows-2 lg:grid-cols-4
                    lg:grid-rows-1 gap-7 lg:gap-9 xl:mt-12 xl:mb-12 mt-[18px] mr-[33px]
                    ml-[33px] 2xl:mr-[86px] 2xl:ml-[86px]
                    xl:mr-[64px] xl:ml-[64px] md:p-16 sm:p-7
                ">
                    {cardsItems.map((item, index) => (
                        <div key={index} className="bg-[#F5EDDD] rounded-[10px]">
                            <div className="">
                                <img
                                    src={item.img}
                                    alt={item.ProcutName}
                                    className=" w-full h-full object-cover p-6"
                                    loading="lazy"
                                />
                            </div>
                            <div className="bg-black h-[0.5px] ml-[12px] mr-[12px]" />
                            <div className="m-[12px]">
                                <div className="flex justify-between ">
                                    <h4 className="text-[14px] md:text-[20px] xl:text-[20px] 2xl:text-[22px] font-semibold">{item.ProcutName}</h4>
                                    <Link to={""} className="lg:h-8 lg:w-6 ">
                                        <span className="relative top-3 lg:top-5"><ArrowRightCard /></span>
                                    </Link>
                                </div>
                                <div>
                                    <p className="text-[14px] md:text-[19px]  xl:text-[19px] 2xl:text-[19px] font-semibold">{item.ProductPrice}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* //! Button Section */}
                <div className="text-center">
                    <Link to={""} className=" 
                    inline-block p-[9px] 2xl:w-[210px] mt-10 lg:mt-10 xl:mt-1 mb-15 bg-[#000000] font-semibold rounded-[90px]
                    text-black border-solid text-white border w-[190.73px] h-[46.11px] text-center ">
                        <span className="">View all products</span>
                    </Link>
                </div>
            </figure>
        </section>
    );
};