import { Link, useLocation } from "react-router";
import { ArrowLeft, Check, Minus, Plus, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Stars2 from '../../assets/img/startt.svg'
import verified from "../../assets/img/verified.svg"
import account from "../../assets/img/Account.svg"
import { Footer } from "../landing/benefits/footer";
import { toast } from 'react-hot-toast';
import { useCartStore } from "../../global/cartStore";
import { useAuthStore } from "../../global/authStore";


interface ProductDetails {
    img: string;
    desc: string;
    price: number;
    rating?: number;
    category?: string;
    material?: string;
}

import { CartItem as GlobalCartItem } from "../../global/cartStore";
import NavBar from "../landing/home/navBar";

export const Store = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(1);
    const { addItem } = useCartStore();
    const location = useLocation();
    const { checkAuth }: any = useAuthStore()
    const product: ProductDetails = location.state || {
        img: "",
        desc: "",
        price: 0,
        rating: 4.9,
        category: "Chair",
        material: "Wood"
    };

    // Calculate discounted price (20% off)
    const originalPrice = product.price;
    const discountedPrice = product.price * 0.8;

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleQuantityChange = (newCount: number) => {
        setCount(Math.max(1, newCount));
    };

    const addToCart = async() => {

        const newItem: GlobalCartItem = {
            id: `product-${product.desc.replace(/\s+/g, '-').toLowerCase()}`,
            name: product.desc,
            price: discountedPrice,
            quantity: count,
            category: product.category || 'Furniture',
            image: product.img
        };
        try {
            const isAuthenticated = await checkAuth();
            
            if (!isAuthenticated) {
                toast.error("You need to login first");
                return;
            }

            addItem(newItem);
            toast.success(`${count} ${count > 1 ? 'items' : 'item'} added to cart!`);
        } catch (error) {
            console.error("Error checking authentication:", error);
            toast.error("Something went wrong. Please try again.");
        }

    };

    // Dynamic star rating component
    const StarRating = ({ rating, showCount = true }: { rating: number, showCount?: boolean }) => {
        return (
            <div className="flex items-center gap-2">
                <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <img
                            key={star}
                            src={Stars2}
                            alt=""
                            className={`h-5 ${star <= rating ? 'opacity-100' : 'opacity-30'}`}
                            loading="lazy"
                        />
                    ))}
                </div>
                {showCount && (
                    <>
                        <span className="font-medium">{rating.toFixed(1)}</span>
                        <span className="text-[#000000]/70">out of 5</span>
                    </>
                )}
            </div>
        );
    };

    if (isLoading) {
        return (
            <>
                <NavBar />
                <div className="min-h-screen p-4 md:p-8 bg-[#FFF8E9]">
                    <div className="max-w-6xl mx-auto">
                        <div className="animate-pulse">
                            <div className="h-8 w-32 bg-gray-200 rounded mb-6"></div>
                            <div className="grid md:grid-cols-2 gap-15 mb-12">
                                <div className="bg-gray-200 aspect-square rounded-md"></div>
                                <div className="space-y-4">
                                    <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-24 bg-gray-200 rounded"></div>
                                    <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <NavBar />
            <div className="min-h-screen p-4 md:p-8 bg-[#FFF8E9] ">
                <div className="max-w-6xl mx-auto">
                    {/* Back to product link */}
                    <Link to={"/Products"} className="w-40 flex items-center gap-2 text-primary mb-6 hover:underline">
                        <ArrowLeft className="h-4 w-4 text-[#876D49] " />
                        <span className="text-[#876D49] ">Back to product</span>
                    </Link>

                    {/* Product details section */}
                    <div className="grid md:grid-cols-2 gap-15 mb-12">
                        {/* Product image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="border border-[#876D49] rounded-md overflow-hidden group"
                        >
                            <img
                                src={product.img}
                                alt={product.desc}
                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                        </motion.div>

                        {/* Product info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div>
                                <h1 className="text-3xl font-medium text-[#876D49] mb-2">{product.desc}</h1>
                                <div className="flex items-center gap-2 text-sm text-[#876D49]/70">
                                    <span>Category: {product.category}</span>
                                    <span>•</span>
                                    <span>Material: {product.material}</span>
                                </div>
                            </div>

                            <p className="text-black/60">
                                Experience unparalleled comfort and style with our meticulously crafted furniture.
                                Each piece is designed to bring both functionality and aesthetic appeal to your space,
                                ensuring a perfect blend of form and function.
                            </p>

                            {/* Price */}
                            <div className="flex items-center gap-3">
                                <span className="text-3xl font-bold">${discountedPrice.toFixed(2)}</span>
                                <span className="text-black/54 line-through">${originalPrice.toFixed(2)}</span>
                                <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm">Save 20%</span>
                            </div>

                            {/* Stock status */}
                            <div className="flex items-center gap-2 text-[#508B6B]">
                                <Check className="h-4 w-4" />
                                <span>In Stock</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-4">
                                <StarRating rating={product.rating || 4.9} />
                                <span className="text-[#000000]/70">200+ Reviews</span>
                            </div>

                            {/* Quantity and add to cart */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-[#876D49] rounded-md">
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        className="p-[11px] px-3 hover:bg-[#876D49]/10 transition-colors"
                                        onClick={() => handleQuantityChange(count - 1)}
                                    >
                                        <Minus className="h-4 w-4" />
                                    </motion.button>
                                    <motion.span
                                        key={count}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="px-6 text-xl font-medium min-w-[3rem] text-center"
                                    >
                                        {count}
                                    </motion.span>
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 px-3 hover:bg-[#876D49]/10 transition-colors"
                                        onClick={() => handleQuantityChange(count + 1)}
                                    >
                                        <Plus className="h-4 w-4" />
                                    </motion.button>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={addToCart}
                                    className="flex items-center gap-2 bg-[#876D49] text-white px-6 py-2 rounded-md hover:bg-[#876D49]/90 transition-colors"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    Add to Cart
                                </motion.button>
                            </div>

                        </motion.div>
                    </div>

                    {/* Reviews section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="border border-[#876D49] rounded-md overflow-hidden bg-card mb-8 p-7"
                    >
                        <div className="grid md:grid-cols-2 lg:divide-x divide-[#876D49]">
                            {/* Overall rating */}
                            <div className="p-6">
                                <h2 className="text-2xl font-medium mb-4">Customer Reviews</h2>
                                <StarRating rating={product.rating || 4.9} />
                                <p className="mt-4 text-[#000000]/70">10,000+ global ratings</p>
                            </div>

                            {/* Rating distribution */}
                            <div className="p-6">
                                <div className="space-y-3">
                                    {[
                                        { stars: 5, percentage: 60 },
                                        { stars: 4, percentage: 25 },
                                        { stars: 3, percentage: 10 },
                                        { stars: 2, percentage: 3 },
                                        { stars: 1, percentage: 2 },
                                    ].map((rating) => (
                                        <div key={rating.stars} className="flex items-center gap-2">
                                            <span className="w-12 text-sm">{rating.stars} Star</span>
                                            <div className="h-2 flex-1 rounded-full overflow-hidden bg-[#D9D9D9]">
                                                <div
                                                    className="h-full bg-[#FFCC00] rounded-full transition-all duration-500"
                                                    style={{ width: `${rating.percentage}%` }}
                                                />
                                            </div>
                                            <span className="w-12 text-sm text-right">{rating.percentage}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Customer testimonials */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="border border-[#876D49] rounded-md overflow-hidden bg-card"
                    >
                        <h2 className="text-2xl font-medium text-[#876D49] text-center p-6 border-b border-[#876D49]">
                            What Our Customers Say
                        </h2>

                        {/* Reviews */}
                        <div className="divide-y divide-[#876D49]/20 p-8">
                            {[
                                {
                                    name: "Joseph Miller",
                                    date: "2 days ago",
                                    rating: 5,
                                    title: "Exceptional Quality and Design",
                                    content:
                                        "I absolutely love my new chair! The craftsmanship is incredible, and it adds such a unique, elegant touch to my living room. It's not only beautiful but also surprisingly comfortable. The team was very helpful and delivered it on time. Highly recommend!",
                                    verified: true
                                },
                                {
                                    name: "Sarah Anderson",
                                    date: "1 week ago",
                                    rating: 4.5,
                                    title: "Great Value for Money",
                                    content:
                                        "This chair exceeded my expectations! The quality is outstanding, and they're built to last. The seller was very professional and answered all my questions. Assembly was straightforward, and the final product looks amazing in my space.",
                                    verified: true
                                },
                                {
                                    name: "Michael Chen",
                                    date: "2 weeks ago",
                                    rating: 5,
                                    title: "Perfect Addition to My Home",
                                    content:
                                        "Amazing product and service! The chair I purchased is stunning and fits perfectly in my home office. It's durable, stylish, and adds a modern touch to my workspace. The delivery was smooth, and the packaging was secure. Couldn't be happier!",
                                    verified: true
                                },
                            ].map((review, index) => (
                                <div key={index} className="py-8 first:pt-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#876D49]/10 flex items-center justify-center">
                                                <img src={account} alt="" className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-[17px] text-[#000000]/80">{review.name}</div>
                                                {review.verified && (
                                                    <div className="text-xs text-[#508B6B] flex items-center gap-1">
                                                        <img src={verified} alt="verified" className="w-4 h-4" loading="lazy" />
                                                        <span>Verified Purchase</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[#000000]/50 text-sm mb-1">{review.date}</div>
                                            <StarRating rating={review.rating} showCount={false} />
                                        </div>
                                    </div>
                                    <h3 className="text-[#000000]/80 font-medium mb-2 text-lg">{review.title}</h3>
                                    <p className="text-[#000000]/60 leading-relaxed">{review.content}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
};