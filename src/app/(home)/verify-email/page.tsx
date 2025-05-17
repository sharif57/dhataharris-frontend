"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";

import { useRouter, useSearchParams } from "next/navigation";
import { useVerifyEmailMutation } from "@/redux/feature/authSlice";
import { toast } from "sonner";
 function VerifyOTP() {
  const router = useRouter();

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const searchParams = useSearchParams();
    const userMail = searchParams.get("email") || ""; // Get email from URL query parameter
    console.log(userMail, "userMail");
  const [verifyEmail] = useVerifyEmailMutation();

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    // Take only the last character if multiple characters are pasted
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Move to next input if current input is filled
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // Handle arrow keys
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("");
      setOtp(digits);

      // Focus the last input
      inputRefs.current[5]?.focus();
    }
  };

  const handleVerify = async () => {
    const otpValue = otp.join("");

    // Check if OTP is complete
    if (otpValue.length !== 6) {
      alert("Please enter the complete 6-digit code");
      return;
    }

    setIsVerifying(true);

    try {
    const res = await verifyEmail({ email: userMail, otp: otpValue.trim() }).unwrap();
    console.log(res , "res");

      // Simulate API call to verify OTP
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Verifying OTP:", otpValue);
      // alert("Email verified successfully!");
      toast.success( res.data?.message || "Email verified successfully!");
      router.push("/sign-in");
      // Redirect to next page or show success message
    } catch (error) {
      console.error("Verification failed:", error);
      // alert("Verification failed. Please try again.");
      toast.error("Verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#760C2A] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <h1 className="text-lg font-medium text-center flex-1 pr-5">
            Verify Email
          </h1>
        </div>

        {/* OTP Input Fields */}
        <div className="flex justify-center gap-2 md:gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 text-center text-lg focus:border-[#7a0c2e] focus:ring-1 focus:ring-[#7a0c2e] focus:outline-none"
            />
          ))}
        </div>

        {/* Verify Button */}
        <Button
          onClick={handleVerify}
          disabled={isVerifying}
          className="w-full bg-[#760C2A] hover:bg-[#760C2A] text-white py-2 rounded-md"
        >
          {isVerifying ? "Verifying..." : "Verify"}
        </Button>

        {/* Help Text */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Please enter the OTP we have sent you in your email.
        </p>
      </div>
    </main>
  );
}

export default function VerifyEmail() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyOTP />
    </Suspense>
  );
}