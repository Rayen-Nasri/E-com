import { memo, Suspense, useEffect, lazy, useState, useRef } from "react";
import { Content } from "./content";
import NavBar from "../landing/home/navBar";

const ContentCard = lazy(() => import("./ContentCard").then(module => ({ default: module.ContentCard })));
const Quality = lazy(() => import("./qualitySection").then(module => ({ default: module.Quality })));
const Order = lazy(() => import("./order").then(module => ({ default: module.Order })));
const Footer = lazy(() => import("../landing/benefits/footer").then(module => ({ default: module.Footer })));

export const SeeMore = memo(() => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isContentCardVisible, setIsContentCardVisible] = useState(false);
    const [isQualityVisible, setIsQualityVisible] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    
    const contentCardRef = useRef(null);
    const qualityRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const contentCardObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsContentCardVisible(true);
                contentCardObserver.disconnect();
            }
        }, observerOptions);

        const qualityObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsQualityVisible(true);
                qualityObserver.disconnect();
            }
        }, observerOptions);

        const footerObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsFooterVisible(true);
                footerObserver.disconnect();
            }
        }, observerOptions);

        if (contentCardRef.current) {
            contentCardObserver.observe(contentCardRef.current);
        }

        if (qualityRef.current) {
            qualityObserver.observe(qualityRef.current);
        }

        if (footerRef.current) {
            footerObserver.observe(footerRef.current);
        }

        return () => {
            contentCardObserver.disconnect();
            qualityObserver.disconnect();
            footerObserver.disconnect();
        };
    }, []);

    return (
        <>
            <NavBar />
            <Content />
            <Suspense>
                <Order />
            </Suspense>
            
            <div ref={contentCardRef}>
                {isContentCardVisible && (
                    <Suspense fallback={<div></div>}>
                        <ContentCard />
                    </Suspense>
                )}
            </div>
            
            <div ref={qualityRef}>
                {isQualityVisible && (
                    <Suspense fallback={<div></div>}>
                        <Quality />
                    </Suspense>
                )}
            </div>
            
            <div ref={footerRef}>
                {isFooterVisible && (
                    <Suspense fallback={<div></div>}>
                        <Footer />
                    </Suspense>
                )}
            </div>
        </>
    );
});

export default SeeMore;