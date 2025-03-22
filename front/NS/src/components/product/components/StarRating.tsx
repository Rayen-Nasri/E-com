import React from 'react';
import Star1 from '../../../assets/img/Vector.svg';

interface StarRatingProps {
  rating: number;
  showCount?: boolean;
  size?: 'sm' | 'md' | 'lg';
  starImage?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  showCount = true, 
  size = 'md',
  starImage = Star1
}) => {
  // Determine size classes
  const sizeClasses = {
    sm: 'h-4',
    md: 'h-5',
    lg: 'h-6'
  };

  const starSize = sizeClasses[size];
  const marginClass = size === 'sm' ? 'mx-[3px]' : 'mx-[5px]';

  return (
    <div className="flex items-center">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <img
            key={star}
            src={starImage}
            alt=""
            className={`${marginClass} ${starSize} ${star <= rating ? 'opacity-100' : 'opacity-30'}`}
            loading="lazy"
          />
        ))}
      </div>
      {showCount && (
        <span className="ml-2 text-sm text-gray-600">
          ({rating.toFixed(1)})
        </span>
      )}
    </div>
  );
};

export default StarRating;