import React from 'react';
import { useCartStore, CartItem } from '../../global/cartStore';
import toast from 'react-hot-toast';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  subcategory?: string;
  image?: string;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  category,
  subcategory,
  image,
  description
}) => {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = () => {
    const item: CartItem = {
      id,
      name,
      price,
      quantity: 1,
      category,
      subcategory,
      image
    };
    
    addItem(item);
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-4">
        <h3 className="font-medium text-lg">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{category} {subcategory && `• ${subcategory}`}</p>
        
        {description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        )}
        
        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold">${price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-[#A68A64] text-white px-3 py-1 rounded text-sm hover:bg-[#8a7353] transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;