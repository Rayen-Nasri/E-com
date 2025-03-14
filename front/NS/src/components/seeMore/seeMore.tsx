import { memo, Suspense, useEffect } from "react";
import { NavBarSee } from "./navBar.See";
import { Content } from "./content";
import { ContentCard } from "./ContentCard";
import { Footer } from "../landing/benefits/footer";
import { Quality } from "./qualitySection";
import { Order } from "./order";

export const SeeMore = memo(() => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBarSee />
            <Content />
            
            <Suspense>
                <Order />
            </Suspense>
            
            <ContentCard />
            <Quality />
            <br />
            <Footer />
        </>
    );
});