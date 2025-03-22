import React from 'react';
import ProductCard from './ProductCard';

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

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  clearFilters: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, isLoading, clearFilters }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse bg-white p-4 rounded-lg">
            <div className="bg-gray-200 aspect-square rounded-lg"></div>
            <div className="h-4 bg-gray-200 rounded mt-4 w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded mt-4 w-1/4 mx-auto"></div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-lg shadow-sm">
        <p className="text-xl text-gray-600">No products found matching your criteria</p>
        <button
          onClick={clearFilters}
          className="mt-4 text-[#876D49] hover:underline"
        >
          Clear all filters
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4 text-sm text-gray-600">
        Showing {products.length} {products.length === 1 ? 'product' : 'products'}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;