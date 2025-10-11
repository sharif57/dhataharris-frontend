/* eslint-disable @next/next/no-img-element */

"use client";

import Link from "next/link";
import { useStoryGetQuery } from "@/redux/feature/storySlice";

interface Story {
  id: number;
  image: string;
  author_name: string;
  title: string;
  description: string;
}

// Story card component
const StoryCard = ({
  imageSrc,
  name = "Unknown Author",
  title = "Untitled Story",
  description = "",
  id = "1",
}: {
  imageSrc: string;
  name?: string;
  title?: string;
  description?: string;
  id?: string;
}) => (
  <Link
    href={`/stories/${id}`}
    className="bg-white rounded-2xl p-4 shadow-sm text-justify"
  >
    <div className="flex flex-col items-start">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mb-3">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-[#2D3748] text-[24px]">{title}</h3>
      <p className="text-[#566063] text-sm mb-2">{name}</p>
      <p className="text-[#4A5568] text-xs leading-relaxed mb-2">
        {description}
      </p>
    </div>
  </Link>
);

export default function StoriesSection() {
  const { data, isLoading, isError } = useStoryGetQuery(undefined);

  return (
    <section className="w-full bg-[#FFEFF3] py-12 text-justify min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="lg:text-[48px] text-2xl font-bold text-[#2D3748]">
            Other&lsquo;s Stories
          </h2>
        </div>
        {isLoading ? (
          <p>Loading stories...</p>
        ) : isError ? (
          <p>Error fetching stories. Please try again later.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data && data?.data?.length > 0 ? (
              data?.data.map((story: Story) => (
                <StoryCard
                  key={story.id}
                  id={story.id.toString()}
                  imageSrc={story.image || "/placeholder.svg"}
                  name={story.author_name}
                  title={story.title}
                  description={story.description}
                />
              ))
            ) : (
              <p>No stories available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
