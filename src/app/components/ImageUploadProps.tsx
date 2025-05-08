"use client";

import type React from "react";

import { useState, useRef, useCallback } from "react";
import { ImageIcon, Upload, X } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  onChange: (file: File | null) => void;
  value: File | null;
}

export default function ImageUpload({ onChange }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFile = useCallback(
    (file: File | null) => {
      setError(null);

      if (!file) {
        onChange(null);
        setPreview(null);
        return;
      }

      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
      if (!validTypes.includes(file.type)) {
        setError("Please upload a valid image file (JPEG, PNG, GIF, WEBP)");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size should be less than 5MB");
        return;
      }

      // Create preview URL
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      onChange(file);

      // Clean up preview URL when component unmounts
      return () => URL.revokeObjectURL(objectUrl);
    },
    [onChange]
  );

  // Handle file input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  // Handle drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle drop event
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  // Trigger file input click
  const onButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // Remove selected image
  const removeImage = () => {
    onChange(null);
    setPreview(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="w-full">
      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/gif,image/webp"
        onChange={handleChange}
        className="hidden"
      />

      {/* Upload area */}
      <div
        className={`relative border ${
          dragActive ? "border-[#8B1D3F] bg-[#8B1D3F]/5" : "border-gray-300"
        } ${
          preview ? "" : "border-dashed"
        } rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 transition-colors duration-200 min-h-[180px]`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {/* Preview image */}
        {preview ? (
          <div className="relative w-full h-[180px]">
            <Image
              src={preview || "/placeholder.svg"}
              alt="Preview"
              fill
              className="object-contain rounded"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
            >
              <X className="h-4 w-4 text-gray-700" />
            </button>
          </div>
        ) : (
          <>
            <div className="mb-3 p-3 bg-gray-100 rounded-full">
              <ImageIcon className="h-6 w-6 text-gray-400" />
            </div>
            <p className="text-sm text-gray-500 mb-2 text-center">
              Drag and drop your image here
            </p>
            <p className="text-xs text-gray-400 mb-3 text-center">
              Supports JPEG, PNG, GIF, WEBP (max 5MB)
            </p>
            <button
              type="button"
              onClick={onButtonClick}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload Image
            </button>
          </>
        )}
      </div>

      {/* Error message */}
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </div>
  );
}
