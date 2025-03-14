import { ShoppingCart, User } from "lucide-react";
import { NsH } from "../../assets/assets";
import { useAuthStore } from "../../global/authStore";
import { Link } from "react-router";
import toast from "react-hot-toast";
const Tost = ()=>{toast.error("this feature is disabled ");}


export const NavBarSee = () => {
  const { isAuthenticated }: any = useAuthStore();
  const verify = isAuthenticated;
  return (
    <nav className={verify ? "flex items-center justify-between bg-[#F5EDDD] px-[17px] lg:px-15 py-3 " : "px-15 flex py-3"} >
      {/* Logo */}
      <div className="relative bottom-[7px] ">
        <Link to={"/home"}><NsH /></Link>
        
      </div>
      {
        verify ? (
          <div className="flex gap-4 items-center">
            <User className="cursor-pointer" onClick={() => { Tost() }} />
            <ShoppingCart className="cursor-pointer" onClick={() => { Tost() }}/>
          </div>
        ) : (
          <>
            <div className="justify-end space-x-8 ml-13 ml-auto lg:block">
              <Link
                className="hidden lg:inline-block font-semibold py-1 px-7
               top-[10px] relative rounded-[20px] text-center bg-black text-white "
                to="/authentication/logIn"
              >
                <span>login</span>
              </Link>
              <Link
                className="hidden lg:inline-block font-semibold py-1 px-7 border
               wtext-black top-[10px] hidden lg:block relative rounded-[20px] text-center bg-transparent"
                to="/authentication/register"
              >
                <span>Sign up</span>
              </Link>

            </div>
          </>
        )
      }
      {/* Icons */}


    </nav>

  );
};