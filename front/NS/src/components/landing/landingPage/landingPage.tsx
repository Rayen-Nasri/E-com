import { useEffect } from "react"
import { Benefits } from "../benefits/benefits"
import HomePage from "../home/homePage"
import "../benefits/benefitStyle.css"

export const LandingPage = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#FFFCF7"
    }, [])

    return (
        <>

            <HomePage />
            <Benefits />
        </>
    )
}