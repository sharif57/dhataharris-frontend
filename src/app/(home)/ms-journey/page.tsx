import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-white px-4 text-justify">
      <section className="w-full  py-8  mt ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* <embed
            // src="/Novel therapies in MS Treatments Final (1) (1).pdf"
            src="/pdf2.pdf"
            type="application/pdf"
            className="w-full h-[1000px] "
          /> */}

          {/* <iframe
            src="/pdf2.pdf#toolbar=0&navpanes=0&scrollbar=0"
            className="w-full h-[1000px]"
          ></iframe> */}


          <div className="grid grid-cols-1 mt-12 md:grid-cols-2 gap-16 items-center ">
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
                  // src="/doctor.jpg"
                  src="/image/Graphic 1.png"
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
                  // src="/doctor1.png"
                  src="/image/Health Challenges Infographic.png"
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
                A Life of Health Challenges
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
                  // src="/doctor2.png"
                  src="/image/MS Symptoms.png"
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
                  // src="/doctor3.png"
                  src="/image/Myelin.png"
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
                {/* <li>
                  In 2011, I had my anergy panel tested—it showed almost no
                  immune response to Candida. My body couldn’t recognize or
                  fight the fungus, pointing to a critically suppressed immune
                  system.
                </li> */}
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
                  // src="/doctor3.png"
                  src="/image/Unwanted.jpg"
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
                <li>
                  My cognition sharpened.To this day, I’ve remained symptom-free
                  for over 8 years.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-[100px]">
            {/* Journey Text Content */}
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] leading-tight">
                A Turning Point: Dental Implants  
                <span className="text-[#760C2A]"> and Symptom Relief</span>{" "}
                (2012)
              </h2>

              <ul className="space-y-4 list-disc text-[#2D3748] text-base leading-relaxed">
                <li>
                  In 2012, after receiving dental implants, my brain fog and numbness lifted almost immediately. I began to suspect that infections in the mouth and jaw—especially involving Candida and H. pylori—might have been key players in my disease.
                </li>
              </ul>
            </div>

            {/* Medical Chart Image */}
            <div className="w-full mx-auto md:mx-0 md:ml-auto order-1 md:order-2 ">
              <div className="rounded-lg overflow-hidden ">
                <Image
                  src="/image/Graphic 3.png"
                  alt="MS Vertebral Symptom Correlation Chart"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="mt-[100px]">
            <main className=" py-8  md:py-12   ">
              {/* Important Clues and Questions */}
              <section className="mb-16">
                <h2 className="text-2xl md:text-[40px] font-bold mb-4">
                  Important Clues and Questions{" "}
                  <span className="text-[#760C2A]">for Researchers</span>
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Could Candida and H. pylori infections be early triggers for
                    MS?
                  </li>
                  <li>
                    How does infection of the vagus or trigeminal nerve affect
                    neurodegeneration?
                  </li>
                  <li>
                    Why did surgery bring remission—and could it help others?
                  </li>
                  <li>
                    What is the role of gadolinium (a fungal toxin I tested
                    positive for) in mimicking MS symptoms?
                  </li>
                </ul>
              </section>

              {/* Key Documents Available */}
              {/* <section className="mb-16">
                <h2 className="text-2xl md:text-[40px] font-bold mb-4">
                  Key Documents Available{" "}
                  <span className="text-[#760C2A]">for Review</span>
                </h2>
                <p className="mb-4">
                  You&#39;ll find some of my medical records and testing results
                  here as evidence, including:
                </p>

                <ul className="list-disc pl-10 space-y-2">
                  <li>
                    Allergy panel results showing suppressed immune response to
                    Candida
                    <ul className="list-disc pl-6 mt-1">
                      <li>
                        Neurologist&lsquo;s letter confirming MS onset in 2005
                      </li>
                      <li>MRI and spinal tap confirming MS</li>
                      <li>
                        Timeline of events including dental surgery and gastric
                        sleeve
                      </li>
                      <li>
                        H. pylori and Candida-related medical literature that
                        supports my case
                      </li>
                    </ul>
                  </li>
                </ul>
              </section> */}

              {/* Conclusion */}
              <section>
                <h2 className="text-2xl md:text-[40px] font-bold mb-4">
                  Conclusion: A Personal Journey{" "}
                  <span className="text-[#760C2A]">With a Purpose</span>
                </h2>
                <p className="mb-4">
                  My story isn&#39;t just about me—it&#39;s about helping others
                  with MS or similar symptoms recognize the full picture.
                  <br />
                  MS isn&lsquo;t always just genetic. It can be triggered or
                  worsened by:
                </p>

                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Infections</li>
                  <li>Environmental toxins like mold and gliotoxin</li>
                  <li>Poor gut health</li>
                  <li>Immune suppression or overactivation</li>
                </ul>

                <p className="mb-4">
                  If we map the different ways people arrive at MS, we may one
                  day offer truly personalized and effective treatments.
                  <br />
                  Let&lsquo;s uncover those patterns—together.
                </p>
              </section>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
