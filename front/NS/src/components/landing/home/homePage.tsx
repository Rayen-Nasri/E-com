import { HomePageContent } from "./homePageContent"
import { memo } from "react"
import NavBar from "./navBar"

const HomePage = memo(() => {

    return (
        <main className="overflow-x-hidden bg-[#F5EDDD]  ">

            <NavBar />
            <HomePageContent />

        </main>
    )
})

export default HomePage