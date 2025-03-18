import { ShoppingCart, User } from "lucide-react";
import { NsH } from "../../assets/assets";
import { useAuthStore } from "../../global/authStore";
import { useCartStore } from "../../global/cartStore";
import { Link } from "react-router";
import toast from "react-hot-toast";
import Cart from "../cart/Cart";

const Tost = () => { toast.error("this feature is disabled "); }

export const NavBarSee = () => {
  const { isAuthenticated }: any = useAuthStore();
  const { toggleCart, getItemsCount } = useCartStore();
  const itemCount = getItemsCount();
  const verify = isAuthenticated;

  return (
    <>
      <nav className={verify ? "flex items-center justify-between bg-[#F5EDDD] px-[17px] lg:px-15 py-3 z-40" : "bg-[#F5EDDD] px-15 flex py-3 z-40"} >
        <div className="relative bottom-[7px] ">
          <Link to={"/home"}><NsH /></Link>
        </div>
        {
          verify ? (
            <div className="flex gap-4 items-center">
              <User className="cursor-pointer" onClick={() => { Tost() }} />
              <div className="relative cursor-pointer" onClick={toggleCart}>
                <ShoppingCart className="hover:text-[#A68A64] transition-colors" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#A68A64] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {itemCount}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="justify-end space-x-8 ml-auto lg:block">
              <Link
                className="hidden lg:inline-block font-semibold py-1 px-7 relative top-[2px] rounded-[20px] text-center bg-black text-white hover:bg-gray-800 transition-colors"
                to="/authentication/logIn"
              >
                <span>login</span>
              </Link>
              <Link
                className="hidden lg:inline-block font-semibold py-1 px-7 border wtext-black top-[2px] hidden lg:block relative rounded-[20px] text-center bg-transparent hover:bg-gray-100 transition-colors"
                to="/authentication/register"
              >
                <span>Sign up</span>
              </Link>
            </div>
          )
        }
      </nav>
      <Cart />
    </>
  );
};