import React from 'react';
import { useNavigate } from 'react-router';
import StarRating from './StarRating';

interface ProductCardProps {
  product: {
    img: string;
    desc: string;
    price: number;
    category?: string;
    material?: string;
    rating: number;
    style?: string;
    color?: string;
  };
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate('/Store', { state: { ...product } });
    }
  };

  return (
    <div
      className="bg-[#F5EDDD] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-square relative overflow-hidden rounded-lg bg-[#F5EDDD]">
        <img
          src={product.img}
          alt={product.desc}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-medium text-gray-900 text-center">{product.desc}</h3>
        <div className="flex justify-center">
          <StarRating rating={product.rating} size="sm" />
        </div>
        <p className="font-semibold text-center text-xl text-[#876D49]">
          ${product.price.toFixed(2)}
        </p>
        {(product.style || product.color) && (
          <div className="flex justify-center gap-2 flex-wrap">
            {product.style && (
              <span className="text-xs bg-[#876D49]/10 px-2 py-1 rounded-full">
                {product.style}
              </span>
            )}
            {product.color && (
              <span className="text-xs bg-[#876D49]/10 px-2 py-1 rounded-full">
                {product.color}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;