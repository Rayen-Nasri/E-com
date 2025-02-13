import Login from "./components/auth/login/login"
import { NotFound } from './components/notFound/notFound.tsx';
import { Homee } from './components/landing/home/home.tsx';
import { Signup } from './components/auth/singup/singup.tsx';
import { Newpass } from './components/auth/setNewPass/newPass.tsx';
import { Forgot } from './components/auth/forgotPass/forgot.tsx';
import { EmailVerification } from './components/auth/emailVerification/verification.tsx';
import { Navigate, Route, Routes } from "react-router";
import { useAuthStore } from "./global/authStore.tsx";
import { useEffect } from "react";
import { Check } from "./components/auth/checkEmail/check.tsx";


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
  const { isAuthenticated, user }: any = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to='/' replace />;
  }

  return children;
};


function App() {
  const {checkAuth } : any = useAuthStore();

  useEffect(()=>{
    checkAuth()
  }, [checkAuth])

  return (
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
        path="/authentication/check"
        element = {
          <RedirectAuthenticatedUser>
            <Check/>
          </RedirectAuthenticatedUser>
        }
      />

      {/* catch all routes */}
      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}

export default App
