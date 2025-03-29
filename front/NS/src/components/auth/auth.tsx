import { memo } from "react";
import { Signup } from "./singup/singup";
import { NsH  } from "../../assets/assets";
import Login from "./login/login";
import { Link } from "react-router";


export const Auth = memo(({direction}:any) => {
    return (
        <>
        
            <div className="bg-[#F5EDDD] min-h-screen md:grid lg:grid md:grid-cols-[0.8fr_1.2fr] xl:grid-cols-[0.84fr_1.2fr] grid-rows-1 gap-0 relative">
                <Link to="/" className="absolute top-6 left-6 flex items-center gap-2 hover:text-[#8a7353] transition-all duration-300 z-10">
                    <svg className="lg:block hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <span className="font-medium">Back Home</span>
                </Link>
                {/* Left side - Background color #F5EDDD */}
                <div className="bg-[#FFF8E9] ">
                   
                </div>

                {/* Right side - Background color #FFF8E9 */}
                <div className="bg-[#F5EDDD]"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                
                    <div className="w-full max-w-6xl shadow-[0_4px_20px_30px_rgba(0,0,0,0.03)] flex flex-col md:flex-row">
                        {/* Left side - Branding (Hidden on mobile) */}
                        <div className="hidden md:flex md:w-2/3 p-8 flex-col items-center 2xl:ml-[-31px]  justify-center text-center ">
                          
                            <div className="mb-4 font-bold  z-50"><NsH /></div>
                            <h1 className="md:text-2xl lg:text-4xl font-semibold mb-4  z-50">Noble Nurturing</h1>
                            <p className="md:text-[13px] xl:w-[300px] max-w-md mx-auto">
                                First Decoration Company. Timeless Elegance, Classic Designs, and Unmatched Craftsmanship for Every Occasion
                            </p>
                        </div>
                        <div className=" md:w-1/1 bg-[#F5EDDD] p-8 ">
                        {
                            direction === "register" ? <Signup /> : <Login/>
                        }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
})