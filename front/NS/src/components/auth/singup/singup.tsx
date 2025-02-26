import "../login/login.css";
import "./signup.css";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "../../../global/authStore";
import toast from "react-hot-toast";

// Zod schema for validation
const signupSchema = z
  .object({
    firstName: z.string().min(1, ""),
    lastName: z.string().min(1, ""),
    email: z.string().email(""),
    password: z.string().min(8, ""),
    confirmPassword: z.string().min(8, ""),
    terms: z.boolean().refine((val) => val === true, {
      message: "",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "",
    path: ["confirmPassword"],
  });

type SignupFormInputs = z.infer<typeof signupSchema>;

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup }: any = useAuthStore();

  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    console.log("Form Data:", data);
    const name = `${data.firstName} ${data.lastName}`;
    //* API fetch Logique

    try {
      await signup(data.email, data.password, name);
      navigate("/authentication/validationCode");
    } catch (error) {
      toast.error("User already exist");
    }
  };

  return (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:mx-10 lg:mx-20  ">
              <h2 className="text-3xl font-bold text-center mb-6">Sign up</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block font-semibold">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Your first name"
                    className={`w-full px-3 py-2 border border-[#B2916C] rounded-[4px] bg-transparent ${errors.firstName ? "border-red-500" : ""}`}
                    {...register("firstName")}
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block font-semibold">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Your last name"
                    className={`w-full px-3 py-2 border border-[#B2916C] rounded-[4px] bg-transparent ${errors.lastName ? "border-red-500" : ""}`}
                    {...register("lastName")}
                  />
                </div>
              </div>

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

              {/* Confirm Password */}
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block font-semibold">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirm password"
                    className={`w-full px-3 py-2 border border-[#B2916C] rounded-[4px] bg-transparent ${errors.confirmPassword ? "border-red-500" : ""}`}
                    {...register("confirmPassword")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} opacity={0.5} />}
                  </button>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className={`mr-2 h-4 w-4 border-[#D9D9D9] ${errors.terms ? "border-red-500" : ""}`}
                  {...register("terms")}
                />
                <label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link to="#" className="text-[#B2916C] hover:underline">
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#FFF8E9] rounded-[4px] hover:shadow-md transition-colors text-black font-semibold"
              >
                Create account
              </button>

              {/* Login Link */}
              <p className="text-center">
                Already have an account?{" "}
                <Link to="/authentication/logIn" className="text-[#B2916C] hover:underline">
                  Login here
                </Link>
              </p>
            </form>
  );
};