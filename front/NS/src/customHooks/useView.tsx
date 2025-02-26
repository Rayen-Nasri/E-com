import { useCallback, RefCallback } from 'react';
import { useInViewStore } from '../global/useStore';

export const useInView = (section: string, options?: IntersectionObserverInit): [RefCallback<HTMLElement>, boolean] => {
  const inView = useInViewStore((state:any) => state.inViewStates[section] || false);
  const setInView = useInViewStore((state:any) => state.setInView);

  const refCallback = useCallback((node: HTMLElement | null) => {
    if (node) {
      const observer = new IntersectionObserver(([entry]) => {
        setInView(section, entry.isIntersecting);
      }, options);

      observer.observe(node);
      return () => {
        observer.unobserve(node);
        observer.disconnect();
      };
    }
  }, [section, options, setInView]);

  return [refCallback, inView];
};