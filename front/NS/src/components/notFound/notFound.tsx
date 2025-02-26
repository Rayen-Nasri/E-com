import { Link  } from "react-router"


export const NotFound = () => {
    return (
        <div className="mt-30">
            <h1 className="text-center text-[170px] text-[#876D49] font-medium drop-shadow-lg">404</h1>
            <p className="text-center text-[41px] font-bold text-[#876D49] ">Page not found</p>
            <p className="text-center text-[23px] font-bold text-[#876D49] mt-5">Ooops.... this page is not available</p>
            <div className="mt-15 flex justify-center p-2 ">
                <Link to={"/home"} className="text-[15px] font-bold relative px-8  border p-2 rounded-[30px] text-[#876D49] border-[#876D49] ">Back to home page</Link>
            </div>
        </div>
    )
}