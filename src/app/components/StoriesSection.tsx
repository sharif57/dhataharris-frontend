"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Plus, ArrowRight } from "lucide-react"
import CreateBlogModal from "./CreateBlogModal"

// Story card component
const StoryCard = ({
  imageSrc,
  name = "Dr. Jane Nicholson",
  title = "Leading Diagnostic Doctor",
}: {
  imageSrc: string
  name?: string
  title?: string
}) => (
  <div className="bg-white rounded-2xl p-4 shadow-sm">
    <div className="flex flex-col items-start">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mb-3">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-[#2D3748] text-[24px]">{name}</h3>
      <p className="text-[#566063] text-sm mb-2">{title}</p>
      <p className="text-[#4A5568] text-xs leading-relaxed mb-2">
      I was 29, chasing dreams and designing a future I could touch with my own hands, when everything changed. It started with a strange numbness in my fingers, then a crushing fatigue that no amount of sleep could cure...more
      </p>
      <Link href="#" className="text-xs text-[#8B1D3F] hover:underline">
        more
      </Link>
    </div>
  </div>
)

export default function StoriesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Sample profile images
  const profiles = [
    "/user.png",
    "/user.png",
    "/user.png",
    "/user.png",
    "/user.png",
    "/user.png",
  ]

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isModalOpen])

  return (
    <section className="w-full bg-[#FFEFF3] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="lg:text-[48px] text-2xl font-bold text-[#2D3748]">Other&lsquo;s Stories</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={openModal}
              className="w-8 h-8 rounded-full  bg-[#2C383C] flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              aria-label="Add story"
            >
              <Plus className="h-5 w-5 text-white " />
            </button>
            <Link
              href="/stories"
              className="flex border border-[#2D3748] items-center text-sm text-[#2D3748] ] rounded-full px-4 py-2 hover:bg-[#2D3748] hover:text-white transition-colors"
            >
              See All Stories <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {profiles.map((profile, index) => (
            <StoryCard key={index} imageSrc={profile} />
          ))}
        </div>
      </div>

      <CreateBlogModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
