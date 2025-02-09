import { memo } from "react";
import { ArrBack } from "../../assets/assets";

const HeaderChilds = memo(({ h3Content, pContent, imgSrc }: any) => {
    return (
        <>
            <div className="flex justify-center">
                <img src={imgSrc} alt="Forgot password illustration" />
            </div>
            <div className="lg:space-y-8">
                <h3 className="text-[26px] text-center font-bold lg:text-[35px]">{h3Content}</h3>
                <p className="text-[17px] text-center font-medium">{pContent}</p>
            </div>
        </>
    )
})

const FooterChilds = memo(({ buttonContent }: any) => {
    return (
        <div className="mt-15 flex justify-center p-2">
            <label htmlFor="" className="relative right-[20px] top-[6px]"><ArrBack /></label>
            <button className="relative font-medium">{buttonContent}</button>
        </div>
    )
})

export { HeaderChilds ,FooterChilds}