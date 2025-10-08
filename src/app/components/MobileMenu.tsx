

// "use client";

// import { useUserProfileQuery } from "@/redux/feature/userSlice";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import Image from "next/image";
// import { toast } from "sonner";
// import { logout } from "@/service/authService";

// interface MobileMenuProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onDonateClick: (e: React.MouseEvent) => void;
// }

// export default function MobileMenu({ isOpen, onClose, onDonateClick }: MobileMenuProps) {
//   const pathname = usePathname();

//   const { data } = useUserProfileQuery(undefined);
//   if (!isOpen) return null;
//     const IMAGE = process.env.NEXT_PUBLIC_IMAGE;
//   const profileSrc = `${IMAGE}${data?.data?.profile_pic}`;

//    const handleLogOut = async () => {
//       if (toast.info("Logging out...")) {
//         localStorage.removeItem("accessToken");
//         // localStorage.removeItem("refreshToken");
//         await logout();
//         setTimeout(() => {
//           window.location.href = "/";
//         }, 1000);
//       }
//     };

//   return (
//     <div className="fixed inset-0 bg-white z-50 flex flex-col md:hidden">
//       {/* Close Button */}
//       <div className="flex justify-end p-4">
//         <button onClick={onClose} className="text-gray-700">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex flex-col items-center space-y-6 mt-10">
//         <Link
//           href="/"
//           onClick={onClose}
//           className={`text-[#727A7C] text-lg ${pathname === "/" ? "font-bold" : ""
//             }`}
//         >
//           Home
//         </Link>
//         <Link
//           href="/news"
//           onClick={onClose}
//           className={`text-[#727A7C] text-lg ${pathname === "/news" ? "font-bold" : ""
//             }`}
//         >
//           News
//         </Link>
//         <button
//           // href="/donation"

//           onClick={onClose}
//           className={`text-[#727A7C] text-lg ${pathname === "/donation" ? "font-bold" : ""
//             }`}
//         >
//           Donation
//         </button>
//         <Link
//           href="/stories"
//           onClick={onClose}
//           className={`text-[#727A7C] text-lg ${pathname === "/stories" ? "font-bold" : ""
//             }`}
//         >
//           User Story
//         </Link>
//         {/* <Link
//           href="/sign-in"
//           onClick={onClose}
//           className={`text-[#727A7C] text-lg ${
//             pathname === "/sign-in" ? "font-bold" : ""
//           }`}
//         >
//           Sign In
//         </Link> */}
//         <div className="flex items-center space-x-4">
//           {!data ? (
//             <Link
//               href="/sign-in"
//               className="hidden sm:block text-[#727A7C] hover:text-gray-900"
//             >
//               Sign In
//             </Link>
//           ) : (
//             // <Link
//             // href="/profile"
//             // className="hidden sm:block text-[#727A7C] hover:text-gray-900"
//             // >
//             // {data?.full_name || 'My Profile'}
//             // </Link>
//             <DropdownMenu>
//               <DropdownMenuTrigger>
//                 <Image
//                   src={profileSrc}
//                   alt="Profile"
//                   width={32}
//                   height={32}
//                   className="rounded-full w-10 h-10 relative mx-auto sm:mx-0 object-cover"
//                 />
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <Link href={"/my-profile"}>
//                   <DropdownMenuItem>Profile</DropdownMenuItem>
//                 </Link>
//                 {/* <DropdownMenuItem>Billing</DropdownMenuItem>
//                           <DropdownMenuItem>Team</DropdownMenuItem> */}
//                 <DropdownMenuItem
//                   className="text-red-600"
//                   onClick={() => handleLogOut()}
//                 >
//                   Log Out
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           )}
       
//         </div>

//         <button
//           onClick={(e) => {
//             onDonateClick(e);
//             onClose();
//           }}
//           className="bg-[#760C2A] text-white px-6 py-2 rounded-md text-lg"
//         >
//           Donate
//         </button>
//       </nav>
//     </div>
//   );
// }

"use client";

import { useUserProfileQuery } from "@/redux/feature/userSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { toast } from "sonner";
import { logout } from "@/service/authService";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onDonateClick: (e: React.MouseEvent) => void;
}

export default function MobileMenu({ isOpen, onClose, onDonateClick }: MobileMenuProps) {
  const pathname = usePathname();
  const { data } = useUserProfileQuery(undefined);

  if (!isOpen) return null;

  const IMAGE = process.env.NEXT_PUBLIC_IMAGE;
  const profileSrc = `${IMAGE}${data?.data?.profile_pic}` || "/default-profile.png";

  const handleLogOut = async () => {
    toast.info("Logging out...");
    localStorage.removeItem("accessToken");
    await logout();
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

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
          className={`text-[#727A7C] text-lg ${pathname === "/" ? "font-bold" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/news"
          onClick={onClose}
          className={`text-[#727A7C] text-lg ${pathname === "/news" ? "font-bold" : ""}`}
        >
          News
        </Link>
        <Link
          href="/donation"
          onClick={onClose}
          className={`text-[#727A7C] text-lg ${pathname === "/donation" ? "font-bold" : ""}`}
        >
          Donation
        </Link>
        <Link
          href="/stories"
          onClick={onClose}
          className={`text-[#727A7C] text-lg ${pathname === "/stories" ? "font-bold" : ""}`}
        >
          User Story
        </Link>
        {!data ? (
          <Link
            href="/sign-in"
            onClick={onClose}
            className={`text-[#727A7C] text-lg ${pathname === "/sign-in" ? "font-bold" : ""}`}
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
                className="rounded-full w-10 h-10 relative mx-auto sm:mx-0 object-cover"
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
                onClick={() => handleLogOut()}
              >
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
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