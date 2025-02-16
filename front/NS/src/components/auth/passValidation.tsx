import { useEffect } from "react"
import valid from "../../assets/img/Valid.jpg"
import { Link } from "react-router";
export const Validation = () => {
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).backgroundColor;
        document.body.style.backgroundColor = "#FFFCF8";
        return () => {
            document.body.style.backgroundColor = originalStyle;
        };
    }, [])

    return (
        <section className="space-y-3 p-6 grid place-content-center mt-[90px]">
            <div className="flex justify-center">
                <img src={valid} alt="" />
            </div>
            <div className="lg:space-y-8">
                <h3 className="text-[26px] text-center font-bold lg:text-[35px]">Password reset</h3>
                <p className=" text-[17px]  text-center font-medium ">Your password has been successfully reset. <br /> Click below to log in magically</p>
            </div>

            <div className="mt-2 p-2">
                <Link to={"/home"}  style={{ backgroundColor: "#F5F3F1" }}className="text-[15px] w-full flex justify-center py-2 px-4 border border-transparent rounded-md  text-sm font-medium hover:shadow-sm ">Back to home</Link>
            </div>

        </section>
    )

}