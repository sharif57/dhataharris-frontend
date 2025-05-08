"use client"
import Link from "next/link"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-6 mt-12">
        <Link href="/" className="text-xl text-gray-700 hover:text-gray-900" onClick={onClose}>
          Home
        </Link>
        <Link href="/news" className="text-xl text-gray-700 hover:text-gray-900" onClick={onClose}>
          News
        </Link>
        <Link href="/donation" className="text-xl text-gray-700 hover:text-gray-900" onClick={onClose}>
          Donation
        </Link>
        <Link href="/user-story" className="text-xl text-gray-700 hover:text-gray-900" onClick={onClose}>
          User Story
        </Link>
        <Link href="/sign-in" className="text-xl text-gray-700 hover:text-gray-900" onClick={onClose}>
          Sign In
        </Link>
        <Link
          href="/donate"
          className="bg-[#8B1D3F] text-white px-6 py-3 rounded-md flex items-center text-xl mt-4"
          onClick={onClose}
        >
          Donate <span className="ml-1">❤</span>
        </Link>
      </nav>
    </div>
  )
}
