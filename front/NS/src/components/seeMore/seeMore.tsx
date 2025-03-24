import { memo, Suspense, useEffect, lazy } from "react";
import { Content } from "./content";
import NavBar from "../landing/home/navBar";

// Lazy load components that aren't immediately visible
const ContentCard = lazy(() => import("./ContentCard").then(module => ({ default: module.ContentCard })));
const Quality = lazy(() => import("./qualitySection").then(module => ({ default: module.Quality })));
const Order = lazy(() => import("./order").then(module => ({ default: module.Order })));
const Footer = lazy(() => import("../landing/benefits/footer").then(module => ({ default: module.Footer })));

export const SeeMore = memo(() => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBar />
            <Content />
            <Suspense>
                <Order />

            </Suspense>
            <ContentCard />
            <Suspense  >
                <Quality />
            </Suspense>
            <Footer />
        </>
    );
});

export default SeeMore;