import { memo, Suspense, useEffect } from "react";
import { Content } from "./content";
import { ContentCard } from "./ContentCard";
import { Footer } from "../landing/benefits/footer";
import { Quality } from "./qualitySection";
import { Order } from "./order";
import NavBar from "../landing/home/navBar";

export const SeeMore = memo(() => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBar />
            <Content />
            <br />
            <Suspense>
                <Order />
            </Suspense>
            
            <ContentCard />
            <Quality />
            <br />
            <Footer/>
        </>
    );
});