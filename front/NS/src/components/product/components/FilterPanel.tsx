import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface FilterPanelProps {
  filters: {
    category: string | null;
    material: string | null;
    style: string | null;
    color: string | null;
    priceRange: [number, number];
    minRating: number;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    category: string | null;
    material: string | null;
    style: string | null;
    color: string | null;
    priceRange: [number, number];
    minRating: number;
  }>>;
  uniqueValues: {
    categories: string[];
    materials: string[];
    styles: string[];
    colors: string[];
    priceRange: {
      min: number;
      max: number;
    };
  };
  clearFilters: () => void;
  showFilters: boolean;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  setFilters,
  uniqueValues,
  clearFilters,
  showFilters
}) => {
  return (
    <div className={`${showFilters ? 'block' : 'hidden lg:block'} w-full lg:w-72 space-y-4 border border-[#876D49] p-4 rounded-lg shadow-sm`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-[#876D49] hover:underline"
        >
          Clear all
        </button>
      </div>

      {/* Filter Sections */}
      <div className="space-y-4">
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
  );
};

export default FilterPanel;