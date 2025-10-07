/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useBlogsGetQuery } from "@/redux/feature/blogSlice";

interface NewsArticle {
  id: number;
  title: string;
  image: string;
  author_name: string;
  description: string;
}

export default function MSNewsSection() {
  const pathname = usePathname();
  const { data } = useBlogsGetQuery(undefined);
  console.log(data, "blogs");

  // News article data

  return (
    <section className="w-full bg-[#fff3f6] py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-14">
          <h2 className="text-xl md:text-5xl font-bold text-[#0f172a]">
            Latest MS news and stories
          </h2>
          {pathname !== "/news" && ( // Conditionally render the button
            <Link
              href="/news"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              See All our news
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {data?.data?.slice(0, 6).map((article: NewsArticle) => (
            <Link href={`/news/${article?.id}`} key={article?.id} >
              <article key={article?.id} className="overflow-hidden">
                <div className="aspect-[4/3] relative p-4">
                  <img
                    src={article?.image || "/placeholder.svg"}
                    alt={article?.title}
                    // fill
                    className="object-cover rounded-2xl h-[300px]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-2xl mb-2 text-[#2C383C] underline ">
                    {article?.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-snug font-normal">
                    {article?.description.slice(0, 200)}...
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
