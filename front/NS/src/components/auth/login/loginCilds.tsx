import { memo } from "react"
import { Ns } from "../../../assets/assets"
import login from "../../../assets/login.jpg"

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
            <a href="/register" className="font-medium underline text-[#6B8696]">
                Register here
            </a>
        </p>
    )
})

const LoginFormHeader = memo(() => {
    return (
        <>
            {/* Logo */}
            <div className="text-center ">
                <div className="flex justify-center relative nN">
                    <Ns />
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