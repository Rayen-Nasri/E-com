import { useEffect, useState } from "react"
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "../../../global/authStore";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

type loginForme = z.infer<typeof loginSchema>;


const Login = () => {
  useEffect(() => {
    const toast1 = toast.success(
      <div>
        <div>email : demo@gmail.com</div>
        <div>password : password</div>
      </div>,
      { duration: 5000 }
    );
    return ()=>{
      toast.remove(toast1)
    }
  }, []);

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
      toast.error("Invalid User ")
    }

  }

  const [showPassword, setShowPassword] = useState(false);


  return (
    <>

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:mx-10 lg:mx-20  ">
        <h2 className="text-3xl font-bold text-center  mb-13">Log in</h2>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className={`w-full px-3 py-2 border border-[#B2916C] rounded-[4px] bg-transparent ${errors.email ? "border-red-500" : ""}`}
            {...register("email")}
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label htmlFor="password" className="block font-semibold">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Your password"
              className={`w-full px-3 py-2 border border-[#B2916C] rounded-[4px] bg-transparent ${errors.password ? "border-red-500" : ""}`}
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} opacity={0.5} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>



        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#FFF8E9] rounded-[4px] hover:shadow-md
                     transition-colors text-black font-semibold mt-19 "
        >
          Log in
        </button>

        <div className="flex items-center ">
          <input
            type="checkbox"
            id="terms"
          />

          <label htmlFor="terms" className="text-sm ml-2">
            Remember me?
          </label>


          <Link to={"/authentication/forgot-password"} className="ml-auto">forgot password?</Link>



        </div>


        <p className="text-center text-[17px] mt-13 ">
          Don't have an account?{" "}
          <Link to="/authentication/register" className="font-medium underline text-[#B2916C]">
            Register here
          </Link>
        </p>
      </form>

    </>
  )
}

export default Login

