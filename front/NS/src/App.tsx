import Login from "./components/auth/login/login"
import { NotFound } from './components/notFound/notFound.tsx';
import { Homee } from './components/landing/home/home.tsx';
import { Signup } from './components/auth/singup/singup.tsx';
import { Newpass } from './components/auth/newPass.tsx';
import { Forgot } from './components/auth/forgot.tsx';
import { EmailVerification } from './components/auth/verification.tsx';
import { Navigate, Route, Routes } from "react-router";
import { useAuthStore } from "./global/authStore.tsx";
import { useEffect } from "react";
import { Check } from "./components/auth/check.tsx";
import { Toaster } from "react-hot-toast";
import { Validation } from "./components/auth/validation.tsx";


//! if i need to make the home page in the seconde place
// const ProtectedRoute = ({ children }: any) => {
//   const { isAuthenticated, user }: any = useAuthStore();

//   if (!isAuthenticated) {
//     return <Navigate to='/authentication/logIn' replace />;
//   }

//   if (!user.isVerified) {
//     return <Navigate to='/authentication/validationCode' replace />;
//   }

//   return children;
// };

const RedirectAuthenticatedUser = ({ children }: any) => {
  const { isAuthenticated   }: any = useAuthStore();

  if (isAuthenticated ) {
    return <Navigate to='/home' replace />;
  }

  return children;
};


function App() {
  const { checkAuth }: any = useAuthStore();

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <>
      <Routes>
        <Route
          path='/home'
          element={
            // <ProtectedRoute>
            <Homee />
            // </ProtectedRoute>
          }
        />
        <Route
          path='/'
          element={
            // <ProtectedRoute>
            <Homee />
            // </ProtectedRoute>
          }
        />
        <Route
          path='/authentication/register'
          element={
            <RedirectAuthenticatedUser>
              <Signup />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path='/authentication/logIn'
          element={
            <RedirectAuthenticatedUser>
              <Login />
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
          path="/authentication/valid"
          element={
              <Validation />
          }
        />
        {/* catch all routes */}
        <Route path='/*' element={<NotFound />} />
        <Route path='/NotFound' element={<NotFound />} />

      </Routes>
      <Toaster />

    </>

  )
}

export default App
