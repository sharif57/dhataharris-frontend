"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyRound, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useResetPasswordMutation } from "@/redux/feature/authSlice";
import { toast } from "sonner";

export default function CreatePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });
  const [resetPassword] = useResetPasswordMutation();

  // Validate password on change
  useEffect(() => {
    validatePassword(password);
  }, [password]);

  // Validate confirm password on change
  useEffect(() => {
    if (confirmPassword) {
      if (password !== confirmPassword) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Passwords do not match",
        }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      }
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }
  }, [confirmPassword, password]);

  const validatePassword = (value: string) => {
    if (!value) {
      setErrors((prev) => ({ ...prev, password: "" }));
      return false;
    }

    if (value.length < 8 || value.length > 10) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be 8-10 characters long",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, password: "" }));
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate both fields
    const isPasswordValid = validatePassword(password);
    const isConfirmValid = password === confirmPassword;

    if (!isPasswordValid) {
      return;
    }

    if (!isConfirmValid) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      return;
    }

    setIsLoading(true);

    try {
      const res = await resetPassword({
        new_password: password,
        confirm_password: confirmPassword,
      }).unwrap();
      console.log(res, "res");
      
      // Simulate API call to update password
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Password updated:", { password });
      toast.success(res?.message || "Password updated successfully!");
      localStorage.removeItem("access");
      router.push("/sign-in");
      // Redirect to login page or dashboard
    } catch (error) {
      console.error("Failed to update password:", error);
      toast.error("Failed to update password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#760C2A] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center mb-4">
          <h1 className="text-lg font-medium text-center flex-1 pr-5">
            Create New Password
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-sm text-gray-600 text-center mb-6">
          Your password must be 8-10 character long.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* New Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <KeyRound className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
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
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}

          {/* Confirm Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <KeyRound className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-type Password"
              className="pl-10 pr-10 py-2 rounded-full border border-gray-300 w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword}
            </p>
          )}

          {/* Confirm Button */}
          <Button
            type="submit"
            className="w-full bg-[#760C2A] hover:bg-[#760C2A] text-white py-2 rounded-md mt-4"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Confirm"}
          </Button>
        </form>
      </div>
    </main>
  );
}
