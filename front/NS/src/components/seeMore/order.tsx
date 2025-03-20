import { ArrowRight, Plus } from "lucide-react"
import { Link } from "react-router"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import chair1 from "../../assets/img/chair1.svg";
import chair2 from "../../assets/img/chair2.svg";
import chair3 from "../../assets/img/chair3.svg";

interface ProductCard {
    img: string;
    desc: string;
    price: string;
}

const products: ProductCard[] = [
    { img: chair1, desc: "Wooden Rocking Chair", price: "$69.99" },
    { img: chair2, desc: "Brown burma chair", price: "$69.99" },
    { img: chair3, desc: "Wood Rocking Chair", price: "$69.99" },
];

const animations = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    },
    item: {
        hidden: { opacity: 0, y: 100, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                duration: 1,
                bounce: 0.4,
                damping: 12
            }
        }
    },
    imageHover: {
        scale: 1.1,
        rotate: 2,
        transition: { type: "spring", stiffness: 200, damping: 25 }
    },
    plusButton: {
        hover: {
            rotate: 180,
            scale: 1.1,
            backgroundColor: "#D8BE9B",
            transition: { duration: 0.3 }
        }
    }
};

const ProductCard = ({ product }: { product: ProductCard }) => (
    <motion.div className="bg-[#F5EDDD] mx-4 sm:mx-5 md:mx-6 lg:mx-0" variants={animations.item}>
        <motion.div whileHover={animations.imageHover}>
            <img
                src={product.img}
                alt={product.desc}
                loading="lazy"
                className="w-full p-7"
            />
        </motion.div>
        <div className="text-center font-semibold text-lg xl:text-xl">
            {product.desc}
        </div>
        <div className="text-center font-medium text-lg xl:text-xl mt-3">
            {product.price}
        </div>
        <div className="flex justify-center mt-2">
            <motion.div
                className="border hover:border-none p-3 bg-[#FFF8E9] rounded-full inline-block cursor-pointer relative top-[25px]"
                whileHover={animations.plusButton.hover}
                aria-label="Add to cart"
            >
                <Plus className="transition-colors duration-300 group-hover:text-white" />
            </motion.div>
        </div>
    </motion.div>
);

export const Order = () => {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref}>
            <div className="flex justify-end">
                <Link
                    to="/ProductPage"
                    className="mr-[5%] text-lg font-medium underline cursor-pointer lg:block hidden"
                    aria-label="View all products"
                >
                    View
                </Link>
            </div>

            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 px-4 lg:px-[5%] mt-10"
                variants={animations.container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div 
                    className="lg:col-span-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
                    variants={animations.item}
                >
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
                </motion.div>

                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </motion.div>
        </section>
    );
};