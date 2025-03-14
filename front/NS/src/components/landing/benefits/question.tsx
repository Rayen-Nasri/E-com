import { memo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
        <div className=" lg:px-4">
            <article>
                <h2 className="font-bold text-center py-10 text-[30px] md:text-[38px] xl:text-[40px] 2xl:text-[55px] ml-[33px] mr-[33px] lg:ml-auto lg:mr-auto">
                    Explore the Wonders:Unveiling Stellar <br className="hidden sm:block" />
                     Features of Decoration
                </h2>
            </article>
            <figure className="space-y-4  max-w-5xl ml-[33px] mr-[33px] lg:ml-auto lg:mr-auto">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-[#B4936D] rounded-lg overflow-hidden"
                    >
                        <button
                            className="
                                    w-full flex justify-between items-center p-4
                                    text-left  lg:text-[20px] bg-transparent hover:bg-transparent"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                        </button>
                        {openIndex === index && (
                            <div className="p-4 text-[15px] text-[#818181] border-t ">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </figure>
        </div>
    );
})
