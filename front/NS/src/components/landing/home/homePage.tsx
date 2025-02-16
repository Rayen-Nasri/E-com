import NavBar from "./navBar"
import home from "../../../assets/img/homePage.jpg"
import { HomePageContent } from "./homePageContent"


const HomePage = () => {
    return (
        <main className="overflow-hidden z-1">

            <div className="h-screen w-full bg-cover bg-no-repeat grid ">
                <img
                    src={home}
                    srcSet={`${home} 7000w, ${home} 768w, ${home} 1024w`}
                    sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, 1024px"
                    alt="Background"
                    className="absolute w-full h-full object-cover"
                />
                <div className="relative z-10 space-y-5 lg:space-y-0">
                    <NavBar />
                    <HomePageContent/>
                </div>

            </div>

        </main>
    )
}

export default HomePage