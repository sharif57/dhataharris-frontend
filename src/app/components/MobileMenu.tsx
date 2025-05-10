// "use client"
// import Link from "next/link"
// import { X } from "lucide-react"

// interface MobileMenuProps {
//   isOpen: boolean
//   onClose: () => void
// }

// export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 bg-white">
//       <div className="flex justify-end p-4">
//         <button onClick={onClose} className="text-gray-700">
//           <X className="h-6 w-6" />
//         </button>
//       </div>
//       <nav className="flex flex-col items-center space-y-6 mt-12">
//         <Link href="/" className="text-xl text-gray-700 hover:text-gray-900" onClick={onClose}>
//           Home
//         </Link>
//         <Link href="/news" className="text-xl text-gray-700 hover:text-gray-900" onClick={onClose}>
//           News
//         </Link>
//         <Link href="/donation" className="text-xl text-gray-700 hover:text-gray-900" onClick={onClose}>
//           Donation
//         </Link>
//         <Link href="/user-story" className="text-xl text-gray-700 hover:text-gray-900" onClick={onClose}>
//           User Story
//         </Link>
//         <Link href="/sign-in" className="text-xl text-gray-700 hover:text-gray-900" onClick={onClose}>
//           Sign In
//         </Link>
//         <Link
//           href="/donate"
//           className="bg-[#8B1D3F] text-white px-6 py-3 rounded-md flex items-center text-xl mt-4"
//           onClick={onClose}
//         >
//           Donate <span className="ml-1">❤</span>
//         </Link>
//       </nav>
//     </div>
//   )
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onDonateClick: (e: React.MouseEvent) => void;
}

export default function MobileMenu({ isOpen, onClose, onDonateClick }: MobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col md:hidden">
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-gray-700">
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

      {/* Navigation Links */}
      <nav className="flex flex-col items-center space-y-6 mt-10">
        <Link
          href="/"
          onClick={onClose}
          className={`text-[#727A7C] text-lg ${
            pathname === "/" ? "font-bold" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/news"
          onClick={onClose}
          className={`text-[#727A7C] text-lg ${
            pathname === "/news" ? "font-bold" : ""
          }`}
        >
          News
        </Link>
        <Link
          href="/donation"
          onClick={onClose}
          className={`text-[#727A7C] text-lg ${
            pathname === "/donation" ? "font-bold" : ""
          }`}
        >
          Donation
        </Link>
        <Link
          href="/stories"
          onClick={onClose}
          className={`text-[#727A7C] text-lg ${
            pathname === "/stories" ? "font-bold" : ""
          }`}
        >
          User Story
        </Link>
        <Link
          href="/sign-in"
          onClick={onClose}
          className={`text-[#727A7C] text-lg ${
            pathname === "/sign-in" ? "font-bold" : ""
          }`}
        >
          Sign In
        </Link>
        <button
          onClick={(e) => {
            onDonateClick(e);
            onClose();
          }}
          className="bg-[#760C2A] text-white px-6 py-2 rounded-md text-lg"
        >
          Donate
        </button>
      </nav>
    </div>
  );
}