import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function MSNewsSection() {
  // News article data
  const newsArticles = [
    {
      id: 1,
      image: "/image1.png",
      title: "What Does The 2025 Spring Statement Mean For People MS?",
      content:
        "Key Proposals Include Tightening Eligibility Criteria For Personal Independence Payment (PIP) From November 2024. Claimants Will Need To Score At Least Four Points On A Single Daily Living Activity To Qualify For The Daily Living Component, Potentially Reducing Support For Those With Fluctuating Conditions Like MS.",
    },
    {
      id: 2,
      image: "/image1.png",
      title: "What Does The 2025 Spring Statement Mean For People MS?",
      content:
        "Key Proposals Include Tightening Eligibility Criteria For Personal Independence Payment (PIP) From November 2024. Claimants Will Need To Score At Least Four Points On A Single Daily Living Activity To Qualify For The Daily Living Component, Potentially Reducing Support For Those With Fluctuating Conditions Like MS.",
    },
    {
      id: 3,
      image: "/image1.png",
      title: "What Does The 2025 Spring Statement Mean For People MS?",
      content:
        "Key Proposals Include Tightening Eligibility Criteria For Personal Independence Payment (PIP) From November 2024. Claimants Will Need To Score At Least Four Points On A Single Daily Living Activity To Qualify For The Daily Living Component, Potentially Reducing Support For Those With Fluctuating Conditions Like MS.",
    },
    {
      id: 4,
      image: "/image1.png",
      title: "What Does The 2025 Spring Statement Mean For People MS?",
      content:
        "Key Proposals Include Tightening Eligibility Criteria For Personal Independence Payment (PIP) From November 2024. Claimants Will Need To Score At Least Four Points On A Single Daily Living Activity To Qualify For The Daily Living Component, Potentially Reducing Support For Those With Fluctuating Conditions Like MS.",
    },
    {
      id: 5,
      image: "/image1.png",
      title: "What Does The 2025 Spring Statement Mean For People MS?",
      content:
        "Key Proposals Include Tightening Eligibility Criteria For Personal Independence Payment (PIP) From November 2024. Claimants Will Need To Score At Least Four Points On A Single Daily Living Activity To Qualify For The Daily Living Component, Potentially Reducing Support For Those With Fluctuating Conditions Like MS.",
    },
    {
      id: 6,
      image: "/image1.png",
      title: "What Does The 2025 Spring Statement Mean For People MS?",
      content:
        "Key Proposals Include Tightening Eligibility Criteria For Personal Independence Payment (PIP) From November 2024. Claimants Will Need To Score At Least Four Points On A Single Daily Living Activity To Qualify For The Daily Living Component, Potentially Reducing Support For Those With Fluctuating Conditions Like MS.",
    },
  ]

  return (
    <section className="w-full bg-[#fff3f6] py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-14">
          <h2 className="text-xl md:text-5xl font-bold text-[#0f172a]">Latest MS news and stories</h2>
          <Link
            href="/news"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            See All our news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article key={article.id} className="overflow-hidden">
              <div className="aspect-[4/3] relative p-4">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-2xl mb-2 text-[#2C383C] underline ">{article.title}</h3>
                <p className="text-sm text-gray-700 leading-snug font-normal">{article.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
