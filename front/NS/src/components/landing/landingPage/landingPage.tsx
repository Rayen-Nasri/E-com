import { Suspense, useEffect, useState } from 'react';
import HomePage from '../home/homePage';
import React from 'react';
import { Benefits } from '../benefits/benefits';
import { DiscountSection } from '../benefits/discount';
import { FAQAccordion } from '../benefits/question';
import { Footer } from '../benefits/footer';
import { AnimatePresence } from 'framer-motion';
import { LoadingOverlay } from '../../seeMore/LoadingOverlay';

const CardSection = React.lazy(() =>
  import('../benefits/benefitCards').then((module) => ({ default: module.CardSection }))
);

export const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(() => {
    const hasShownLoading = sessionStorage.getItem('hasShownLoading1');
    return !hasShownLoading;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = '#FFF8E9';
    
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasShownLoading1', 'true');
        document.body.style.overflow = 'auto';
      }, 10000);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingOverlay />}
      </AnimatePresence>

      <HomePage />
      <Benefits />
      <Suspense>
        <CardSection />
      </Suspense>
      <br />
      <DiscountSection />
      <FAQAccordion />
      <Footer />

    </>
  );
};