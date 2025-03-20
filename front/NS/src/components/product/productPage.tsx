import { useState, useEffect } from "react";
import Star1 from "../../assets/img/Vector.svg";
import p1img from "../../assets/img/p1img.svg";
import p2img from "../../assets/img/p2img.svg";
import p3img from "../../assets/img/p3img.svg";
import p4img from "../../assets/img/p4img.svg";
import p5img from "../../assets/img/p5img.svg";
import p6img from "../../assets/img/p6img.svg";
import { Footer } from "../landing/benefits/footer";
import { useNavigate } from "react-router";
import { FiSearch, FiFilter } from 'react-icons/fi';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import NavBar from "../landing/home/navBar";

// Product interface
interface Product {
    img: string;
    desc: string;
    price: number;
    category: string;
    material: string;
    rating: number;
    style: string;
    color: string;
}

// Enhanced product data with more variety
const imgs: Product[] = [
    { img: p1img, desc: "Wooden Rocking Chair", price: 69.99, category: "Chair", material: "Wood", rating: 4.5, style: "Traditional", color: "Brown" },
    { img: p2img, desc: "Netting Dining Chair", price: 89.99, category: "Chair", material: "Wood", rating: 4.0, style: "Modern", color: "Natural" },
    { img: p3img, desc: "Brown Burma Chair", price: 129.99, category: "Chair", material: "Wood", rating: 4.8, style: "Contemporary", color: "Dark Brown" },
    { img: p4img, desc: "Classic Brown Chair", price: 159.99, category: "Chair", material: "Wood", rating: 3.5, style: "Classic", color: "Brown" },
    { img: p5img, desc: "Wooden Sturdy Chair", price: 199.99, category: "Chair", material: "Wood", rating: 5.0, style: "Modern", color: "Light Brown" },
    { img: p6img, desc: "Classic White Chair", price: 149.99, category: "Chair", material: "Wood", rating: 4.2, style: "Contemporary", color: "White" },
];

type SortOption = 'price-asc' | 'price-desc' | 'rating-desc' | 'name-asc';

interface FilterState {
    category: string | null;
    material: string | null;
    style: string | null;
    color: string | null;
    priceRange: [number, number];
    minRating: number;
}

