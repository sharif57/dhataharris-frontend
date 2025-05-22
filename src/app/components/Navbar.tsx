/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
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

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data, refetch } = useUserProfileQuery(undefined);
  console.log(data, "data navbar");

  // List of paths where Navbar should not render
  const hiddenPaths = [
    "/sign-in",
    "/forgot-password",
    "/signup",
    "/verify-email",
    "/reset-password",
    
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
      // Scroll to donation section on homepage
      const donationSection: HTMLElement | null =
        document.getElementById("donation-section");
      if (donationSection) {
        donationSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to homepage with donation section anchor
      window.location.href = "/#donation-section";
    }
  };
  const IMAGE = process.env.NEXT_PUBLIC_IMAGE;
  const profileSrc = `${IMAGE}${data?.profile_pic}`;

  const handleLogOut = () => {
    // Implement your logout logic here

    localStorage.removeItem("accessToken");
    toast.success("Logout successful!");
    refetch();
  };

  return (
    <>
      <header className="w-full bg-white font-roboto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex flex-col items-center">
              <div className="relative w-20 h-20">
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
              className={`font-roboto  hover:text-gray-900 ${
                pathname === "/" ? "text-[#760C2A]" : "text-[#727A7C]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/news"
              className={`hover:text-gray-900 ${
                pathname === "/news" ? "text-[#760C2A]" : "text-[#727A7C]"
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
              className={`hover:text-gray-900 ${
                pathname === "/stories" ? "text-[#760C2A]" : "text-[#727A7C]"
              }`}
            >
              User Story
            </Link>
          </nav>

          {/* Auth and Donate Buttons */}
          <div className="flex items-center space-x-4">
            {!data ? (
              <Link
                href="/sign-in"
                className="hidden sm:block text-[#727A7C] hover:text-gray-900"
              >
                Sign In
              </Link>
            ) : (
              // <Link
              // href="/profile"
              // className="hidden sm:block text-[#727A7C] hover:text-gray-900"
              // >
              // {data?.full_name || 'My Profile'}
              // </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Image
                    src={profileSrc}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full w-10 h-10 relative mx-auto sm:mx-0 object-cover"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href={"/my-profile"}>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={() => handleLogOut()}
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
            </button>
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
        onDonateClick={handleDonateClick}
      />
    </>
  );
}
