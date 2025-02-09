import "../login/login.css"
import "./signup.css"

import { useEffect, useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Google, Apple, Ns } from "../../../assets/assets"

export const Signup = ()=> {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    useEffect(() => {
        document.body.style.backgroundColor = "#FFFCF8";
        document.body.style.overflow = "hidden"
    }, [])

    return (
        <div className="flex m-4 lg:border-2 rounded-[21px] h-[96vh]" style={{ borderColor: "#D9D9D9", overflow: "hidden" }} >
            {/* Left side - Image */}
            <button className="btn lg:hidden">
                &#160;&#160;&#160;&#160;
            </button>
            <div className="relative hidden lg:block w-3/7">
                <button className="btn sm:block">
                    &#160;&#160;&#160;&#160;
                </button>
                <img
                    src="src\assets\signup.jpg"
                    alt="Modern furniture"
                    className="object-cover w-full h-full "
                />
            </div>

            {/* Right side - Form */}
            <div className="p-6 lg:p-9 min-h-screen flex flex-col justify-center max-w-[600px] mx-auto w-full">
                <div className="mb-5">
                    <div className="text-center">
                        <div className="flex justify-center relative bottom-7 nN">
                            <Ns />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-center ">Create an account</h2>
                    <p className="text-gray-600 text-center">Get early access to new features and promotions</p>
                </div>

                <form className="space-y-2 ">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="block font-medium">
                                First name
                            </label>
                            <input id="firstName" placeholder="your first name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm focus:border-stone-300" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="block font-medium">
                                Last name
                            </label>
                            <input id="lastName" placeholder="your last name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm focus:border-stone-300" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block font-medium">
                            Email
                        </label>
                        <input id="email" type="email" placeholder="your email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm focus:border-stone-300" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block font-medium">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="your password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm focus:border-stone-300"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} opacity={0.5} />}
                            </button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="block font-medium">
                            Confirm password
                        </label>
                        <div className="relative">
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="confirm password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm focus:border-stone-300"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} opacity={0.5} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms" className="text-sm">
                            I agree to the{" "}
                            <a href="/terms" className="text-[#6B8696] hover:underline">
                                Terms & Conditions
                            </a>
                        </label>
                    </div>

                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50" style={{ backgroundColor: "#F5F3F1" }}>
                        Create account
                    </button>

                    <div className="relative ">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or register with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            style={{ backgroundColor: "#FFFCF8" }}
                            type="button"
                            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <Google />
                            Google
                        </button>
                        <button
                            style={{ backgroundColor: "#FFFCF8" }}
                            type="button"
                            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <Apple />
                            Apple
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-600 alrH">
                        Already have an account?{" "}
                        <a href="/login" className="text-[#6B8696] hover:underline">
                            Login here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}