export const Products = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<SortOption>('price-asc');
    const [showFilters, setShowFilters] = useState(false);
    
    // Enhanced filters
    const [filters, setFilters] = useState<FilterState>({
        category: null,
        material: null,
        style: null,
        color: null,
        priceRange: [0.00, 199.99], // Updated initial price range
        minRating: 0
    });

    // Update clearFilters function to use 0.00 as minimum
    const clearFilters = () => {
        setFilters({
            category: null,
            material: null,
            style: null,
            color: null,
            priceRange: [0.00, uniqueValues.priceRange.max], // Updated to start from 0.00
            minRating: 0
        });
        setSearchQuery("");
    };

    // Get unique values for filter options
    const uniqueValues = {
        categories: Array.from(new Set(imgs.map(item => item.category))),
        materials: Array.from(new Set(imgs.map(item => item.material))),
        styles: Array.from(new Set(imgs.map(item => item.style))),
        colors: Array.from(new Set(imgs.map(item => item.color))),
        priceRange: {
            min: Math.min(...imgs.map(item => item.price)),
            max: Math.max(...imgs.map(item => item.price))
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Filter and sort products
    const getFilteredAndSortedProducts = () => {
        let filtered = imgs.filter((product) => {
            const matchesSearch = product.desc.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = !filters.category || product.category === filters.category;
            const matchesMaterial = !filters.material || product.material === filters.material;
            const matchesStyle = !filters.style || product.style === filters.style;
            const matchesColor = !filters.color || product.color === filters.color;
            const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
            const matchesRating = product.rating >= filters.minRating;

            return matchesSearch && matchesCategory && matchesMaterial && 
                   matchesStyle && matchesColor && matchesPrice && matchesRating;
        });

        return filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'rating-desc':
                    return b.rating - a.rating;
                case 'name-asc':
                    return a.desc.localeCompare(b.desc);
                default:
                    return 0;
            }
        });
    };

    const filteredProducts = getFilteredAndSortedProducts();

    // Star rating component
    const StarRating = ({ rating }: { rating: number }) => {
        return (
            <div className="flex items-center justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                    <img
                        key={star}
                        src={Star1}
                        alt=""
                        className={`mx-[5px] ${star <= rating ? 'opacity-100' : 'opacity-30'}`}
                        loading="lazy"
                    />
                ))}
                <span className="ml-2 text-sm text-gray-600">({rating})</span>
            </div>
        );
    };

    return (
        <>
            <NavBar />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
                {/* Header with search and filters */}
                <div className="flex  space-y-4 sm:space-y-0 lg:flex-row flex-col sm:justify-between sm:items-center mb-8">
                    <h1 className="text-2xl lg:mb-0 mb-5 sm:text-3xl font-bold text-gray-900">Our Products</h1>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        {/* Search Bar */}
                        <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-[#876D49] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#876D49]"
                            />
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        {/* Sort and Filter Controls */}
                        <div className="flex gap-3 items-center">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortOption)}
                                className="flex-grow sm:flex-grow-0 px-4 py-2 border border-[#876D49] bg-[#FFF8E9] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#876D49]"
                            >
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="rating-desc">Highest Rated</option>
                                <option value="name-asc">Name: A to Z</option>
                            </select>
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 px-4 py-2 border border-[#876D49] rounded-lg hover:bg-[#876D49]/10 transition-colors"
                            >
                                <FiFilter className="hidden sm:block" />
                                <span className="sm:hidden">Filters</span>
                                <span className="hidden sm:inline">Filters</span>
                                {Object.values(filters).some(v => v !== null && v !== 0) && 
                                    <span className="bg-[#876D49] text-white rounded-full px-2 py-0.5 text-xs ml-1">
                                        Active
                                    </span>
                                }
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Filters Panel */}
                    <div className={`${showFilters ? 'block' : 'hidden lg:block'} w-full lg:w-72 space-y-4 border border-[#876D49] p-4 rounded-lg shadow-sm `}>
                        <div className="flex justify-between items-center mb-4 ">
                            <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
                            <button
                                onClick={clearFilters}
                                className="text-sm text-[#876D49] hover:underline"
                            >
                                Clear all
                            </button>
                        </div>

                        {/* Filter Sections */}
                        <div className="space-y-4 ">
                            {/* Category Filter */}
                            <div className="filter-section border border-[#876D49] p-4 rounded-lg">
                                <h3 className="text-lg font-medium text-gray-900 mb-3">Category</h3>
                                <div className="space-y-2">
                                    {uniqueValues.categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setFilters(prev => ({
                                                ...prev,
                                                category: category === prev.category ? null : category
                                            }))}
                                            className={`w-full py-2 px-3 rounded-lg text-left hover:bg-[#876D49]/10 transition-colors ${
                                                category === filters.category ? "bg-[#876D49]/20 font-medium" : ""
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range Filter */}
                            <div className="filter-section border border-[#876D49] p-4 rounded-lg">
                                <h3 className="text-lg font-medium text-gray-900 mb-3">Price Range</h3>
                                <div className="px-2 py-4">
                                    <Slider
                                        range
                                        min={uniqueValues.priceRange.min}
                                        max={uniqueValues.priceRange.max}
                                        value={filters.priceRange}
                                        onChange={(value: number | number[]) => setFilters(prev => ({
                                            ...prev,
                                            priceRange: Array.isArray(value) ? value as [number, number] : [value, value]
                                        }))}
                                        trackStyle={[{ backgroundColor: '#876D49' }]}
                                        handleStyle={[
                                            { borderColor: '#876D49', backgroundColor: '#876D49' },
                                            { borderColor: '#876D49', backgroundColor: '#876D49' }
                                        ]}
                                        railStyle={{ backgroundColor: '#E5E7EB' }}
                                    />
                                    <div className="flex justify-between mt-3 text-sm text-gray-600">
                                        <span>${filters.priceRange[0].toFixed(2)}</span>
                                        <span>${filters.priceRange[1].toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Rating Filter */}
                            <div className="filter-section border border-[#876D49] p-4 rounded-lg">
                                <h3 className="text-lg font-medium text-gray-900 mb-3">Minimum Rating</h3>
                                <div className="flex flex-wrap gap-2">
                                    {[0, 3, 3.5, 4, 4.5].map((rating) => (
                                        <button
                                            key={rating}
                                            onClick={() => setFilters(prev => ({
                                                ...prev,
                                                minRating: rating === prev.minRating ? 0 : rating
                                            }))}
                                            className={`px-3 py-1 rounded-lg border border-[#876D49] transition-colors ${
                                                rating === filters.minRating 
                                                    ? "bg-[#876D49] text-white" 
                                                    : "hover:bg-[#876D49]/10"
                                            }`}
                                        >
                                            {rating === 0 ? 'All' : `${rating}+`}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Style Filter */}
                            <div className="filter-section border border-[#876D49] p-4 rounded-lg">
                                <h3 className="text-lg font-medium text-gray-900 mb-3">Style</h3>
                                <div className="space-y-2">
                                    {uniqueValues.styles.map((style) => (
                                        <button
                                            key={style}
                                            onClick={() => setFilters(prev => ({
                                                ...prev,
                                                style: style === prev.style ? null : style
                                            }))}
                                            className={`w-full py-2 px-3 rounded-lg text-left hover:bg-[#876D49]/10 transition-colors ${
                                                style === filters.style ? "bg-[#876D49]/20 font-medium" : ""
                                            }`}
                                        >
                                            {style}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Filter */}
                            <div className="filter-section border border-[#876D49] p-4 rounded-lg">
                                <h3 className="text-lg font-medium text-gray-900 mb-3">Color</h3>
                                <div className="space-y-2">
                                    {uniqueValues.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setFilters(prev => ({
                                                ...prev,
                                                color: color === prev.color ? null : color
                                            }))}
                                            className={`w-full py-2 px-3 rounded-lg text-left hover:bg-[#876D49]/10 transition-colors ${
                                                color === filters.color ? "bg-[#876D49]/20 font-medium" : ""
                                            }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {isLoading ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="animate-pulse bg-white p-4 rounded-lg">
                                        <div className="bg-gray-200 aspect-square rounded-lg"></div>
                                        <div className="h-4 bg-gray-200 rounded mt-4 w-3/4 mx-auto"></div>
                                        <div className="h-4 bg-gray-200 rounded mt-4 w-1/4 mx-auto"></div>
                                    </div>
                                ))}
                            </div>
                        ) : filteredProducts.length === 0 ? (
                            <div className="text-center py-10 bg-white rounded-lg shadow-sm">
                                <p className="text-xl text-gray-600">No products found matching your criteria</p>
                                <button
                                    onClick={clearFilters}
                                    className="mt-4 text-[#876D49] hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-4 text-sm text-gray-600 ">
                                    Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                    {filteredProducts.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#F5EDDD] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                            onClick={() => {
                                                navigate("/Store", { state: { ...item } });
                                            }}
                                        >
                                            <div className="aspect-square relative overflow-hidden rounded-lg bg-[#F5EDDD]">
                                                <img
                                                    src={item.img}
                                                    alt={item.desc}
                                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="mt-4 space-y-2">
                                                <h3 className="text-lg font-medium text-gray-900 text-center">{item.desc}</h3>
                                                <StarRating rating={item.rating} />
                                                <p className="font-semibold text-center text-xl text-[#876D49]">
                                                    ${item.price.toFixed(2)}
                                                </p>
                                                <div className="flex justify-center gap-2 flex-wrap">
                                                    <span className="text-xs bg-[#876D49]/10 px-2 py-1 rounded-full">
                                                        {item.style}
                                                    </span>
                                                    <span className="text-xs bg-[#876D49]/10 px-2 py-1 rounded-full">
                                                        {item.color}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};