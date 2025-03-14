import { useState } from "react";
import { NavBarSee } from "../seeMore/navBar.See";
import Star1 from "../../assets/img/Vector.svg";
import p1img from "../../assets/img/p1img.svg";
import p2img from "../../assets/img/p2img.svg";
import p3img from "../../assets/img/p3img.svg";
import p4img from "../../assets/img/p4img.svg";
import p5img from "../../assets/img/p5img.svg";
import p6img from "../../assets/img/p6img.svg";
import { Footer } from "../landing/benefits/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const imgs = [
    { img: p1img, desc: "Wooden Rocking Chair", price: "$69.99", category: "Chair", material: "Wood" },
    { img: p2img, desc: "Netting Dining Chair", price: "$69.99", category: "Chair", material: "Wood" },
    { img: p3img, desc: "Brown burma chair", price: "$69.99", category: "Chair", material: "Wood" },
    { img: p4img, desc: "Classic brown chair", price: "$69.99", category: "Chair", material: "Wood" },
    { img: p5img, desc: "Wooden sturdy chair", price: "$69.99", category: "Chair", material: "Wood" },
    { img: p6img, desc: "Classic white chair", price: "$69.99", category: "Chair", material: "Wood" },
];

export const ProductPage = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter products based on selected category and material
    const filteredProducts = imgs.filter((product) => {
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        const matchesMaterial = selectedMaterial ? product.material === selectedMaterial : true;
        return matchesCategory && matchesMaterial;
    });

    return (
        <>
            <NavBarSee />
            <main className="px-15 pb-12 mt-15">
                <h1 className="text-3xl font-bold mb-5">Filter Option</h1>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Filters */}
                    <div className="w-full md:w-64 space-y-6">
                        {/* Category Filter */}
                        <div className="border border-[#876D49] rounded-lg p-4">
                            <h2 className="text-xl font-semibold mb-4">Category</h2>
                            <div className="space-y-3">
                                {["Table", "Living Room", "Office", "Kitchen", "Decor", "Chair"].map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                                        className={`w-full py-2 border border-[#876D49] rounded-full text-center hover:bg-[#876D49]/10 ${
                                            category === selectedCategory ? "bg-[#876D49]/20" : ""
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Material Filter */}
                        <div className="border border-[#876D49] rounded-lg p-4">
                            <h2 className="text-xl font-semibold mb-4">Material</h2>
                            <div className="space-y-3">
                                {["Glass", "Upolstered", "Cloth", "Wood"].map((material) => (
                                    <button
                                        key={material}
                                        onClick={() => setSelectedMaterial(material === selectedMaterial ? null : material)}
                                        className={`w-full py-2 px-4 border border-[#876D49] rounded-full text-center hover:bg-[#876D49]/10 ${
                                            material === selectedMaterial ? "bg-[#876D49]/20" : ""
                                        }`}
                                    >
                                        {material}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1 px md:px-0 lg:px-0 xl:px-0 2xl:px-0 2xl:ml-15">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                            {filteredProducts.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-[#F5EDDD] hover:shadow-md cursor-pointer"
                                    onClick={() => {
                                        navigate("/Store", { state: { img: item.img, desc: item.desc , price : item.price } });
                                    }}
                                >
                                    <div className="aspect-square relative">
                                        <img
                                            src={item.img}
                                            alt={item.desc}
                                            className="w-full"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="text-sm text-center font-semibold text-[19px]">{item.desc}</h3>
                                    <div className="flex my-2 justify-center">
                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                            <img key={i} src={Star1} alt="" className="mx-[5px]" loading="lazy" />
                                        ))}
                                    </div>
                                    <p className="font-semibold text-center text-[19px]">{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};