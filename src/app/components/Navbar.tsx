
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUserProfileQuery } from "@/redux/feature/userSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { logout } from "@/service/authService";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data } = useUserProfileQuery(undefined);

  // List of paths where Navbar should not render
  const hiddenPaths = [
    "/sign-in",
    "/forgot-password",
    "/signup",
    "/verify-email",
    "/reset-password",
    '/forgetVerify'
  ];

  if (hiddenPaths.includes(pathname)) {
    return null;
  }

  // Handle Donate button click for scrolling
  interface DonateClickEvent {
    preventDefault: () => void;
  }

  const handleDonateClick = (e: DonateClickEvent): void => {
    e.preventDefault();
    if (pathname === "/") {
      const donationSection: HTMLElement | null =
        document.getElementById("donation-section");
      if (donationSection) {
        donationSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#donation-section";
    }
    setIsMobileMenuOpen(false);
  };

  const IMAGE = process.env.NEXT_PUBLIC_IMAGE;
  const profileSrc = `${IMAGE}${data?.data?.profile_pic}`;

  const handleLogOut = async () => {
    if (toast.info("Logging out...")) {
      localStorage.removeItem("accessToken");
      await logout();
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="w-full bg-white font-roboto fixed top-0 left-0 z-50 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex flex-col items-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
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
              className={`font-roboto hover:text-gray-900 ${pathname === "/" ? "text-[#760C2A]" : "text-[#727A7C]"
                }`}
            >
              Home
            </Link>
            <Link
              href="/news"
              className={`hover:text-gray-900 ${pathname === "/news" ? "text-[#760C2A]" : "text-[#727A7C]"
                }`}
            >
              News
            </Link>
            <button
              onClick={handleDonateClick}
              className="text-[#727A7C] hover:text-gray-900"
            >
              Donation
            </button>
            <Link
              href="/stories"
              className={`hover:text-gray-900 ${pathname === "/stories" ? "text-[#760C2A]" : "text-[#727A7C]"
                }`}
            >
              User Story
            </Link>
            <a
              href="https://www.youtube.com/@usvsms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#727A7C] hover:text-gray-900"
            >
              Web Series
            </a>
          </nav>

          {/* Auth and Donate Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {!data ? (
              <Link
                href="/sign-in"
                className="text-[#727A7C] hover:text-gray-900"
              >
                Sign In
              </Link>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Image
                    src={profileSrc}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full w-10 h-10 object-cover"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/my-profile">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            <button
              onClick={handleDonateClick}
              className="bg-[#760C2A] text-white px-4 py-2 rounded-md flex items-center"
            >
              Donate
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
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
             {!data ? (
              <Link
                href="/sign-in"
                className="text-[#727A7C] hover:text-gray-900"
              >
                Sign In
              </Link>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Image
                    src={profileSrc}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full w-10 h-10 object-cover"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/my-profile">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
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
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className={`text-lg ${pathname === "/" ? "text-[#760C2A]" : "text-[#727A7C]"
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/news"
              className={`text-lg ${pathname === "/news" ? "text-[#760C2A]" : "text-[#727A7C]"
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News
            </Link>
            <button
              onClick={handleDonateClick}
              className="text-lg text-[#727A7C] text-left"
            >
              Donation
            </button>
            <Link
              href="/stories"
              className={`text-lg ${pathname === "/stories" ? "text-[#760C2A]" : "text-[#727A7C]"
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              User Story
            </Link>
            <a
              href="https://www.youtube.com/@usvsms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#727A7C]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Web Series
            </a>
            {!data ? (
              <Link
                href="/sign-in"
                className="text-lg text-[#727A7C]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            ) : (
              <>
                <Link
                  href="/my-profile"
                  className="text-lg text-[#727A7C]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogOut}
                  className="text-lg text-red-600 text-left"
                >
                  Log Out
                </button>
              </>
            )}
          </nav>
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </header>
      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-20"></div>
    </>
  );
}