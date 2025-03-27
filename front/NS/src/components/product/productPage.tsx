import { useState, useEffect } from "react";
import p1img from "../../assets/img/p1img.svg";
import p2img from "../../assets/img/p2img.svg";
import p3img from "../../assets/img/p3img.svg";
import p4img from "../../assets/img/p4img.svg";
import p5img from "../../assets/img/p5img.svg";
import p6img from "../../assets/img/p6img.svg";
import { Footer } from "../landing/benefits/footer";
import NavBar from "../landing/home/navBar";

// Import our new components
import FilterPanel from "./components/FilterPanel";
import SearchSortBar from "./components/SearchSortBar";
import ProductGrid from "./components/ProductGrid";

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
    
    // Check if any filters are active
    const hasActiveFilters = Object.values(filters).some(v => v !== null && v !== 0);

    return (
        <>
            <NavBar />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
                {/* Header with search and filters */}
                <div className="flex space-y-4 sm:space-y-0 lg:flex-row flex-col sm:justify-between sm:items-center mb-8">
                    <h1 className="text-2xl lg:mb-0 mb-5 sm:text-3xl font-bold text-gray-900">Our Products</h1>
                    <SearchSortBar 
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        showFilters={showFilters}
                        setShowFilters={setShowFilters}
                        hasActiveFilters={hasActiveFilters}
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Filters Panel */}
                    <FilterPanel 
                        filters={filters}
                        setFilters={setFilters}
                        uniqueValues={uniqueValues}
                        clearFilters={clearFilters}
                        showFilters={showFilters}
                    />

                    {/* Product Grid */}
                    <div className="flex-1">
                        <ProductGrid
                            products={filteredProducts}
                            isLoading={isLoading}
                            clearFilters={clearFilters}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};