import benefits1 from "../../assets/img/benefits.svg";
import benefits2 from "../../assets/img/benefits2.svg";
import benefits3 from "../../assets/img/benefits3.svg";
import benefits4 from "../../assets/img/benefits4.svg";

const benefitsImg = [
    { img: benefits1, desc: "Ornate table", price: "$190" },
    { img: benefits2, desc: "Antique retro", price: "$160" },
    { img: benefits3, desc: "Interior decor", price: "$250" },
    { img: benefits4, desc: "Wooden table", price: "$55" },
];

export const Quality = () => {
    return (
        <main className="mt-30 ">
            {/* Header Section */}
            <section className="text-center ">
                <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[40px]">
                    Grab Your Signature Scent Today!
                </h1>

            </section>

            {/* Benefits Grid */}
            <article className="my-15 mx-15 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
                    {benefitsImg.map((value, index) => (
                        <div
                            key={index}
                            className=" bg-[#F5EDDD] border-3 border-[#CBB494] overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div>
                                <img
                                    src={value.img}
                                    alt={value.desc}
                                    loading="lazy"
                                    className="w-full border-b-3 border-b-[#CBB494] "
                                />
                            </div>
                            <div className="mx-5 flex justify-between py-4  text-[#876D49]">
                                <h2 className="font-semibold text-lg">{value.desc}</h2>
                                <p className="font-semibold text-lg">{value.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </main>
    );
};