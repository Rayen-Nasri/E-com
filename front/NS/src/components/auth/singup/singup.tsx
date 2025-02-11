import "../login/login.css"
import "./signup.css"
import singUp from "../../../assets/signup.jpg"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Google, Apple, Ns } from "../../../assets/assets"

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for validation
const signupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please confirm your password"),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit: SubmitHandler<SignupFormInputs> = (data) => {
    console.log("Form Data:", data);
    // API fetch Logique
  };

  return (
    <div
      className="flex m-4 lg:border-2 rounded-[21px] h-[96vh]"
      style={{ borderColor: "#D9D9D9", overflow: "hidden" }}
    >
      {/* Left side - Image */}
      <div className="relative hidden lg:block w-3/7">
        <img src={singUp} alt="Modern furniture" className="object-cover w-full h-full" />
      </div>

      {/* Right side - Form */}
      <div className="p-6 lg:p-9 min-h-screen flex flex-col justify-center max-w-[600px] mx-auto w-full">
        <div className="mb-5">
          <div className="text-center">
            <div className="flex justify-center relative bottom-7 nN">
              <Ns />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center">Create an account</h2>
          <p className="text-gray-600 text-center">
            Get early access to new features and promotions
          </p>
        </div>

        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <div className="space-y-2">
            <label htmlFor="firstName" className="block font-medium">
              First name
            </label>
            <input
              id="firstName"
              placeholder="Your first name"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
              {...register("firstName")}
            />
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label htmlFor="lastName" className="block font-medium">
              Last name
            </label>
            <input
              id="lastName"
              placeholder="Your last name"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
              {...register("lastName")}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email")}
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
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
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block font-medium">
              Confirm password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-stone-300 focus:shadow-sm ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
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
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className={`mr-2 ${errors.terms ? "border-red-500" : ""}`}
              {...register("terms")}
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <a href="/terms" className="text-[#6B8696] hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            style={{ backgroundColor: "#F5F3F1" }}
          >
            Create account
          </button>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              style={{ backgroundColor: "#FFFCF8" }}
              type="button"
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Google />
              Google
            </button>
            <button
              style={{ backgroundColor: "#FFFCF8" }}
              type="button"
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Apple />
              Apple
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 alrH">
            Already have an account?{" "}
            <a href="/login" className="text-[#6B8696] hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};