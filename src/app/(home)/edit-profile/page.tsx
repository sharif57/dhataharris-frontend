"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Camera } from "lucide-react"

export default function ProfileEditPage() {
  const [profileData, setProfileData] = useState({
    name: "Robert Fox",
    occupation: "Doctor",
    mobileNumber: "82000012154",
    email: "jane20@gmail.com",
  })

  const [profileImage, setProfileImage] = useState("/profile-image.png")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result.toString())
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    // Here you would typically send the data to your backend
    console.log("Saving profile data:", profileData)
    console.log("Profile image:", profileImage)
    alert("Profile updated successfully!")
  }

  return (
    <main className="min-h-screen bg-[#fdf0f0] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-md max-w-md w-full p-6 md:p-8 relative">
        {/* Close Button */}
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>

        {/* Header with Profile Image and Name */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-14 h-14 cursor-pointer group" onClick={handleImageClick}>
            <Image
              src={profileImage || "/placeholder.svg"}
              alt="Profile"
              fill
              className="rounded-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={20} className="text-white" />
            </div>
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
          </div>
          <div>
            <h2 className="font-medium text-gray-800">Dr. Jane Nicholson</h2>
            <p className="text-sm text-gray-500">{profileData.email}</p>
          </div>
        </div>

        {/* Profile Form */}
        <div className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <Input id="name" name="name" value={profileData.name} onChange={handleInputChange} className="w-full" />
          </div>

          {/* Occupation */}
          <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-600 mb-1">
              Occupation
            </label>
            <Input
              id="occupation"
              name="occupation"
              value={profileData.occupation}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600 mb-1">
              Mobile Number
            </label>
            <Input
              id="mobileNumber"
              name="mobileNumber"
              value={profileData.mobileNumber}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8">
          <Button className="bg-[#8b1d3d] hover:bg-[#7a1935] text-white px-6" onClick={handleSave}>
            Save Change
          </Button>
        </div>
      </div>
    </main>
  )
}
