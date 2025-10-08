"use client";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/sign-in") {
    return null;
  }
  if (pathname === "/forgot-password" || pathname === "/forgetVerify") {
    return null;
  }
  if (pathname === "/signup") {
    return null;
  }
  if (pathname === "/verify-email") {
    return null;
  }
  if (pathname === "/reset-password") {
    return null;
  }

  return (
    <footer className="w-full  bg-white  py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Icons Column */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-2">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={100}
                height={100}
                className="h-auto"
              />
            </div>
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </Link>
            </div>
          </div>

          {/* News Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">News</h3>
            <div className="flex flex-col gap-2">
              <Link href="/stories" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-gray-900">
                Ms News
              </Link>
            </div>
          </div>

          {/* Quick Link Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">Quick Link</h3>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                Privacy & Policy
              </Link>
              <Link href="/trust" className="text-gray-600 hover:text-gray-900">
                Trust & Safety
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">Contact</h3>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                GitHub
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Twitter
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8"></div>

        {/* Bottom Copyright Section */}
        <div className="flex flex-col sm:flex-row justify-start  gap-10 items-start sm:items-center mt-12 pt-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Enitiative Group</p>
          {/* <div className="flex gap-6 mt-2 sm:mt-0"> */}
          <Link href="/privacy" className="hover:text-gray-900">
            Privacy
          </Link>
          <Link href="/privacy" className="hover:text-gray-900">
            Terms and Conditions
          </Link>
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
}
