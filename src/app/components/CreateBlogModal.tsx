"use client";

import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import ImageUpload from "./ImageUploadProps";

interface CreateBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateBlogModal({
  isOpen,
  onClose,
}: CreateBlogModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("Please add a title");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Handle form submission with image upload
      if (image) {
        console.log("Uploading image:", image.name);
        // In a real app, you would upload the image to a server or cloud storage
        // const formData = new FormData()
        // formData.append("image", image)
        // formData.append("title", title)
        // formData.append("content", content)
        // const response = await fetch("/api/blogs", { method: "POST", body: formData })
      }

      console.log("Form submitted:", { title, content, image: image?.name });

      // Reset form and close modal
      setTitle("");
      setContent("");
      setImage(null);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`bg-white rounded-lg w-full max-w-md overflow-hidden transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              disabled={isSubmitting}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h2 className="text-[20px] text-[#2C383C] font-medium text-center flex-1">
              Create Blog
            </h2>
          </div>
          <button
            className={`bg-[#760C2A] text-white px-4 py-2 rounded text-sm ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-[#7A1935] transition-colors"
            }`}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Image Upload */}
          <ImageUpload onChange={setImage} value={image} />

          {/* Title Input */}
          <div className="space-y-2">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add a title"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1D3F]/20 focus:border-[#8B1D3F]"
              disabled={isSubmitting}
            />
          </div>

          {/* Content Textarea */}
          <div className="space-y-2">
            <p className="text-xs text-gray-500">Writing Your Experience</p>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your experience..."
              rows={5}
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1D3F]/20 focus:border-[#8B1D3F] resize-none"
              disabled={isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
