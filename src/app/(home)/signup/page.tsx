"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, KeyRound, Eye, EyeOff, User } from "lucide-react";
import Link from "next/link";
import { useRegisterMutation } from "@/redux/feature/authSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  

  const [register] = useRegisterMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      const response = await register({
        email,
        password,
        full_name: name.trim(),
      }).unwrap();
      console.log("Registration response:", response);
      toast.success(response?.message || "Registration successful!");
      router.push(`/verify-email?email=${email}`);
    } catch (error: unknown) {
      console.error("Registration failed:", error);
      const errorResponse = error as { data?: { message: string } };
      toast.error(
        errorResponse.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#760C2A] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 md:p-8">
        <h1 className="text-xl font-medium text-center text-gray-800 mb-8">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="name"
              placeholder="Enter your name..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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

          {/* Sign In Button */}
          <Button
            type="submit"
            className="w-full bg-[#7a0c2e] hover:bg-[#690a27] text-white py-2 rounded-full"
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up Now"}
          </Button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <Link
            href="/sign-in"
            className="text-[#760C2A] font-medium hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
