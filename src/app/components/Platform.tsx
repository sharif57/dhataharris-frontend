import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Platform() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20  mt-14">
      <div className="">
        <div className="lg:flex justify-between gap- items-center">
          {/* Founder Image */}
          <div className="lg:w-2/5 md:mx-0">
            <div className="rounded-2xl overflow-hidden ">
              <Image
                src="/men.png"
                alt="Dhata Harris, Founder"
                width={500}
                height={500}
                className=" w-[511px]  h-[477px] object-cover"
              />
            </div>
          </div>

          {/* Founder Story */}
          <div className="space-y-4 lg:w-3/5 mt-10 lg:mt-0">
            <h2 className="text-5xl font-roboto font-bold text-[#2C383C]">
              Face behind this <span className="text-[#760C2A]">platform</span>
            </h2>

            <div className="space-y-4 text-[#2D3748] text-base   leading-relaxed text-justify">
              <p className="capitalize">
                My Name Is Dhata Harris. I Am The Founder Of The Enitiative
                Group Inc., An Atlanta-Based Nonprofit On A Mission To Eradicate
                Multiple Sclerosis (MS) From The World In Our Lifetime. I Was
                Diagnosed With MS In November Of 2008 After A 3 Year Odyssey Of
                Medical Specialists&lsquo; Visits And Opinions. While
                Eradicating A Disability That Was Discovered In 1868 May Sound
                Like A Lofty And Idyllic Goal, I Am Happy To Say That I&apos;ve
                Been Free Of Relapsing Remitting Multiple Sclerosis For 8 Years
                Now. I Am Not A Doctor, But Identify As A Disruptor.
              </p>
              <p className="capitalize">
                At The End Of 2004, I Failed The Run Element Of An Army Physical
                Fitness Test (APFT). I Had Maxed Out My Push-Ups And Sit-Ups,
                But In The Last Two Laps Of The 2-Mile Run, My Legs Refused To
                Propel Me Across The Finish Line By The Designated Time For A
                Passing Score. Not That I&#39;ve Ever Enjoyed The Run, But This
                Was The First Time My Body Had Completely Refused My Commands.
                After Taking The Retest In Early 2005, The Exact Same Thing
                Happened. I Immediately Went To My Primary Care Physician And
                Started Documenting The Onset Of Debilitating Symptoms Including
                Numbness, Tingling, Balance And Coordination Loss, And The Most
                Perilous To My Gainful Employment, &rdquo;Brain Fog.&ldquo;
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-[#2D3748] font-medium hover:text-[#8B1D3F] transition-colors"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
