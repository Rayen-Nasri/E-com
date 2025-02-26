import { memo, useState } from "react";
import { Ns } from "../../../assets/assets";
import { Link } from "react-router";
import { useAuthStore } from "../../../global/authStore";
import './homeStyle.css';
import { AlignCenter } from "lucide-react";

const btns = ["Products", "Components", "Support", "Find store"];

const NavBar = memo(() => {
    const { isAuthenticated }: any = useAuthStore();
    const verify = isAuthenticated;
    const [showRectangle, setShowRectangle] = useState(false);

    const navClassName = verify
        ? "grid mt-[18px] mr-[33px] ml-[33px] 2xl:mr-[77px] 2xl:ml-[77px]"
        : "mr-[0px] ml-[30px] mt-[18px] lg:mr-[66px] lg:ml-[66px] flex 2xl:mr-[85px] 2xl:ml-[85px]";

    const toggleRectangle = () => {
        setShowRectangle(!showRectangle);
    };

    return (
        <nav className={navClassName}>
            <ul className={verify ? "flex space-x-20" : "flex space-x-14 2xl:space-x-17"}>
                <span className={verify ? "inline-block mr-13 lg:mr-18 NavAnimm" : "inline-block lg:mr-13 NavAnimm"}>
                    <Ns />
                </span>
                {btns.map((btn, index) => (
                    <li key={index} className="top-[14px] relative font-medium text-black hidden lg:block NavAnim">
                        {btn}
                    </li>
                ))}
            </ul>
            <div className="flex justify-end space-x-7 ml-auto lg:block NavAnim">
                <div className={verify ? "relative block lg:hidden bottom-[27px] border-white text-white border-1 rounded-[6px] text-center bg-transparent" : "relative block lg:hidden bottom-[0px] border-white text-white border-1 rounded-[6px] text-center bg-transparent"}>
                    <button onClick={toggleRectangle} className="p-2 ">
                        <AlignCenter />
                    </button>
                </div>
                {!verify && (
                    <>
                        <Link
                            className="hidden lg:inline-block font-semibold w-[92px] h-[30px]
                             top-[14px] relative rounded-[33px] text-center bg-black text-white "
                            to="/authentication/logIn"
                        >
                            <span className="relative top-1">login</span>
                        </Link>
                        <Link
                            className="hidden lg:inline-block font-semibold border-1
                             w-[92px] text-black h-[30px] top-[14px] hidden lg:block  relative rounded-[20px] text-center bg-transparent"
                            to="/authentication/register"
                        >
                            <span className="relative top-1">Sing up</span>
                        </Link>
                    </>
                )}
            </div>

            {/* Rectangle Popover */}
            {showRectangle && (
                <div className="absolute lg:hidden right-0 mt-14 mr-[33px] w-48 bg-[#FFF8E9] border border-gray-200 rounded-lg shadow-lg ">
                    {!verify && (
                        <>
                            <div className="p-4 hover:bg-gray-100">
                                <Link className="" to="/authentication/logIn">logIn</Link>
                            </div>
                            <div className="p-4 hover:bg-gray-100">
                                <Link to="/authentication/register">register</Link>
                            </div>
                        </>
                    )}
                    <div className="p-4 hover:bg-gray-100">
                        <Link to="/products">Products</Link>
                    </div>
                    <div className="p-4 hover:bg-gray-100">
                        <Link to="/components">Components</Link>
                    </div>
                    <div className="p-4 hover:bg-gray-100">
                        <Link to="/support">Support</Link>
                    </div>
                    <div className="p-4 hover:bg-gray-100">
                        <Link to="/find-store">Find Store</Link>
                    </div>
                    <div className="p-4 hover:bg-gray-100">
                        <Link to="/account">Account</Link>
                    </div>
                </div>
            )}
        </nav>
    );
});

export default NavBar;