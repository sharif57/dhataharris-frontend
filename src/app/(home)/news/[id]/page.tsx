/* eslint-disable @next/next/no-img-element */
"use client";
import { useBlogsDetailsQuery } from "@/redux/feature/blogSlice";
import { useParams } from "next/navigation";

export default function MSArticlePage() {
  const params = useParams();
  const id = params?.id;
  const { data } = useBlogsDetailsQuery(id);
  console.log(data, "data");
  return (
    <div className="bg-[#f9f9f9] px-4 md:px-6">
      <main className="min-h-screen  max-w-6xl mx-auto pt-10">
        {/* Header Image */}
        <div className="relative w-full h-[200px] md:h-[440px] rounded-3xl overflow-hidden ">
          <img
            src={data?.image}
            alt="Doctor attending to patient"
            className="object-cover  rounded-3xl w-full"
          />
        </div>

        {/* Article Content */}
        <div className=" py-4 text-justify">
          <h1 className="text-xl md:text-4xl font-semibold underline text-gray-900 mb-4">
            {data?.title}
          </h1>

          <div className="space-y-4 text-gray-800 text-sm md:text-base">
            <p>{data?.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
