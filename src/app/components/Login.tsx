"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, KeyRound, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import {  useLoginMutation } from "@/redux/feature/authSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [googleLogin] = useGoogleLoginMutation();
  const [login] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res, "res");
      localStorage.setItem("accessToken", res?.access);
      // In a real app, you would call your authentication API here
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Login attempted with:", { email, password });
      // alert("Login successful!");
      toast.success(res?.message || "Login successful!");

      router.push("/");
    } catch (error: unknown) {
      console.error("Login failed:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Login failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Google login

  interface GoogleJwtPayload {
    email: string;
    name: string;
    picture?: string;
    sub: string;
  }
  const handleGoogleSuccess = async (credentialResponse: {
    credential?: string;
  }) => {
    try {
      if (!credentialResponse.credential) {
        throw new Error("No credential received from Google");
      }

      // Decode the JWT to get user info
      const decoded: GoogleJwtPayload = jwtDecode(
        credentialResponse.credential
      );
      console.log("Google user info:", decoded);

      // Ensure all required fields are present
      if (!decoded.email || !decoded.name) {
        throw new Error("Google account missing required information");
      }

      // Prepare user data for backend
      const userData = {
        email: decoded.email,
        name: decoded.name,
        avatar: decoded.picture || "/default-avatar.png",
        uid: decoded.sub,
      };
      console.log(userData);

      // Send to backend
    //   const response = await googleLogin(userData).unwrap();
    //   console.log(response);

    //   if (response.success) {
    //     localStorage.setItem("token", response?.data?.token);
    //     localStorage.setItem("user", JSON.stringify(response?.data?.user));
    //     toast.success("Google login successful!");
    //     router.push("/");
    //   } else {
    //     toast.error(response.message || "Google login failed");
    //   }
    } catch (error: unknown) {
      console.error("Google login error:", error);
      toast.error(
        error &&
          typeof error === "object" &&
          "data" in error &&
          typeof error.data === "object" &&
          error.data &&
          "message" in error.data
          ? (error.data as { message: string }).message
          : error instanceof Error
          ? error.message
          : "Google login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleError = () => {
    console.log("Google login failed");
    toast.error("Google login failed. Please try again.");
  };

  return (
    <main className="min-h-screen bg-[#760C2A] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 md:p-8">
        <h1 className="text-xl font-medium text-center text-gray-800 mb-8">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="email"
              placeholder="Enter your email..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <KeyRound className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="pl-10 pr-10 py-2 rounded-full border border-gray-300 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-gray-600 hover:text-[#7a0c2e]"
            >
              Forgot Password
            </Link>
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            className="w-full bg-[#7a0c2e] hover:bg-[#690a27] text-white py-2 rounded-full"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Don&lsquo;t have an account? </span>
          <Link
            href="/signup"
            className="text-[#760C2A] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>

        {/* Social Login */}
        <div className="mt-6">
          <p className="text-center text-sm text-gray-600 mb-4">
            Or, Log In With
          </p>
          <div className="flex justify-center space-x-8">
            {/* <button className="flex items-center justify-between p-2 px-6 border border-gray-300 rounded-md hover:bg-gray-50">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.72 19.3958C35.72 18.1608 35.6092 16.9733 35.4033 15.8333H19V22.5703H28.3733C27.9696 24.7474 26.7425 26.592 24.8979 27.827V32.197H30.5267C33.82 29.1649 35.72 24.6999 35.72 19.3958Z"
                  fill="#4285F4"
                />
                <path
                  d="M19 36.4166C23.7025 36.4166 27.645 34.857 30.5267 32.197L24.8979 27.827C23.3384 28.872 21.3434 29.4895 19 29.4895C14.4638 29.4895 10.6242 26.4257 9.2546 22.3091H3.43585V26.8216C6.30169 32.5137 12.1917 36.4166 19 36.4166Z"
                  fill="#34A853"
                />
                <path
                  d="M9.25456 22.3091C8.90623 21.2641 8.70831 20.1478 8.70831 18.9999C8.70831 17.852 8.90623 16.7357 9.25456 15.6907V11.1782H3.43581C2.21665 13.6052 1.58224 16.2839 1.58331 18.9999C1.58331 21.8103 2.25623 24.4703 3.43581 26.8216L9.25456 22.3091Z"
                  fill="#FBBC05"
                />
                <path
                  d="M19 8.51033C21.5571 8.51033 23.8529 9.38908 25.6579 11.1149L30.6534 6.1195C27.6371 3.30909 23.6946 1.58325 19 1.58325C12.1917 1.58325 6.30169 5.48617 3.43585 11.1783L9.2546 15.6908C10.6242 11.5741 14.4638 8.51033 19 8.51033Z"
                  fill="#EA4335"
                />
              </svg>

              <span className="ml-2">Google</span>
            </button> */}
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
              shape="pill"
              theme="filled_black"
              size="large"
              text="continue_with"
              // width="300"
            />
            <button className="flex items-center justify-between p-2 px-6 border border-gray-300 rounded-md hover:bg-gray-50">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_13_15309)">
                  <path
                    d="M38 19.0001C38 8.50668 29.4934 9.91821e-05 19 9.91821e-05C8.50658 9.91821e-05 0 8.50668 0 19.0001C0 28.4836 6.94803 36.3439 16.0312 37.7693V24.4923H11.207V19.0001H16.0312V14.8142C16.0312 10.0523 18.8678 7.42198 23.2078 7.42198C25.2866 7.42198 27.4609 7.79307 27.4609 7.79307V12.4689H25.0651C22.7048 12.4689 21.9688 13.9334 21.9688 15.436V19.0001H27.2383L26.3959 24.4923H21.9688V37.7693C31.052 36.3439 38 28.4836 38 19.0001Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M26.3959 24.4922L27.2383 19H21.9688V15.4359C21.9688 13.9333 22.7048 12.4688 25.0651 12.4688H27.4609V7.79297C27.4609 7.79297 25.2866 7.42188 23.2078 7.42188C18.8678 7.42188 16.0313 10.0522 16.0313 14.8141V19H11.207V24.4922H16.0313V37.7692C16.9986 37.921 17.99 38 19 38C20.01 38 21.0014 37.921 21.9688 37.7692V24.4922H26.3959Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13_15309">
                    <rect width="38" height="38" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="ml-2">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
