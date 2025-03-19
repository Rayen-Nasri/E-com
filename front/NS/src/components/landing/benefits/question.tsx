import { memo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "WHAT MATERIALS ARE USED TO CREATE YOUR FURNITURE?",
        answer: "We use high-quality wood, metal, and premium upholstery materials.",
    },
    {
        question: "WHAT KIND OF WARRANTY DO YOU PROVIDE FOR YOUR FURNITURE?",
        answer:
            "We provide a warranty of up to 7 years on all our products. This includes repair or replacement if manufacturing defects are detected.",
    },
    {
        question: "DO YOU DELIVER FURNITURE TO OTHER CITIES?",
        answer: "Yes, we offer nationwide delivery with reliable shipping partners.",
    },
    {
        question: "IS IT POSSIBLE TO ORDER CUSTOM-DESIGNED FURNITURE?",
        answer:
            "Absolutely! We offer bespoke furniture design services tailored to your needs.",
    },
    {
        question: "HOW LONG IT TAKE TO IMPLEMENT THE PROJECT?",
        answer:
            "Project timelines vary based on complexity, but standard designs take approximately 4-6 weeks.",
    },
];

export const FAQAccordion = memo(() => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-16 lg:px-4 max-w-7xl mx-auto">
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="font-bold text-center mb-16 text-[26px] md:text-[38px] xl:text-[40px] 2xl:text-[50px] px-6">
                    Explore the Wonders: <span className="text-[#B4936D]">Unveiling</span> Stellar <br className="hidden sm:block" />
                    Features of Decoration
                </h2>
            </motion.article>
            
            <figure className="space-y-6 max-w-4xl mx-auto px-6">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border border-[#B4936D] rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                        <button
                            className="w-full flex justify-between items-center p-6
                                     text-left lg:text-[20px] bg-transparent hover:bg-[#F5EDDD]
                                     transition-colors duration-300 font-medium"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <motion.span
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-[#B4936D]"
                            >
                                <ChevronDown />
                            </motion.span>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 text-[16px] leading-relaxed text-[#666666] border-t border-[#B4936D]/30 bg-[#F5EDDD]/30">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </figure>
        </div>
    );
});
