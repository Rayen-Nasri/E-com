import { HomePageContent } from "./homePageContent"
import { memo } from "react"
import NavBar from "./navBar"
import "./stylehome.css"

const HomePage = memo(() => {

    return (
        <main className="overflow-x-hidden z-1 bg-[#F5EDDD]  ">

            <div className="relative z-10 space-y-5 lg:space-y-0">
                <NavBar />
            </div>
            <HomePageContent />

        </main>
    )
})

export default HomePage