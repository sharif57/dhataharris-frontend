
/* eslint-disable @next/next/no-img-element */
"use client";

import { useSeriesGetQuery } from "@/redux/feature/seriesSlice";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SeriesItem {
  id: number;
  title: string;
  video_url: string;
  author_name: string;
  description: string;
}

const getEmbedUrl = (url: string) => {
  try {
    if (url.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("watch?v=")) {
      const videoId = url.split("watch?v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else {
      return url;
    }
  } catch {
    return url;
  }
};

export default function Series() {
  const pathname = usePathname();

  const { data } = useSeriesGetQuery(undefined);

  return (
    <section className="w-full bg-[#fff3f6] py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-14">
          <h2 className="text-xl md:text-5xl font-bold text-[#0f172a]">
            Your Youtube Series
          </h2>

          {pathname !== "/news" && (
            <Link
              href="/series"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              See All Our Series
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.data?.slice(0, 3).map((video: SeriesItem) => (
            <Link href={`/series/${video.id}`} key={video.id}>
              <article className="overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video relative">
                  <iframe
                    src={getEmbedUrl(video.video_url)}
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
