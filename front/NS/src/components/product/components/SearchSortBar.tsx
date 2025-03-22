import React from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';

type SortOption = 'price-asc' | 'price-desc' | 'rating-desc' | 'name-asc';

interface SearchSortBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: SortOption;
  setSortBy: (option: SortOption) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  hasActiveFilters: boolean;
}

const SearchSortBar: React.FC<SearchSortBarProps> = ({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  showFilters,
  setShowFilters,
  hasActiveFilters
}) => {
  return (
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
          {hasActiveFilters && 
            <span className="bg-[#876D49] text-white rounded-full px-2 py-0.5 text-xs ml-1">
              Active
            </span>
          }
        </button>
      </div>
    </div>
  );
};

export default SearchSortBar;