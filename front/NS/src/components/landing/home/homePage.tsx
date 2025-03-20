import { HomePageContent } from "./homePageContent"
import { memo } from "react"
import NavBar from "./navBar"

const HomePage = memo(() => {
    return (
        <main className="overflow-x-hidden bg-[#F5EDDD] ">
            <div className="relative z-50">
                <NavBar />
            </div>
            <div className=" z-0">
                <HomePageContent />
            </div>
        </main>
    )
})

export default HomePage