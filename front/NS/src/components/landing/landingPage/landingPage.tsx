import { Suspense, useEffect } from 'react';
import HomePage from '../home/homePage';
import React from 'react';
import { Benefits } from '../benefits/benefits';
import { DiscountSection } from '../benefits/discount';
import { FAQAccordion } from '../benefits/question';
import { Footer } from '../benefits/footer';


const CardSection = React.lazy(() =>
  import('../benefits/benefitCards').then((module) => ({ default: module.CardSection }))
);

export const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = '#FFF8E9';
  }, []);


  return (
    <>
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