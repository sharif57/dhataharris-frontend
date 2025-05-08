import Image from "next/image";
import React from "react";

export default function Donation() {
  return (
    <div className="bg-[#FFFAFB]  p-6 lg:p-0">
      <div className="lg:flex justify-between pt-16 pb-16 items-center max-w-5xl mx-auto ">
        <div>
          <Image
            src="/donation.png"
            alt="donation"
            width={1600}
            height={600}
            className="object-cover w-[500px] h-[400px] lg:h-[400px] rounded-3xl"
          ></Image>
        </div>
        <div className="lg:space-y-8 space-y-4 mt-10 lg:mt-0">
          <h1 className="lg:text-5xl text-3xl text-[#2C383C] font-bold">Make a Donation</h1>
          <div className="flex items-center gap-8">
            <button className="bg-[#760C2A] text-white px-6 py-3 rounded-md flex font-normal items-center text-xl">
              $ 10
            </button>
            <button className="bg-[#760C2A] text-white px-6 py-3 rounded-md flex font-normal  items-center text-xl">
              $ 50
            </button>
            <button className="bg-[#760C2A] text-white px-6 py-3 rounded-md flex  font-normal items-center text-xl">
              $ 100
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-[#760C2A] font-normal text-2xl">Other Amount</p>
            <input
              className="border border-[#760C2A] py-4 px-4 rounded-3xl w-full"
              type="text"
              placeholder="other amount"
            />
          </div>
          <button className="bg-[#760C2A] text-white px-6 py-3 rounded-3xl flex items-center text-xl">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}
