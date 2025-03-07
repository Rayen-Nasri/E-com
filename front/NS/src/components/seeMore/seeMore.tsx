import React, { memo, Suspense } from "react";
import { NavBarSee } from "./navBar.See";
import { Content } from "./content";
import { ContentCard } from "./ContentCard";
import { Footer } from "../landing/benefits/footer";

const Order = React.lazy(() =>
    import('./order').then((module) => ({ default: module.Order }))
);
export const SeeMore = memo(() => {
    return <>
        <NavBarSee />
        <Content />
        <Suspense>
            <Order />
        </Suspense>
        <ContentCard />


        <Footer />
    </>
})