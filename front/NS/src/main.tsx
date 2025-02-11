import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import './main.css'
import ReactDOM from "react-dom/client";

import App from './App.tsx'
import { NotFound } from './components/notFound/notFound.tsx';
import { Homee } from './components/landing/home/home.tsx';
import { Signup } from './components/auth/singup/singup.tsx';
import Login from './components/auth/login/login.tsx';
import { Newpass } from './components/auth/setNewPass/newPass.tsx';
import { Validation } from './components/auth/validation/validation.tsx';
import { Forgot } from './components/auth/forgotPass/forgot.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: "/home",
    element: <Homee />
  },
  {
    path: "/authentication",
    children: [
      {
        path: "/authentication/register",
        element: <Signup />
      },
      {
        path: "/authentication/logIn",
        element: <Login />
      },
      {
        path: "/authentication/setNew-password/:tokenID",
        element: <Newpass />
      },
      {
        path: "/authentication/validationCode/:tokenID",
        element: <Validation />
      },
      {
        path: "/authentication/forgot-password/:tokenID",
        element: <Forgot />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
