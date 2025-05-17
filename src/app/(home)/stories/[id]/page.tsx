/* eslint-disable @next/next/no-img-element */
'use client'
/* eslint-disable react/no-unescaped-entities */
import { useStoryDetailsQuery } from "@/redux/feature/storySlice";
import { useParams } from "next/navigation";

export default function DoctorProfilePage() {
  const params = useParams()
    const id = params?.id;

  const {data} = useStoryDetailsQuery(id)
  console.log(data , "data");
  return (
    <main className="min-h-screen bg-[#ffeff3] flex items-center justify-center p-4 md:p-8 text-justify">
      <div className="bg-white rounded-3xl shadow-md max-w-5xl w-full p-6 md:p-8">
        <div className="">
          {/* Profile Image */}
          <div className="lg:flex  items-center gap-6 ">
            <img
              src={data?.image}
              alt="Dr. Jane Nicholson"
              width={96}
              height={96}
              className="rounded-full w-20 h-20 sm:w-24 sm:h-24 relative mx-auto sm:mx-0 object-cover"
              
            />
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 text-center sm:text-left">
                {data?.author_name}
              </h1>
              <p className="text-[#566063] mb-4 text-lg  text-center sm:text-left">
                {data?.title}
              </p>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="flex-1 mt-8 w-full sm:w-auto">
            <p className="text-[#2C383C] text-[16px] font-normal leading-relaxed">
             {data?.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
