import Image from "next/image";
import React from "react";

export default function Donation() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Image
          src="/donation.png"
          alt="donation"
          width={1600}
          height={600}
className="object-cover h-[400px] lg:h-[600px]"
        ></Image>
      </div>
      <div>
        {/* <h1 className= "text-5xl text-[#2C383C] font-bold">make a donation</h1> */}
      </div>
    </div>
  );
}
