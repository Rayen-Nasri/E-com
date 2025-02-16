import { useEffect } from "react"
import { BenefitsCards } from "./benefitCards"



export const Benefits = ()=>{
    useEffect(()=>{
        document.body.style.backgroundColor = "#FFFCF7"
    },[])
    return(
        <>
            <BenefitsCards/>
        
        </>
    )
}