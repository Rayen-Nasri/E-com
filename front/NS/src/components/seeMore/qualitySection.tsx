import { memo, useMemo } from "react";
import benefits1 from "../../assets/img/benefits.svg";
import benefits2 from "../../assets/img/benefits2.svg";
import benefits3 from "../../assets/img/benefits3.svg";
import benefits4 from "../../assets/img/benefits4.svg";
import { motion, LazyMotion, domAnimation } from "framer-motion";

// Define the type for benefit items
type BenefitItem = {
    img: string;
    desc: string;
    price: string;
    tag: string;
};

// Memoize benefits data to prevent unnecessary re-creation
const useBenefitsData = (): BenefitItem[] => {
    return useMemo(() => [
        { img: benefits1, desc: "Ornate table", price: "$190", tag: "Best Seller" },
        { img: benefits2, desc: "Antique retro", price: "$160", tag: "New Arrival" },
        { img: benefits3, desc: "Interior decor", price: "$250", tag: "Premium" },
        { img: benefits4, desc: "Wooden table", price: "$55", tag: "Special Offer" },
    ], []);
};

// Enhanced animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

// Optimized benefit card with reduced animations
const BenefitCard = memo(({ item, index }: { item: BenefitItem; index: number }) => (
    <motion.div
        variants={itemVariants}
        className="group bg-[#F5EDDD] border-3 border-[#CBB494] overflow-hidden hover:shadow-xl transition-all duration-300 relative"
    >
        <div className="overflow-hidden">
            <motion.img
                src={item.img}
                alt={item.desc}
                loading="lazy"
                width={300}
                height={200}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="w-full border-b-3 border-b-[#CBB494]"
            />
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
                className="absolute top-4 right-4 bg-[#876D49] text-white px-3 py-1 text-sm rounded-full"
            >
                {item.tag}
            </motion.div>
        </div>
        <div className="mx-5 flex justify-between py-4 text-[#876D49]">
            <div>
                <h2 className="font-semibold text-lg">{item.desc}</h2>
                <p className="text-sm text-[#876D49]/70">Limited Edition</p>
            </div>
            <div className="text-right">
                <p className="font-semibold text-lg">{item.price}</p>
                <p className="text-sm text-[#876D49]/70">Free Shipping</p>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-[#876D49] text-white py-2 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            View Details
        </div>
    </motion.div>
));

BenefitCard.displayName = 'BenefitCard';

export const Quality = memo(() => {
    const benefitsData = useBenefitsData();
    
    return (
        <LazyMotion features={domAnimation}>
            <motion.main 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
                className="mt-30 pb-20"
            >
                {/* Header Section */}
                <section className="text-center space-y-4">
                    <motion.span 
                        variants={headerVariants}
                        className="inline-block text-[#876D49] text-lg font-medium"
                    >
                        Discover Our Collection
                    </motion.span>
                    <motion.h1 
                        variants={headerVariants}
                        className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[40px] text-[#876D49]"
                    >
                        Grab Your Signature Scent Today!
                    </motion.h1>
                    <motion.p
                        variants={headerVariants}
                        className="max-w-2xl mx-auto text-[#876D49]/80 text-lg"
                    >
                        Explore our curated collection of premium furniture pieces, each telling its own unique story of craftsmanship and elegance.
                    </motion.p>
                </section>

                {/* Benefits Grid */}
                <motion.article 
                    variants={containerVariants}
                    className="my-15 mx-15"
                >
                    <motion.div 
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8"
                    >
                        {benefitsData.map((item, index) => (
                            <BenefitCard key={index} item={item} index={index} />
                        ))}
                    </motion.div>
                </motion.article>
            </motion.main>
        </LazyMotion>
    );
});

Quality.displayName = 'Quality';
