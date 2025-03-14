import { Suspense, useEffect } from 'react';
import HomePage from '../home/homePage';
import React from 'react';
import { Benefits } from '../benefits/benefits';
import { DiscountSection } from '../benefits/discount';
import { FAQAccordion } from '../benefits/question';
import { useInView } from '../../../customHooks/useView';
import { Footer } from '../benefits/footer';


const CardSection = React.lazy(() =>
  import('../benefits/benefitCards').then((module) => ({ default: module.CardSection }))
);

export const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = '#FFF8E9';
  }, []);

  const [ref1, inView1] = useInView('section1', { threshold: 0.3 });
  const [ref2, inView2] = useInView('section2', { threshold: 0.3 });
  const [ref3, inView3] = useInView('section3', { threshold: 0.3 });
  const [ref4, inView4] = useInView('section4', { threshold: 0.3 });

  return (
    <>
      <HomePage />
      <div ref={ref1} style={{ opacity: inView1 ? 1 : 0.5, transition: 'opacity 0.5s ease-in-out' }}>
        <Benefits />
      </div>
      <div ref={ref2} style={{ opacity: inView2 ? 1 : 0.5, transition: 'opacity 0.5s ease-in-out' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <CardSection />
        </Suspense>
      </div>
      <div ref={ref3} style={{ opacity: inView3 ? 1 : 0.5, transition: 'opacity 0.5s ease-in-out' }}>
        <DiscountSection />
      </div>
      <div ref={ref4} style={{ opacity: inView4 ? 1 : 0.5, transition: 'opacity 0.5s ease-in-out' }}>
        <FAQAccordion />
        <Footer/>
      </div>
      
    </>
  );
};