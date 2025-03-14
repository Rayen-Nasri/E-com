import { memo, useState } from "react";
import { NsH  } from "../../../assets/assets";
import { Link } from "react-router";
import { useAuthStore } from "../../../global/authStore";
import './homeStyle.css';
import { AlignCenter } from "lucide-react";

const btns = ["Products", "Components", "Support", "Find store"];


const NavBar = memo(() => {
    const { isAuthenticated, logout }: any = useAuthStore();
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
                    <Link to={"/home"}><NsH /></Link>
                </span>
                {btns.map((btn, index) => (
                    <Link to={`/${btn}`} key={index} className="top-[14px] relative font-medium text-black hidden lg:block NavAnim">
                        {btn}
                    </Link>
                ))}
            </ul>

            <div className={ verify ? "flex justify-end  ml-13 ml-auto lg:block NavAnim" : "flex justify-end space-x-8 ml-13 ml-auto lg:block NavAnim"}>
                <div className={verify ? "relative block lg:hidden bottom-[27px] border-white text-white border-1 rounded-[6px] text-center bg-transparent" : "relative block lg:hidden bottom-[-14px] border-white text-white border-1 rounded-[6px] text-center bg-transparent"}>
                    <button onClick={toggleRectangle} className="p-2 ">
                        <AlignCenter />
                    </button>
                </div>
                {!verify ? (
                    <>
                        <Link
                            className="hidden lg:inline-block font-semibold py-1 px-7
                             top-[10px] relative rounded-[20px] text-center bg-black text-white "
                            to="/authentication/logIn"
                        >
                            <span>logIn</span>
                        </Link>
                        <Link
                            className="hidden lg:inline-block font-semibold py-1 px-7 border
                             wtext-black top-[10px] hidden lg:block relative rounded-[20px] text-center bg-transparent"
                            to="/authentication/register"
                        >
                            <span>Sign up</span>
                        </Link>
                    </>
                ) : (
                    <button
                        className="hidden font-semibold py-1 px-7 border bottom-7
                             text-black hidden lg:block relative rounded-[20px] text-center bg-transparent"
                        onClick={() => {
                            logout();
                        }}
                    >
                        <span>Logout</span>
                    </button>
                )}
            </div>

            {/* Rectangle Popover */}
            {showRectangle && (
                <div className="absolute lg:hidden right-8 mt-14 w-48 bg-[#FFF8E9] border border-gray-200 rounded-lg shadow-lg ">
                    {!verify ? (
                        <>
                            <div className="p-4 ">
                                <Link className="" to="/authentication/logIn">logIn</Link>
                            </div>
                            <div className="p-4 ">
                                <Link to="/authentication/register">Sign up</Link>
                            </div>
                        </>
                    ) : (
                        <div className="p-4 ">
                            <button
                                onClick={() => {
                                    logout();
                                }}
                            >
                                <span>Logout</span>
                            </button>
                        </div>
                    )}
                    <div className="p-4">
                        <Link to="/products">Products</Link>
                    </div>
                    <div className="p-4">
                        <Link to="/components">Components</Link>
                    </div>
                    <div className="p-4">
                        <Link to="/support">Support</Link>
                    </div>
                    <div className="p-4">
                        <Link to="/find-store">Find Store</Link>
                    </div>

                </div>
            )}
        </nav>
    );
});

export default NavBar;