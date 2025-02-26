import { create } from 'zustand';

export const useInViewStore = create((set) => ({
  inViewStates: {}, // { section1: boolean, section2: boolean, ... }
  setInView: (section:any, inView:any) =>
    set((state:any) => ({
      inViewStates: { ...state.inViewStates, [section]: inView },
    })),
}));