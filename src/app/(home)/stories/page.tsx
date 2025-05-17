/* eslint-disable @next/next/no-img-element */
// "use client";

// import Image from "next/image";
// import Link from "next/link";

// // Story card component
// const StoryCard = ({
//   imageSrc,
//   name = "Dr. Jane Nicholson",
//   title = "Leading Diagnostic Doctor",
//   id, // Add id prop
// }: {
//   imageSrc: string;
//   name?: string;
//   title?: string;
//   id: number; // Add id type
// }) => (
//   <Link href={`/stories/${id}`} className="bg-white rounded-3xl p-4 shadow-sm">
//     <div className="flex flex-col items-start">
//       <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mb-3">
//         <Image
//           src={imageSrc || "/placeholder.svg"}
//           alt={name}
//           width={64}
//           height={64}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <h3 className="font-semibold text-[#2D3748] text-[24px]">{name}</h3>
//       <p className="text-[#566063] text-sm mb-2">{title}</p>
//       <p className="text-[#4A5568] text-xs leading-relaxed mb-2">
//         I was 29, chasing dreams and designing a future I could touch with my
//         own hands, when everything changed. It started with a strange numbness
//         in my fingers, then a crushing fatigue that no amount of sleep could
//         cure...more
//       </p>
//       {/* <Link href={`/stories/${id}`} className="text-xs text-[#8B1D3F] hover:underline">
//         more
//       </Link> */}
//     </div>
//   </Link>
// );

// export default function StoriesSection() {
//   // Sample stories data with IDs
//   const stories = [
//     { id: 1, image: "/user.png" },
//     { id: 2, image: "/user.png" },
//     { id: 3, image: "/user.png" },
//     { id: 4, image: "/user.png" },
//     { id: 5, image: "/user.png" },
//     { id: 6, image: "/user.png" },
//   ];

//   return (
//     <section className="w-full bg-[#FFEFF3] py-12">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="lg:text-[48px] text-2xl font-bold text-[#2D3748]">
//             Other&lsquo;s Stories
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
//           {stories.map((story) => (
//             <StoryCard
//               key={story.id}
//               imageSrc={story.image}
//               id={story.id}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
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
      <h3 className="font-semibold text-[#2D3748] text-[24px]">{name}</h3>
      <p className="text-[#566063] text-sm mb-2">{title}</p>
      <p className="text-[#4A5568] text-xs leading-relaxed mb-2">
        {description}
      </p>
    </div>
  </Link>
);

export default function StoriesSection() {
  const { data, isLoading, isError } = useStoryGetQuery(undefined);

  return (
    <section className="w-full bg-[#FFEFF3] py-12 text-justify">
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
            {data && data.length > 0 ? (
              data.map((story: Story) => (
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
