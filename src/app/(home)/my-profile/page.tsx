import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export default function ProfileCardPage() {
  return (
    <main className="min-h-screen  bg-[#ffeff3] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-md max-w-md w-full p-6 md:p-8 relative">
        {/* Close Button */}
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>

        {/* Header with Profile Image and Name */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-14 h-14">
            <Image
              src="/user.png"
              alt="Dr. Jane Nicholson"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="font-medium text-[16px] text-[#1F2937]   ">
              Dr. Jane Nicholson
            </h2>
            <p className="text-sm text-gray-500">yourname@gmail.com</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <p className="text-gray-800">Dr. Jane Nicholson</p>
          </div>

          {/* Occupation */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Occupation
            </label>
            <p className="text-gray-800">Doctor</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email account
            </label>
            <p className="text-gray-800">jane20@gmail.com</p>
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Mobile number
            </label>
            <p className="text-gray-500">Add number</p>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Location
            </label>
            <p className="text-gray-800">USA</p>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-8">
          <Link href={"/edit-profile"}>
            <Button className="bg-[#8b1d3d] hover:bg-[#7a1935] text-white px-6">
              Edit
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
