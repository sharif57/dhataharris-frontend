"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, KeyRound, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import {
  useFacebookLoginMutation,
  useGoogleLoginMutation,
  useLoginMutation,
} from "@/redux/feature/authSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import {
  ReactFacebookLoginInfo,
  ReactFacebookFailureResponse,
} from "react-facebook-login";
import { useUserProfileQuery } from "@/redux/feature/userSlice";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [googleLogin] = useGoogleLoginMutation();
  const [login] = useLoginMutation();
  const { refetch } = useUserProfileQuery(undefined);
  const [facebookLogin] = useFacebookLoginMutation();
  const [googleLogin] = useGoogleLoginMutation();

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
      window.location.href = "/";
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
    await refetch();
  };

  // Google login
  const handleGoogleSuccess = async (credentialResponse: {
    credential?: string;
  }) => {
    try {
      if (!credentialResponse.credential) {
        throw new Error("No credential received from Google");
      }

      // Decode the JWT to get user info
      const GoogleJwtPayload = credentialResponse.credential;
      console.log("Google user info:", GoogleJwtPayload);

      // Send to backend
      const response = await googleLogin({
        id_token: credentialResponse.credential,
        user: GoogleJwtPayload,
      }).unwrap();
      console.log(response);

      if (response.success) {
        localStorage.setItem("accessToken", response?.data?.access);
        toast.success("Google login successful!");
        router.push("/");
        window.location.href = "/";
      } else {
        toast.error(response.message || "Google login failed");
      }
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

  // const handleResponse = async (
  //   response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  // ) => {
  //   console.log("Facebook Response:", response);

  //   if ("accessToken" in response) {
  //     try {
  //       const { accessToken } = response;
  //       console.log("Facebook Access Token:", accessToken);
  //       console.log(response, "================||");

  //       // Send token to your backend
  //       const result = await facebookLogin({
  //         access_token: accessToken,
  //       }).unwrap();
  //       console.log("Backend Response:", result);

  //       if (result.success) {
  //         if (result?.data?.token) {
  //           localStorage.setItem("token", result?.data?.token);
  //           localStorage.setItem("user", JSON.stringify(result?.data?.user));
  //         }

  //         toast.success("Login successful!");
  //         // router.push("/");
  //       } else {
  //         throw new Error(result.message || "Facebook login failed");
  //       }
  //     } catch (error: unknown) {
  //       console.error("Facebook login error:", error);
  //       toast.error(
  //         (error &&
  //         typeof error === "object" &&
  //         "data" in error &&
  //         typeof error.data === "object" &&
  //         error.data &&
  //         "message" in error.data
  //           ? (error.data as { message: string }).message
  //           : error instanceof Error
  //           ? error.message
  //           : "") || "Failed to login with Facebook"
  //       );

  //       // localStorage.removeItem("facebookAccessToken");
  //     }
  //   } else {
  //     console.error("Facebook login failed:", response);
  //     toast.error("Facebook login failed. Please try again.");
  //   }
  //   // await refetch();
  // };
  const handleResponse = async (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  ) => {
    console.log("Facebook Response:", response);

    if ("accessToken" in response) {
      try {
        const { accessToken } = response;
        console.log("Facebook Access Token:", accessToken);

        // Send token to your backend
        const result = await facebookLogin({
          access_token: accessToken,
        }).unwrap();
        console.log("Backend Response:", result);
        localStorage.setItem("accessToken", result?.data?.access);

        if (result.success) {
          // if (result?.data?.token) {
          //   localStorage.setItem("user", JSON.stringify(result?data?.user));
          // }

          toast.success("Login successful!");
          router.push("/");
          // window.location.reload(); // Consider if you really need this
        } else {
          throw new Error(result.message || "Facebook login failed");
        }
      } catch (error: unknown) {
        console.error("Facebook login error:", error);
        toast.error(
          (error &&
          typeof error === "object" &&
          "data" in error &&
          typeof error.data === "object" &&
          error.data &&
          "message" in error.data
            ? (error.data as { message: string }).message
            : error instanceof Error
            ? error.message
            : "") || "Failed to login with Facebook"
        );
      }
    } else {
      console.error("Facebook login failed:", response);
      toast.error("Facebook login failed. Please try again.");
    }
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
            <div className="flex items-center justify-between gap-6">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap
                // shape="pill"
                theme="outline"
                size="large"
                text="signin"
                width="150"
              />

              <FacebookLogin
                appId={process.env.NEXT_PUBLIC_API_KEY_FACEBOOK || ""}
                autoLoad={false}
                callback={handleResponse}
                render={(renderProps) => (
                  <div

                  // variant="outline"
                  // size="icon"
                  // className=" "
                  >
                    <button
                      onClick={renderProps.onClick}
                      className="flex items-center justify-between p- px-4 border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      <svg
                        width="24"
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
                )}
              />
            </div>

            {/* <button className="flex items-center justify-between p-2 px-6 border border-gray-300 rounded-md hover:bg-gray-50">
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
            </button> */}
          </div>
        </div>
      </div>
    </main>
  );
}
