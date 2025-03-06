import './main.css';
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import { BrowserRouter } from "react-router";
import App from './App.tsx';
import { SeeMore } from './components/seeMore/seeMore.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <SeeMore />
      </BrowserRouter>
  </StrictMode>
);
