/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

interface SeriesItem {
  id: number;
  title: string;
  videoUrl: string;
  author_name: string;
  description: string;
}

export default function Series() {
  const pathname = usePathname();

  // ✅ Local JSON Data
  const data: SeriesItem[] = [
    {
      id: 1,
      title: "React Basics Tutorial",
      videoUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      author_name: "Sharif Mahamud",
      description:
        "Learn the fundamentals of React.js in this beginner-friendly tutorial. We’ll cover components, props, and state to get you started building modern web apps.",
    },
    {
      id: 2,
      title: "Next.js Full Course",
      videoUrl: "https://www.youtube.com/embed/1WmNXEVia8I",
      author_name: "Sharif Mahamud",
      description:
        "A complete Next.js crash course covering routing, data fetching, and deployment. Perfect for developers who want to master SSR and SSG.",
    },
    {
      id: 3,
      title: "Tailwind CSS Crash Course",
      videoUrl: "https://www.youtube.com/embed/dFgzHOX84xQ",
      author_name: "Sharif Mahamud",
      description:
        "In this video, you’ll learn Tailwind CSS from scratch and understand how to design fast, responsive UIs without leaving your HTML.",
    },
    {
      id: 3,
      title: "Tailwind CSS Crash Course",
      videoUrl: "https://www.youtube.com/embed/dFgzHOX84xQ",
      author_name: "Sharif Mahamud",
      description:
        "In this video, you’ll learn Tailwind CSS from scratch and understand how to design fast, responsive UIs without leaving your HTML.",
    },
    {
      id: 3,
      title: "Tailwind CSS Crash Course",
      videoUrl: "https://www.youtube.com/embed/dFgzHOX84xQ",
      author_name: "Sharif Mahamud",
      description:
        "In this video, you’ll learn Tailwind CSS from scratch and understand how to design fast, responsive UIs without leaving your HTML.",
    },
    {
      id: 3,
      title: "Tailwind CSS Crash Course",
      videoUrl: "https://www.youtube.com/embed/dFgzHOX84xQ",
      author_name: "Sharif Mahamud",
      description:
        "In this video, you’ll learn Tailwind CSS from scratch and understand how to design fast, responsive UIs without leaving your HTML.",
    },
    {
      id: 3,
      title: "Tailwind CSS Crash Course",
      videoUrl: "https://www.youtube.com/embed/dFgzHOX84xQ",
      author_name: "Sharif Mahamud",
      description:
        "In this video, you’ll learn Tailwind CSS from scratch and understand how to design fast, responsive UIs without leaving your HTML.",
    },
  ];

  return (
    <section className="w-full bg-[#fff3f6] py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-14">
          <h2 className="text-xl md:text-5xl font-bold text-[#0f172a]">
            Your Youtube Series
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((video) => (
            <Link href={`/news/${video.id}`} key={video.id}>
              <article className="overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
                {/* ✅ YouTube Video Embed */}
                <div className="aspect-video relative">
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-t-2xl"
                  ></iframe>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-2xl mb-2 text-[#2C383C] underline">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-snug font-normal">
                    {video.description.slice(0, 200)}...
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
