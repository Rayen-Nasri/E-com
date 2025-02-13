import { ArrBack } from "../../assets/assets"
import { Link  } from "react-router"


export const NotFound = () => {
    return (
        <div className="mt-30">
            <h1 className="text-center text-[170px] font-medium drop-shadow-lg">404</h1>
            <p className="text-center text-[24px] ">Page not found</p>
            <p className="text-center mt-5">The page you’re looking for doesn’t exist or an other error occurred.</p>
            <div className="mt-15 flex justify-center p-2">
                <label htmlFor="" className="relative right-[20px] top-[6px]"><ArrBack /></label>
                <Link to={"/authentication/logIn"} className="relative font-medium">Back to Login</Link>
            </div>
        </div>
    )
}