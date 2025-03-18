import React from 'react';
import { NavBarSee } from '../components/seeMore/navBar.See';
import ProductCard from '../components/product/ProductCard';

// Example product data - in a real app, this would come from an API
const products = [
  {
    id: '1',
    name: 'Wooden Rocking Chair',
    price: 55.99,
    category: 'Chair',
    subcategory: 'Wood',
    image: 'https://example.com/rocking-chair.jpg',
    description: 'A comfortable wooden rocking chair perfect for your living room or porch.'
  },
  {
    id: '2',
    name: 'Modern Coffee Table',
    price: 89.99,
    category: 'Table',
    subcategory: 'Living Room',
    image: 'https://example.com/coffee-table.jpg',
    description: 'Sleek modern coffee table with storage compartments.'
  },
  {
    id: '3',
    name: 'Leather Sofa',
    price: 299.99,
    category: 'Sofa',
    subcategory: 'Leather',
    image: 'https://example.com/leather-sofa.jpg',
    description: 'Premium leather sofa with comfortable cushions.'
  },
  {
    id: '4',
    name: 'Dining Table Set',
    price: 249.99,
    category: 'Table',
    subcategory: 'Dining',
    image: 'https://example.com/dining-table.jpg',
    description: 'Elegant dining table set with 6 chairs.'
  }
];

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5EDDD]">
      <NavBarSee />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              subcategory={product.subcategory}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;