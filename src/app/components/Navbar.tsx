"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import MobileMenu from "@/components/mobile-menu"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white font-roboto ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex flex-col items-center">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="Equality Through Heart Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 font-roboto hover:text-gray-900">
              Home
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-gray-900">
              News
            </Link>
            <Link
              href="/donation"
              className="text-gray-700 hover:text-gray-900"
            >
              Donation
            </Link>
            <Link
              href="/user-story"
              className="text-gray-700 hover:text-gray-900"
            >
              User Story
            </Link>
          </nav>

          {/* Auth and Donate Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/sign-in"
              className="hidden sm:block text-gray-700 hover:text-gray-900"
            >
              Sign In
            </Link>
            <Link
              href="/donate"
              className="bg-[#8B1D3F] text-white px-4 py-2 rounded-md flex items-center"
            >
              Donate <span className="ml-1">❤</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {/* <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} /> */}
    </>
  );
}
