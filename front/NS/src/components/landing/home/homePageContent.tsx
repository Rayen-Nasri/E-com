import { memo } from "react";
import { Link } from "react-router"
import { MoveRight } from "lucide-react"


export const HomePageContent = memo(() => {
    return (
        <>
            <div className="contentAnimation">
                <div className="ml-4 mr-4 content_1 text-center text-white">
                    <h1 className=" mt-[125px] lg:mt-[80px] sm:text-[60px]
                    text-[40px] lg:text-[85px] parent">
                        Innovative Design
                    </h1>
                    <h1 className="sm:text-[60px] text-[40px] lg:text-[85px] child">
                        for Your Home
                    </h1>
                    <p className="text-[#858282] lg:text-[20px] ">
                        Experience modern elegance with innovative, sustainable designs. Elevate your
                        <span className="hidden md:block lg:block"></span>
                        <span>space with our curated furniture collections.</span>
                    </p>

                </div>
                <div className="flex space-x-4 justify-center mt-13  content_2">
                    <Link
                        className="inline-block w-[173px] h-[39px] p-[7px] pl-5 pr-4
                            top-[14px] rounded-[6px] text-start bg-white "
                        to={"/"}>
                        <span className="">Shop Now &#160; &#160; &#160; </span>
                        <span className="absolute"><MoveRight /></span>
                    </Link>
                    <Link
                        className="inline-block w-[173px] h-[39px] border-white text-white p-[7px]
                             border-1 top-[14px] rounded-[6px] text-center bg-transparent "
                        to={"/"}>
                        Explore Services
                    </Link>

                </div>
            </div>

        </>
    )
})

