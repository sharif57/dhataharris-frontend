"use client";

import type React from "react";

import {  User, Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useDonationMutation } from "@/redux/feature/donationSlice";
import { Suspense, useState } from "react";

 function DonationForm() {
  const params = useSearchParams();
  console.log(params);
  const amount = params.get("amount");

  const [email, setEmail] = useState("");
  const [full_name, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const [donation] = useDonationMutation();
  console.log();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:");
    try {
      const response = await donation({
        email: email,
        full_name: full_name,
        location: location,
        amount: amount,
      }).unwrap();
      console.log("Donation successful:", response);
      window.location.href = response.sessionUrl;
    } catch (error) {
      console.error("Error during donation:", error);
    }
  };

  return (
    <div className="min-h-svh mx-auto flex items-center justify-center bg-[#FFFAFB] p-6 lg:p-0">
      <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#760C2A] text-white p-4 flex items-center justify-between">
          <button className="flex items-center justify-center gap-3 text-[24px] font-medium">
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.24841 11.6493C7.02338 11.8742 6.71821 12.0006 6.40001 12.0006C6.08181 12.0006 5.77665 11.8742 5.55161 11.6493L0.751612 6.84928C0.526647 6.62425 0.400269 6.31908 0.400269 6.00088C0.400269 5.68268 0.526647 5.37751 0.751612 5.15248L5.55161 0.35248C5.77793 0.13389 6.08106 0.0129363 6.39569 0.0156704C6.71033 0.0184045 7.0113 0.144607 7.23379 0.367097C7.45628 0.589587 7.58249 0.890562 7.58522 1.2052C7.58795 1.51983 7.467 1.82296 7.24841 2.04928L4.49681 4.80088H18.4C18.7183 4.80088 19.0235 4.92731 19.2485 5.15235C19.4736 5.37739 19.6 5.68262 19.6 6.00088C19.6 6.31914 19.4736 6.62436 19.2485 6.84941C19.0235 7.07445 18.7183 7.20088 18.4 7.20088H4.49681L7.24841 9.95248C7.47338 10.1775 7.59976 10.4827 7.59976 10.8009C7.59976 11.1191 7.47338 11.4242 7.24841 11.6493Z"
                fill="white"
              />
            </svg>{" "}
            Information
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-[#2C383C]" />
              </div>
              <input
                type="text"
                name="full_name"
                value={full_name}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="w-full py-2 pl-8 pr-3 placeholder:text-[#2C383C] placeholder:text-[20px] text-[20px] border-b border-gray-300 focus:outline-none focus:border-[#7a0c2e]"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-[#2C383C]" />
              </div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="uxarjun20@gmail.com"
                className="w-full py-2 pl-8 pr-3 placeholder:text-[#2C383C] placeholder:text-[20px] text-[20px] border-b border-gray-300 focus:outline-none focus:border-[#7a0c2e]"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Which country do you live in?"
                className="w-full py-2  pr-3 placeholder:text-[#2C383C] placeholder:text-[20px] text-[20px] border-b border-gray-300 focus:outline-none focus:border-[#7a0c2e]"
                required
              />
            </div>

            <div className="flex  items-center ">
              <div className="flex items-center h-5">
                <input
                  id="policy"
                  checked={checkbox}
                  className="bg-[#7a0c2e] size-4"
                  type="checkbox"
                  onChange={(e) => setCheckbox(e.target.checked)}
                  required
                />
              </div>
              <label htmlFor="policy" className="ml-3 text-lg text-gray-600 font-normal">
                By donating with this form, you agree to our privacy policy
              </label>
            </div>
          </div>

          <div
            onSubmit={handleSubmit}
            className="flex justify-center items-center gap-3"
          >
            <button className="bg-[#7a0c2e] text-white text-[20px] font-medium px-10 py-3 rounded-lg flex items-center justify-center">
              Next
            </button>
            <div>
              {" "}
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.3516 0.952906C10.5767 0.727941 10.8818 0.601563 11.2 0.601562C11.5182 0.601562 11.8234 0.727941 12.0484 0.952906L19.2484 8.15291C19.4734 8.37794 19.5998 8.68311 19.5998 9.00131C19.5998 9.3195 19.4734 9.62467 19.2484 9.84971L12.0484 17.0497C11.8221 17.2683 11.519 17.3892 11.2043 17.3865C10.8897 17.3838 10.5887 17.2576 10.3662 17.0351C10.1438 16.8126 10.0175 16.5116 10.0148 16.197C10.0121 15.8824 10.133 15.5792 10.3516 15.3529L15.5032 10.2013H1.60002C1.28176 10.2013 0.97654 10.0749 0.751496 9.84983C0.526453 9.62479 0.400024 9.31957 0.400024 9.00131C0.400024 8.68305 0.526453 8.37782 0.751496 8.15278C0.97654 7.92773 1.28176 7.80131 1.60002 7.80131H15.5032L10.3516 2.64971C10.1267 2.42467 10.0003 2.1195 10.0003 1.80131C10.0003 1.48311 10.1267 1.17794 10.3516 0.952906Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function VerifyEmail() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DonationForm />
    </Suspense>
  );
}