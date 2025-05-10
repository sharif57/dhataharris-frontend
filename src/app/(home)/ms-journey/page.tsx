import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-white px-4">
      <section className="w-full pt-16 py-12 md:py-10 mt ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center ">
            {/* Journey Text Content */}
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] leading-tight">
                Dhata Harris: My MS Journey—Illness,{" "}
                <span className="text-[#760C2A]"> and Recovery </span>
              </h2>

              <div className="space-y-4 text-[#2D3748] text-base leading-relaxed">
                <p>
                  Hello, I’m Dhata Harris. What you’re about to read is the true
                  story of how my battle with Multiple Sclerosis (MS)
                  unfolded—and how a combination of infections, surgical
                  interventions, and environmental exposures shaped both my
                  illness and my recovery.
                </p>

                <p>
                  My goal is to help others better understand how MS may emerge
                  from complex, interwoven causes—and to offer hope and
                  direction for those still searching for answers.{" "}
                </p>
              </div>
            </div>

            {/* Medical Chart Image */}
            <div className="w-full mx-auto md:mx-0 md:ml-auto order-1 md:order-2 ">
              <div className="rounded-lg overflow-hidden ">
                <Image
                  src="/doctor.jpg"
                  alt="MS Vertebral Symptom Correlation Chart"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-16 items-center  mt-[100px]">
            {/* Medical Chart Image */}
            <div className="w-full mx-auto md:mx-0 md:ml-auto order-2 md:order-1">
              <div className="rounded-lg overflow-hidden ">
                <Image
                  src="/doctor1.png"
                  alt="MS Vertebral Symptom Correlation Chart"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Journey Text Content */}
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] leading-tight">
                A Life of Health Challenges Before MS
                <span className="text-[#760C2A]"> Before MS </span>(1975–2004)
              </h2>

              <ul className="space-y-4 list-disc text-[#2D3748] text-base leading-relaxed">
                <li>
                  I was born in 1975 with a heart murmur and later diagnosed
                  with an enlarged heart and inverted T-waves at age 17.
                </li>

                <li>
                  At 24, during my time in the military, I received five
                  vaccines via experimental jet injector. Soon after, I began
                  experiencing fatigue and shortness of breath during physical
                  fitness tests.
                </li>
                <li>
                  In 2003, a major clue emerged—my aunt on my mother’s side was
                  diagnosed with MS.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-[100px]">
            {/* Journey Text Content */}
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] leading-tight">
                The First Symptoms and a Silent
                <span className="text-[#760C2A]"> Immune Collapse </span>{" "}
                (2005–2007)
              </h2>

              <ul className="space-y-4 list-disc text-[#2D3748] text-base leading-relaxed">
                <li>
                  In 2005, at age 27, I suffered from unexplained numbness,
                  tingling in my limbs, and urinary urgency. Doctors first
                  believed these symptoms might be caused by spider bites. I
                  experienced repeated insect bites in 2005 and again in 2007,
                  which always seemed to coincide with my neurological symptoms.
                </li>

                <li>
                  Around this time, my body was also beginning to show signs of
                  deeper immune dysfunction.
                </li>
              </ul>
            </div>

            {/* Medical Chart Image */}
            <div className="w-full mx-auto md:mx-0 md:ml-auto order-1 md:order-2 ">
              <div className="rounded-lg overflow-hidden ">
                <Image
                  src="/doctor2.png"
                  alt="MS Vertebral Symptom Correlation Chart"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-16 items-center  mt-[100px]">
            {/* Medical Chart Image */}
            <div className="w-full mx-auto md:mx-0 md:ml-auto order-2 md:order-1">
              <div className="rounded-lg overflow-hidden ">
                <Image
                  src="/doctor3.png"
                  alt="MS Vertebral Symptom Correlation Chart"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Journey Text Content */}
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] leading-tight">
                MS Diagnosis
                <span className="text-[#760C2A]"> Confirmed </span>(2008–2009)
              </h2>

              <ul className="space-y-4 list-disc text-[#2D3748] text-base leading-relaxed">
                <li>
                  In 2008, numbness returned and an MRI revealed lesions typical
                  of MS. A spinal tap later confirmed the diagnosis.
                </li>

                <li>
                  I began treatment with a disease-modifying drug (Copaxone) in
                  early 2009.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-[100px]">
            {/* Journey Text Content */}
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] leading-tight">
                Infections, Tooth Loss, and a
                <span className="text-[#760C2A]"> Declining Body </span>{" "}
                (2010–2011) (2005–2007)
              </h2>

              <ul className="space-y-4 list-disc text-[#2D3748] text-base leading-relaxed">
                <li>
                  My immune system was deteriorating. I developed aggressive
                  periodontal disease, traced back to Candida and H. pylori
                  infections..
                </li>

                <li>
                  These infections traveled to my trigeminal nerve, triggering
                  neuralgia and bone loss in my mouth. I had to undergo
                  extensive dental extractions and implant surgeries.
                </li>
                <li>
                  In 2011, I had my anergy panel tested—it showed almost no
                  immune response to Candida. My body couldn’t recognize or
                  fight the fungus, pointing to a critically suppressed immune
                  system.
                </li>
              </ul>
            </div>

            {/* Medical Chart Image */}
            <div className="w-full mx-auto md:mx-0 md:ml-auto order-1 md:order-2 ">
              <div className="rounded-lg overflow-hidden ">
                <Image
                  src="/doctor4.jpg"
                  alt="MS Vertebral Symptom Correlation Chart"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-16 items-center  mt-[100px]">
            {/* Medical Chart Image */}
            <div className="w-full mx-auto md:mx-0 md:ml-auto order-2 md:order-1">
              <div className="rounded-lg overflow-hidden ">
                <Image
                  src="/doctor3.png"
                  alt="MS Vertebral Symptom Correlation Chart"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Journey Text Content */}
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] leading-tight">
                Gastric Sleeve Surgery and
                <span className="text-[#760C2A]"> MS Remission </span>
                (2017–Present)
              </h2>

              <ul className="space-y-4 list-disc text-[#2D3748] text-base leading-relaxed">
                <li>
                  In 2017, I underwent gastric sleeve surgery to address
                  obesity. Unexpectedly, something remarkable happened:
                </li>
                <p className="text-[20px] font-normal text-[#2C383C]">
                  {" "}
                  My MS symptoms vanished.
                </p>

                <li>No relapses.</li>
                <li>No fatigue, weakness, or tingling.</li>
                <li>My cognition sharpened.To this day, I’ve remained symptom-free for over 8 years.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
