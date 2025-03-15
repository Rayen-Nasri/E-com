import { Link, useLocation } from "react-router";
import { ArrowLeft, Check, Minus, Plus } from "lucide-react"
import { useEffect, useState } from "react";
import { NavBarSee } from "../seeMore/navBar.See";
import Stars2 from '../../assets/img/Stars2.svg'
import verified from "../../assets/img/verified.svg"
import account from "../../assets/img/Account.svg"
import { Footer } from "../landing/benefits/footer";


export const Store = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [count, setCount] = useState(1);
    // Use the useLocation hook to access the state passed from the ProductPage
    const location = useLocation();
    const checkCount = () => {
        if (count <= 1) {
            setCount(1);
        }
    }
    const { img, desc, price } = location.state || { img: "", desc: "", price: "" };

    return (
        <>
            <NavBarSee />
            <div className="min-h-screen p-4 md:p-8 bg-[#FFF8E9] ">
                <div className="max-w-6xl mx-auto">
                    {/* Back to product link */}
                    <Link to={"/ProductPage"} className="flex items-center gap-2 text-primary mb-6 hover:underline">
                        <ArrowLeft className="h-4 w-4 text-[#876D49] " />
                        <span className="text-[#876D49] ">Back to product</span>
                    </Link>

                    {/* Product details section */}
                    <div className="grid md:grid-cols-2 gap-15 mb-12">
                        {/* Product image */}
                        <div className="border border-[#876D49] rounded-md overflow-hidden ">
                            <img
                                src={img}
                                alt={desc}
                                className="w-full h-auto "
                                loading="lazy"
                            />
                        </div>

                        {/* Product info */}
                        <div>
                            <h1 className="text-3xl font-medium text-[#876D49] mb-4">{desc}</h1>
                            <p className="text-black/42 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa dignissimos nisi soluta mollitia,
                                quas ut beatae aspernatur dolorem, iste cupiditate officiis! Vel reprehenderit tenetur omnis aspernatur
                                quo, ullam optio?
                            </p>

                            {/* Price */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl font-bold">{price}</span>
                                <span className="text-black/54 line-through">$155.99</span>
                            </div>

                            {/* Stock status */}
                            <div className="flex items-center gap-2 mb-4 text-accent text-[#508B6B]/73 ">
                                <Check className="h-4 w-4" />
                                <span className="">In Stock</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-6 text-[#000000]/70  ">
                                <div className="flex">
                                    <img src={Stars2} alt="Stars" loading="lazy"/>
                                </div>
                                <span className="font-medium">4.9</span>
                                <span className="text-">200 Reviews</span>
                            </div>

                            {/* Quantity and add to cart */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-[#876D49] rounded-md">
                                    <button className="p-2 px-3 " onClick={()=>{setCount(count-1); checkCount()}}>
                                        <Minus />
                                    </button>
                                    <span className="px-4 text-xl">{count}</span>
                                    <button className="p-2 px-3 " onClick={()=>{setCount(count+1)}}>
                                        <Plus />
                                    </button>

                                </div>
                                <button className="border border-[#876D49] px-6 py-2 rounded-md hover:bg-primary/90">Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    {/* Reviews section */}
                    <div className="border border-[#876D49] rounded-md overflow-hidden bg-card mb-8 p-7">
                        <div className="grid md:grid-cols-2  lg:divide-x divide-[#876D49]">
                            {/* Overall rating */}
                            <div className="p-6">
                                <h2 className="text-2xl font-medium mb-4">Customer reviews</h2>
                                <div className="flex items-center gap-2 mb-2 text-[#000000]/70 ">
                                    <img src={Stars2} alt=""  loading="lazy"/>

                                    <span className="font-medium">4.9</span>
                                    <span className="">out of 5</span>
                                </div> dsqdsqra
                                <p className=" mb-4 text-[#000000]/70 ">10,000 global ratings</p>
                            </div>

                            {/* Rating distribution */}
                            <div className="p-6">
                                <div className="space-y-2">
                                    {[
                                        { stars: 5, percentage: 60 },
                                        { stars: 4, percentage: 15 },
                                        { stars: 3, percentage: 20 },
                                        { stars: 2, percentage: 7 },
                                        { stars: 1, percentage: 3 },
                                    ].map((rating) => (
                                        <div key={rating.stars} className="flex items-center gap-2">
                                            <span className="w-12 text-sm">{rating.stars} Star</span>
                                            <div className="h-2 flex-1  rounded-full overflow-hidden bg-[#D9D9D9]">
                                                    <div className="h-full bg-[#FFCC00] rounded-full" style={{ width: `${rating.percentage}%` }}></div>
                                            </div>
                                            <span className="w-8 text-sm text-right">{rating.percentage}%</span>


                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Customer testimonials */}
                    <div className="border border-[#876D49] rounded-md overflow-hidden bg-card divide-y  divide-[#876D49]">
                        <h2 className="text-3xl font-medium text-[#876D49] text-center  p-6">customer say</h2>

                        {/* Reviews */}
                        <div className="divide-y divide-[#876D49] p-8">
                            {[
                                {
                                    name: "Joseph",
                                    date: "May 10, 2025",
                                    title: "Soo cool",
                                    content:
                                        "I absolutely love my new stone chair! The craftsmanship is incredible, and it adds such a unique, elegant touch to my garden. It's not only beautiful but also surprisingly comfortable. The team was very helpful and delivered it on time. Highly recommend!",
                                },
                                {
                                    name: "Ahmed",
                                    date: "May 16, 2025",
                                    title: "Great product",
                                    content:
                                        "These stone chairs are a masterpiece! I bought two for my patio, and they've become the centerpiece of my outdoor space. The quality is outstanding, and they're built to last. The seller was very professional and answered all my questions. Worth every penny!",
                                },
                                {
                                    name: "Rayen",
                                    date: "May 21, 2025",
                                    title: "Best quality",
                                    content:
                                        "Amazing product and service! The stone chair I purchased is stunning and fits perfectly in my backyard. It's durable, stylish, and adds a rustic charm to my home. The delivery was smooth, and the packaging was secure. I'm so happy with my purchase—thank you!",
                                },
                            ].map((review, index) => (
                                <div key={index} className="pt-8 pb-8">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full relative top-1  flex items-center justify-center">
                                                <span><img src={account} alt="" /></span>
                                            </div>
                                            <div>
                                                <div className="font-medium text-[17px] text-[#000000]/80 ">{review.name}</div>
                                                <div className="text-xs text-[#508B6B] flex items-center gap-1 ">
                                                    <span><img src={verified} alt="verified" loading="lazy"/></span>
                                                    <span>Verified buyer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[#000000]/50 text-[15px] lg:text-[19px] ">{review.date}</div>
                                            <div className="flex justify-end">
                                                <img src={Stars2} className="lg:w-full w-[80%] " alt="Stars" loading="lazy"/>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-[#000000]/80 font-medium mb-2 text-[18px] ">{review.title}</h3>
                                    <p className="text-[#000000]/50">{review.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};