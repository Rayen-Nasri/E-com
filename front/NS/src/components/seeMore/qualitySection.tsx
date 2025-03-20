import benefits1 from "../../assets/img/benefits.svg";
import benefits2 from "../../assets/img/benefits2.svg";
import benefits3 from "../../assets/img/benefits3.svg";
import benefits4 from "../../assets/img/benefits4.svg";
import { motion } from "framer-motion";

const benefitsImg = [
    { img: benefits1, desc: "Ornate table", price: "$190", tag: "Best Seller" },
    { img: benefits2, desc: "Antique retro", price: "$160", tag: "New Arrival" },
    { img: benefits3, desc: "Interior decor", price: "$250", tag: "Premium" },
    { img: benefits4, desc: "Wooden table", price: "$55", tag: "Special Offer" },
];

export const Quality = () => {
    return (
        <motion.main 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-30 pb-20"
        >
            {/* Header Section */}
            <section className="text-center space-y-4">
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-block text-[#876D49] text-lg font-medium"
                >
                    Discover Our Collection
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[40px] text-[#876D49]"
                >
                    Grab Your Signature Scent Today!
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="max-w-2xl mx-auto text-[#876D49]/80 text-lg"
                >
                    Explore our curated collection of premium furniture pieces, each telling its own unique story of craftsmanship and elegance.
                </motion.p>
            </section>

            {/* Benefits Grid */}
            <article className="my-15 mx-15">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
                    {benefitsImg.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 * index }}
                            className="group bg-[#F5EDDD] border-3 border-[#CBB494] overflow-hidden hover:shadow-xl transition-all duration-300 relative"
                        >
                            <div className="overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    src={value.img}
                                    alt={value.desc}
                                    loading="lazy"
                                    className="w-full border-b-3 border-b-[#CBB494] transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4 bg-[#876D49] text-white px-3 py-1 text-sm rounded-full">
                                    {value.tag}
                                </div>
                            </div>
                            <div className="mx-5 flex justify-between py-4 text-[#876D49]">
                                <div>
                                    <h2 className="font-semibold text-lg">{value.desc}</h2>
                                    <p className="text-sm text-[#876D49]/70">Limited Edition</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-lg">{value.price}</p>
                                    <p className="text-sm text-[#876D49]/70">Free Shipping</p>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-[#876D49] text-white py-2 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                View Details
                            </div>
                        </motion.div>
                    ))}
                </div>
            </article>
        </motion.main>
    );
};