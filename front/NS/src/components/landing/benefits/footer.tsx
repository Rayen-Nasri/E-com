import { memo } from "react";
import { Link } from "react-router"; // Corrected import
import FooterTabme from "../../../assets/img/footerTable.png";
import { Dinn, Facbook, Insta, Twit } from "../../../assets/assets";

const AboutContent = [
    { text: "About", url: "" },
    { text: "Help Center", url: "" },
    { text: "Privacy", url: "" },
    { text: "Accessibility", url: "" },
    { text: "Terms", url: "" },
    { text: "Copyright", url: "" },
];

export const Footer = memo(() => {
    return (
        <footer className="bg-[#F5EDDD] mt-20 lg:mt-30">
            <div className="mt-9 lg:grid lg:grid-cols-2 lg:gap-8 pt-5 lg:pt-0">

                <div className="space-y-3 lg:space-y-4 xl:space-y-4 2xl:space-y-4 mt-3 ml-[33px] mr-[33px] lg:ml-[64px] 2xl:ml-[84px] lg:mr-[64px] 2xl:mr-[84px]">
                    <h3 className="text-[28px] lg:text-[30px] xl:text-[31px] 2xl:text-[40px] text-[#876D49]  lg:mt-7">
                        Stay Classy
                    </h3>
                    <p className="text-[#876D49] lg:w-[450px] text-[17px] lg:text-[15px] 2xl:text-[25px]  xl:text-[20px]">
                        Join Noble Nurturing For Exclusive Classic Design
                    </p>
                    <div className="flex">
                        <input
                            type="text"
                            className="border-1 border-[#876D49] rounded-[20px] px-4 w-[169px] lg:w-[280px] py-2 outline-none text-gray-700"
                            placeholder="Enter Your email"
                        />
                        <Link
                            to={''}
                            className="ml-4 py-2 px-4 lg:px-8 rounded-[20px] bg-[#876D49] inline-block w-[117px] lg:w-[146px] text-white text-center"
                        >
                            Subscribe
                        </Link>
                    </div>
                </div>

                <div>
                    <img
                        loading="lazy"

                        aria-label="Enter your email address"
                        src={FooterTabme}
                        alt="Footer Illustration"
                        className="hidden lg:flex lg:relative lg:bottom-[50px] xl:bottom-[90px] lg:w-[450px] xl:w-[640px] 2xl:w-[880px] 2xl:bottom-[60px] "
                    />
                </div>
            </div>


            <div className="ml-[33px] mt-3 mr-[33px] lg:ml-[64px] 2xl:ml-[84px]
                            lg:mr-[64px] 2xl:mr-[84px] pb-5 lg:pb-3 ">

                <div className="flex justify-end space-x-3 space-y-3">
                    <Link to={""}><Twit /></Link>
                    <Link to={""} className="relative top-[3px]"><Dinn /></Link>
                    <Link to={""}><Insta /></Link>
                    <Link to={""}><Facbook /></Link>
                </div>


                <div className="bg-[#B4936D] h-[3px] w-full rounded-[30px] mt-2" />

                <div className="grid grid-cols-2 grid-cols-2 space-y-5 md:flex space-x-5  lg:flex lg:space-x-10 mt-4 lg:mt-3">
                    {AboutContent.map((Content, index) => (
                        <div key={index}> {/* Added key prop */}
                            <Link
                                to={Content.url}
                                className="text-[17px] lg:text-[23px] text-[#876D49]"
                            >
                                {Content.text}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
});