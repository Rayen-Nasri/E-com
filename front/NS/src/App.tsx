import { useEffect } from 'react';
import { Navigate, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./global/authStore.tsx";
import { NotFound } from './components/notFound/notFound.tsx';
import { Newpass } from './components/auth/newPass.tsx';
import { Forgot } from './components/auth/forgot.tsx';
import { EmailVerification } from './components/auth/verification.tsx';
import { Check } from "./components/auth/check.tsx";
import { Validation } from "./components/auth/passValidation.tsx";
import { LandingPage } from "./components/landing/landingPage/landingPage.tsx";
import { EamilValidation } from "./components/auth/emailValidation.tsx";
import { Auth } from "./components/auth/auth.tsx";
import { SeeMore } from './components/seeMore/seeMore.tsx';
import { Products } from './components/product/productPage.tsx';
import { Store } from './components/product/Store.tsx';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import ProfilePage from './components/user/ProfilePage.refactored.tsx';

const RedirectAuthenticatedUser = ({ children }: any) => {
  const { isAuthenticated }: any = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to='/home' replace />;
  }

  return children;
};

function App() {
  const { checkAuth }: any = useAuthStore();

  useEffect(() => {
    document.body.style.backgroundColor = "#FFF8E9"
    checkAuth()
  }, [checkAuth])

  return (
    <>
      <Routes>
        <Route
          path='/ProfilePage'
          element={
            <ProfilePage/>
          }
        />
        <Route
          path='/Products'
          element={
            <Products/>
          }
        />
        <Route
          path='/Store'
          element={
            <Store />
          }
        />
        <Route
          path='/home'
          element={
            <LandingPage />
          }
        />
        <Route
          path='/'
          element={
            <LandingPage />
          }
        />
        <Route
          path="/authentication/register"
          element={
            <RedirectAuthenticatedUser>
              <Auth direction="register" />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/authentication/logIn"
          element={
            <RedirectAuthenticatedUser>
              <Auth direction="logIn" />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path='/authentication/validationCode'
          element={<EmailVerification />}
        />
        <Route
          path='/authentication/forgot-password'
          element={
            <RedirectAuthenticatedUser>
              <Forgot />
            </RedirectAuthenticatedUser>
          }
        />

        <Route
          path='/authentication/setNew-password/:tokenID'
          element={
            <RedirectAuthenticatedUser>
              <Newpass />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/authentication/check/:email"
          element={
            <RedirectAuthenticatedUser>
              <Check />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/authentication/validPassword"
          element={
            <Validation />
          }
        />
        <Route
          path="/authentication/validEamil"
          element={
            <EamilValidation />
          }
        />
        <Route
          path="/Features"
          element={
            <SeeMore />
          }
        />
        {/* Shopping Cart System Routes */}
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        
        <Route path='/*' element={<NotFound />} />
        <Route path='/NotFound' element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
