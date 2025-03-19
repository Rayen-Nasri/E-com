import { ArrowRight, Plus } from "lucide-react"
import { Link } from "react-router"
import chair1 from "../../assets/img/chair1.svg";
import chair2 from "../../assets/img/chair2.svg";
import chair3 from "../../assets/img/chair3.svg";
const images = [
    { img: chair1, desc: "Wooden Rocking Chair", price: "$69.99" },
    { img: chair2, desc: "Brown burma chair", price: "$69.99" },
    { img: chair3, desc: "Wood Rocking Chair", price: "$69.99" },
]

export const Order = () => {
    return (
        <section>
            {/* View All Link */}
            <div className="flex justify-end">
                <Link
                    to="/ProductPage"
                    className="mr-[5%] text-lg font-medium underline cursor-pointer lg:block hidden"
                    aria-label="View all products"
                >
                    View
                </Link>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 px-4 lg:px-[5%] mt-10">
                {/* Left Column - Text Content */}
                <div className="lg:col-span-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <p className="text-lg text-gray-600">Find your style</p>
                    <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl mt-2">
                        Every Day Classy
                    </h2>
                    <Link to={"/Products"}
                        className="mt-6 flex items-center border border-[#876D49] text-[#876D49] hover:text-white px-6 py-2 hover:bg-[#876D49] transition-colors duration-300 group"
                        aria-label="Shop now"
                    >
                        <div className="flex">
                            <span className="mr-4 text-lg font-semibold">Shop Now</span>
                            <ArrowRight className="w-6 h-6" />

                        </div>
                    </Link>
                </div>

                {/* Image Cards */}
                {images.map((element, index) => (
                    <div
                        key={index}
                        className="bg-[#F5EDDD] mx-4 sm:mx-5 md:mx-6 lg:mx-0"
                    >
                        <div>
                            <img
                                src={element.img}
                                alt={element.desc}
                                loading="lazy"
                                className="w-full p-7"
                            />
                        </div>
                        <div className="text-center font-semibold text-lg xl:text-xl">
                            {element.desc}
                        </div>
                        <div className="text-center font-medium text-lg xl:text-xl mt-3">
                            {element.price}
                        </div>
                        <div className="flex justify-center mt-2">
                            <div
                                className="border p-3 bg-[#FFF8E9] rounded-full inline-block cursor-pointer relative top-[25px]"
                                aria-label="Add to cart"
                            >
                                <Plus />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};