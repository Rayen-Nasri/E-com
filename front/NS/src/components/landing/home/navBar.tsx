import { memo } from "react";
import { NsH } from "../../../assets/assets";
import { Link } from "react-router";
import { useAuthStore } from "../../../global/authStore";
import './homeStyle.css';

const btns = ["Products", "Components", "Support", "Find store"];

const NavBar = memo(() => {
    const { isAuthenticated }:any = useAuthStore();
    const verify = isAuthenticated;

    const navClassName = verify 
        ? "grid lg:justify-items-center mr-[30px] ml-[30px] mt-[14px] lg:mr-[80px] lg:ml-[80px]" 
        : "mr-[30px] ml-[30px] mt-[14px] lg:mr-[80px] lg:ml-[80px] flex";

    return (
        <nav className={navClassName}>
            <ul className={verify ? "flex space-x-20" : "flex space-x-13"}>
                <span className={verify ? "inline-block mr-13 lg:mr-18 NavAnimm" : "inline-block lg:mr-13 NavAnimm"}>
                    <NsH />
                </span>
                {btns.map((btn, index) => (
                    <li key={index} className="top-[14px] relative text-white hidden lg:block NavAnim">
                        {btn}
                    </li>
                ))}
            </ul>
            <div className="flex justify-end space-x-7 ml-auto lg:block NavAnim">
                <div className="relative block lg:hidden bottom-[27px] border-white text-white border-1 rounded-[6px] text-center bg-transparent">
                    SOOsssN
                </div>
                {!verify && (
                    <>
                        <Link
                            className="inline-block w-[121.96px] h-[26px] top-[14px] relative rounded-[6px] text-center bg-white"
                            to="/authentication/logIn"
                        >
                            login
                        </Link>
                        <Link
                            className="flex inline-block w-[121.96px] h-[26px] border-white text-white border-1 top-[14px] relative rounded-[6px] text-center bg-transparent"
                            to="/authentication/register"
                        />
                    </>
                )}
            </div>
        </nav>
    );
});

export default NavBar;