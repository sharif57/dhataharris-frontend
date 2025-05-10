"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
// import MobileMenu from "@/components/mobile-menu"

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname === '/sign-in') {
    return null;
  }
  if (pathname === '/forgot-password') {
    return null;
  }
  if (pathname === '/signup') {
    return null;
  }
  if (pathname === '/verify-email') {
    return null;
  }

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
            <Link
              href="/"
              className="text-[#727A7C] font-roboto hover:text-gray-900"
            >
              Home
            </Link>
            <Link href="/news" className="text-[#727A7C] hover:text-gray-900">
              News
            </Link>
            <Link
              href="/donation"
              className="text-[#727A7C] hover:text-gray-900"
            >
              Donation
            </Link>
            <Link
              href="/stories"
              className="text-[#727A7C] hover:text-gray-900"
            >
              User Story
            </Link>
          </nav>

          {/* Auth and Donate Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/sign-in"
              className="hidden sm:block text-[#727A7C] hover:text-gray-900"
            >
              Sign In
            </Link>
            <Link
              href="/donate"
              className="bg-[#760C2A] text-white px-4 py-2 rounded-md flex items-center"
            >
              Donate{" "}
              <span className="ml-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_126_435"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="1"
                    width="16"
                    height="14"
                  >
                    <path
                      d="M5.00004 2.33331C2.97504 2.33331 1.33337 3.97498 1.33337 5.99998C1.33337 9.66665 5.66671 13 8.00004 13.7753C10.3334 13 14.6667 9.66665 14.6667 5.99998C14.6667 3.97498 13.025 2.33331 11 2.33331C9.76004 2.33331 8.66337 2.94898 8.00004 3.89131C7.66187 3.40978 7.21269 3.01678 6.69049 2.74559C6.1683 2.4744 5.58846 2.33298 5.00004 2.33331Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 8H10M8 6V10"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </mask>
                  <g mask="url(#mask0_126_435)">
                    <path d="M0 0H16V16H0V0Z" fill="white" />
                  </g>
                </svg>
              </span>
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
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
