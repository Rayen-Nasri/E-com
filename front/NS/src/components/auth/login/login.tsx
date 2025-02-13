import { useEffect, useState } from "react"
import { Apple, Google } from "../../../assets/assets"

import "./login.css"
import { LoginFormHeader, LoginFromFooter, LoginHeader } from "./loginCilds"

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link , useNavigate } from "react-router";
import { useAuthStore } from "../../../global/authStore";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(9)
});

type loginForme = z.infer<typeof loginSchema>;


const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<loginForme>({
    resolver: zodResolver(loginSchema)
  });
  const { login }: any = useAuthStore();
  const Navigate = useNavigate()
  const onSubmit: SubmitHandler<loginForme> = async (data) => {
    const name = `${data.email} ${data.password}`;
    // API fetch Logique
    try {
      await login(data.email, data.password, name);
      Navigate("/home");

    } catch (error) {
      console.log(error);
    }

  }

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#FFFCF8";
    document.body.style.overflow = "hidden"
  }, []);

  return (
    <>
      <div className="flex m-4 lg:border-2 rounded-[21px] h-[96vh] " style={{ borderColor: "#D9D9D9", overflow: "hidden" }}>
        <LoginHeader />


        {/* Right side - Login Form */}
        <div className="w-full h-full lg:w-3/4 flex items-center justify-center  ">
          <div className="w-full max-w-md space-y-6 ">
            <LoginFormHeader />

            {/* Login Form */}
            <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-[21px]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none
                     focus:ring-2 focus:ring-stone-300 focus:border-stone-300
                     ${errors.email ? "border-red-500" : "border-gray-300"}
                     `}
                    {...register("email")}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-[21px]">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Your password"
                      required
                      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none
                       focus:ring-2 focus:ring-stone-300 focus:shadow-sm focus:border-stone-300
                       ${errors.password ? "border-red-500" : "border-gray-300"}
                       `}
                      {...register("password")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">

                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300 text-stone-600 focus:ring-stone-900 checkB"
                  />

                  <label htmlFor="remember" className="text-sm font-medium text-gray-700  text-[15px]">
                    Remember me?
                  </label>
                </div>
                <Link to="/authentication/forgot-password" className="text-sm font-medium text-[15px] hover:underline">
                  Forgot your password?
                </Link>
              </div>

              <button
                type="submit"
                className=" text-[15px] w-full flex justify-center py-2 px-4 border 
                border-transparent rounded-md  text-sm font-medium hover:shadow-sm "
                style={{ backgroundColor: "#F5F3F1" }}
              >
                Login
              </button>
              <div className="relative" >
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300 " />
                </div>
                <div className="relative flex justify-center text-s">
                  <span style={{ color: "#E2E2E2", backgroundColor: "#FFFCF8" }} className="px-3 text-gray-500" >Or,login with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  style={{ backgroundColor: "#FFFCF8" }}
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300
                   rounded-md hover:shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Google />
                  Google
                </button>
                <button

                  style={{ backgroundColor: "#FFFCF8" }}
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 
                  rounded-md hover:shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Apple />
                  Apple
                </button>
              </div>
            </form>

            <LoginFromFooter />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

