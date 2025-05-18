// "use client";

// import type React from "react";

// import { useState, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { X, Camera } from "lucide-react";
// import { useUpdateProfileMutation, useUserProfileQuery } from "@/redux/feature/userSlice";

// export default function ProfileEditPage() {
//   const { data } = useUserProfileQuery(undefined);
//   const [updateProfile]=useUpdateProfileMutation()
//   const [profileData, setProfileData] = useState({
//     name: data?.full_name,
//     occupation: data?.occupation,
//     mobileNumber: data?.mobile_no,
//     email: data?.email,
//   });

//   const IMAGE = process.env.NEXT_PUBLIC_API_URL;
//   console.log(IMAGE, "IMAGE");

//   const [profileImage, setProfileImage] = useState(
//     `${IMAGE}/${data?.profile_pic}` || "/user.png");
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setProfileData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         if (event.target?.result) {
//           setProfileImage(event.target.result.toString());
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSave = () => {
//     // Here you would typically send the data to your backend
//     console.log("Saving profile data:", profileData);
//     console.log("Profile image:", profileImage);
//     alert("Profile updated successfully!");
//   };

//   return (
//     <main className="min-h-screen bg-[#fdf0f0] flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-md max-w-md w-full p-6 md:p-8 relative">
//         {/* Close Button */}
//         <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-700">
//           <X size={20} />
//         </button>

//         {/* Header with Profile Image and Name */}
//         <div className="flex items-center gap-4 mb-8">
//           <div
//             className="relative w-14 h-14 cursor-pointer group"
//             onClick={handleImageClick}
//           >
//             <Image
//               src={profileImage || "/placeholder.svg"}
//               alt="Profile"
//               fill
//               className="rounded-full object-cover"
//               priority
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//               <Camera size={20} className="text-white" />
//             </div>
//             <input
//               type="file"
//               ref={fileInputRef}
//               className="hidden"
//               accept="image/*"
//               onChange={handleImageChange}
//             />
//           </div>
//           <div>
//             <h2 className="font-medium text-gray-800">Dr. Jane Nicholson</h2>
//             <p className="text-sm text-gray-500">{profileData.email}</p>
//           </div>
//         </div>

//         {/* Profile Form */}
//         <div className="space-y-6">
//           {/* Name */}
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-600 mb-1"
//             >
//               Name
//             </label>
//             <Input
//               id="name"
//               name="name"
//               value={profileData.name}
//               onChange={handleInputChange}
//               className="w-full"
//             />
//           </div>

//           {/* Occupation */}
//           <div>
//             <label
//               htmlFor="occupation"
//               className="block text-sm font-medium text-gray-600 mb-1"
//             >
//               Occupation
//             </label>
//             <Input
//               id="occupation"
//               name="occupation"
//               value={profileData.occupation}
//               onChange={handleInputChange}
//               className="w-full"
//             />
//           </div>

//           {/* Mobile Number */}
//           <div>
//             <label
//               htmlFor="mobileNumber"
//               className="block text-sm font-medium text-gray-600 mb-1"
//             >
//               Mobile Number
//             </label>
//             <Input
//               id="mobileNumber"
//               name="mobileNumber"
//               value={profileData.mobileNumber}
//               onChange={handleInputChange}
//               className="w-full"
//             />
//           </div>
//         </div>

//         {/* Save Button */}
//         <div className="mt-8">
//           <Button
//             className="bg-[#8b1d3d] hover:bg-[#7a1935] text-white px-6"
//             onClick={handleSave}
//           >
//             Save Change
//           </Button>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import type React from "react";
import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Camera } from "lucide-react";
import {
  useUpdateProfileMutation,
  useUserProfileQuery,
} from "@/redux/feature/userSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ProfileEditPage() {
  const router = useRouter();
  const { data } = useUserProfileQuery(undefined);
  const [updateProfile] = useUpdateProfileMutation();
  const [profileData, setProfileData] = useState();

  const IMAGE = process.env.NEXT_PUBLIC_API_URL;
  console.log(IMAGE, "IMAGE");
  const [profileImage, setProfileImage] = useState(
    `${IMAGE}/${data?.profile_pic}` || "/user.png"
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();

      // Append profile data
      formData.append("id", profileData.id.toString());
      // formData.append("email", profileData.email);
      formData.append("full_name", profileData.full_name);
      formData.append("occupation", profileData.occupation);
      formData.append("mobile_no", profileData.mobile_no);
      formData.append("location", profileData.location);

      // Append image if selected
      if (selectedFile) {
        formData.append("profile_pic", selectedFile);
      }

      // Call the update profile mutation
      const res = await updateProfile(formData).unwrap();
      toast.success(res?.message || "Profile updated successfully!");
      router.push("/my-profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#fdf0f0] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-md max-w-md w-full p-6 md:p-8 relative">
        {/* Close Button */}
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>

        {/* Header with Profile Image and Name */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="relative w-14 h-14 cursor-pointer group"
            onClick={handleImageClick}
          >
            <Image
              src={`${IMAGE}/${data?.profile_pic}` || "/placeholder.svg"}
              alt="Profile"
              fill
              className="rounded-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={20} className="text-white" />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div>
            <h2 className="font-medium text-gray-800">
              {data?.full_name}
            </h2>
            <p className="text-sm text-gray-500">{data?.email}</p>
          </div>
        </div>

        {/* Profile Form */}
        <div className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="full_name"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Name
            </label>
            <Input
              id="full_name"
              name="full_name"
              value={profileData.full_name}
              defaultValue={data?.full_name}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>

          {/* Occupation */}
          <div>
            <label
              htmlFor="occupation"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Occupation
            </label>
            <Input
              id="occupation"
              name="occupation"
              value={profileData.occupation}
              defaultValue={data?.occupation}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="mobile_no"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Mobile Number
            </label>
            <Input
              id="mobile_no"
              name="mobile_no"
              value={profileData.mobile_no}
              defaultValue={data?.mobile_no}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Location
            </label>
            <Input
              id="location"
              name="location"
              value={profileData.location}
              defaultValue={data?.location}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8">
          <Button
            className="bg-[#8b1d3d] hover:bg-[#7a1935] text-white px-6"
            onClick={handleSave}
          >
            Save Change
          </Button>
        </div>
      </div>
    </main>
  );
}
