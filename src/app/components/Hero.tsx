'use client';
import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";


export default function Hero() {
  

  return (
    <div>
      {" "}
      <section className="w-full py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full rounded-3xl overflow-hidden">
            {/* Hero Image */}
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <Image
                src="/banner1.png"
                alt="Healthcare professionals"
                width={1600}
                height={600}
                className="object-cover h-[400px] lg:h-[600px]"
                priority
              />
            </div>

            {/* Search Bar */}
            <div className="absolute inset-0 top-3/4 flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <SearchInput />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
