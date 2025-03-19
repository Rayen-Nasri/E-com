import { memo } from "react"
import login from "../../../assets/img/login.jpg"
import { Link } from "react-router"
import { NsH } from "../../../assets/assets"

const LoginHeader = memo(() => {
    return (
        <>
            {/* Left side - Image */}
            <button className="btn lg:hidden">
                &#160;&#160;&#160;&#160;
            </button>
            <div className="relative hidden lg:block w-3/5 h-screen">
                <button className="btn sm:block">
                    &#160;&#160;&#160;&#160;
                </button>
                <img
                    src={login}
                    alt="Decorative interior"
                    className=" w-full h-screen "
                />
            </div>
        </>
    )
})

const LoginFromFooter = memo(() => {
    return (
        <p className="text-center text-[17px] text-gray-600 alrH">
            Don't have an account?{" "}
            <Link to="/authentication/register" className="font-medium underline text-[#6B8696]">
                Register here
            </Link>
        </p>
    )
})

const LoginFormHeader = memo(() => {
    return (
        <>
            {/* Logo */}
            <div className="text-center ">
                <div className="flex justify-center relative nN">
                    <NsH />
                </div>
            </div>

            {/* Welcome Text */}
            <div className="text-center space-y-4 p-7">
                <h2 className="text-[32px] font-bold lg:text-[43px]">Welcome back!</h2>
                <p className="text-gray-60 font-medium text-[13px]">Dive right back into your personalized content</p>
            </div>
    </>
    )
})


export { LoginHeader, LoginFromFooter ,LoginFormHeader }