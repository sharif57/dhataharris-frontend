"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, LogOut, User, Settings, Shield, FileText } from "lucide-react"

interface UserProfileMenuProps {
  userData: {
    id: number
    email: string
    full_name: string
    profile_pic: string
    occupation: string | null
    mobile_no: string | null
    location: string | null
    is_verified: boolean
    date_joined: string
    updated_at: string
  }
}

export default function UserProfileMenu({ userData }: UserProfileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setIsSettingsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...")
    // Example: router.push('/sign-in');
  }

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 focus:outline-none">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
          <Image
            src={userData.profile_pic || "/placeholder.svg?height=40&width=40"}
            alt={userData.full_name}
            fill
            className="object-cover"
          />
        </div>
        <span className="hidden md:inline text-sm font-medium">{userData.full_name}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-[#760C2A] text-white rounded-lg shadow-lg overflow-hidden z-50">
          <div className="p-4 border-b border-[#8A2D45]">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={userData.profile_pic || "/placeholder.svg?height=48&width=48"}
                  alt={userData.full_name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{userData.full_name}</h3>
                <p className="text-sm opacity-80">{userData.email}</p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <Link
              href="/profile"
              className="flex items-center px-4 py-3 hover:bg-[#8A2D45] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <User className="w-5 h-5 mr-3" />
              <span>My Profile</span>
            </Link>

            <button
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#8A2D45] transition-colors"
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            >
              <div className="flex items-center">
                <Settings className="w-5 h-5 mr-3" />
                <span>Settings</span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform ${isSettingsOpen ? "rotate-180" : ""}`} />
            </button>

            <Link
              href="/privacy-policy"
              className="flex items-center px-4 py-3 hover:bg-[#8A2D45] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="w-5 h-5 mr-3" />
              <span>Privacy & Policy</span>
            </Link>

            <Link
              href="/trust-safety"
              className="flex items-center px-4 py-3 hover:bg-[#8A2D45] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Shield className="w-5 h-5 mr-3" />
              <span>Trust & Safety</span>
            </Link>

            <Link
              href="/terms"
              className="flex items-center px-4 py-3 hover:bg-[#8A2D45] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="w-5 h-5 mr-3" />
              <span>Terms & Conditions</span>
            </Link>

            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-3 hover:bg-[#8A2D45] transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
