import { ShoppingCart, User, Search } from "lucide-react";
import { Ns } from "../../assets/assets";

export const NavBarSee = () => {
  return (
    <nav className="flex items-center justify-between bg-[#F5EDDD] px-6 py-3 ">
      {/* Logo */}
      <div className="relative bottom-[7px] ">
        <Ns />
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-transparent px-3 py-1 rounded-[3px] border-[#B2916C] border">
        <input
          type="text"
          placeholder="Search for product"
          className="outline-none w-60 "
        />
        <Search size={18}  />
      </div>

      {/* Icons */}
      <div className="flex gap-4 items-center">
        <User className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
      </div>
    </nav>
  );
};