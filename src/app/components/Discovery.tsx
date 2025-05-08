// import React from 'react'

// export default function Discovery() {
//   return (
//     <div>Discovery</div>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Discovery() {
  const [, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="w-full mt-16 py-12 md:py-16 mt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Journey Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] leading-tight">
              Dhata Harris: My MS Journey—Illness, <span className="text-[#760C2A]">Discovery</span>, And Recovery
            </h2>

            <div className="space-y-4 text-[#2D3748] text-base leading-relaxed">
              <p>
                Upon diagnosis, I was never accepting of the fact that I had a disease with no known cause or cure.
                There was &#34;something&ldquo; that was killing me that came from &ldquo;somewhere&#34;. As a career Internal Auditor, my
                analytical mind is geared towards identifying the root cause of &#34;everything&ldquo;, so I accepted the
                challenge to audit MS. A diagnosis is like an audit finding. As part of our profession, we use the 5 C&#39;s
                to document a finding.
              </p>

              <p>Criteria: What is the expectation? Think about a speed limit.</p>

              <p>Condition: What was found versus the expectation. Think about going above the posted speed limit.</p>
            </div>

            <Link
              href="/ms-journey"
              className="inline-flex items-center text-[#2D3748] font-medium hover:text-[#8B1D3F] transition-colors"
            >
              See More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Medical Chart Image */}
          <div className="w-full mx-auto md:mx-0 md:ml-auto order-1 md:order-2">
            <div className="rounded-lg overflow-hidden ">
              <Image
                src="/discover.png"
                alt="MS Vertebral Symptom Correlation Chart"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
