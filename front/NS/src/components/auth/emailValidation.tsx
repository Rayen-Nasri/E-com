import valid from "../../assets/img/valid.png"
import { Link } from "react-router";
export const EamilValidation = () => {
    {
        document.body.style.backgroundColor = "FFFCF8";
    }

    return (
        <section className="space-y-3 p-6 grid place-content-center mt-[90px]">
            <div className="flex justify-center">
                <img src={valid} alt="" />
            </div>
            <div className="lg:space-y-8">
                <h3 className="text-[26px] text-center font-bold lg:text-[35px]">Email validation</h3>
                <p className=" text-[17px]  text-center font-medium ">Your eamil has been successfully verified. <br /> Click below to log in magically</p>
            </div>

            <div className="mt-2 p-2">
                <Link to={"/home"} className="text-[15px] w-full flex justify-center py-2 px-4 border border-[#B2916C]
                bg-transparent rounded-md  text-sm font-medium hover:shadow-sm ">Back to home</Link>
            </div>

        </section>
    )

}