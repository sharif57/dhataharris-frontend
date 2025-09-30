import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#ffeff3] py-16">
      <div className="container mx-auto lg:px-10  px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="/men1.png"
              alt="Profile photo of Dhata Harris"
              width={400}
              height={400}
              className="object-cover rounded-lg lg:h-[600px] w-full"
              priority
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#2C383C] mb-4">
              About Me - <span className="text-[#760C2A]">Dhata Harris</span>
            </h1>

            <div className="space-y-4 text-sm md:text-xl text-[#2C383C] font-normal text-justify">
              <p className="lowercase">
                My name is Dhata Harris. I am the founder of The Enitiative
                Group Inc., an Atlanta-based nonprofit on a mission to eradicate
                Multiple Sclerosis (MS) from the world in our lifetime. I was
                diagnosed with MS in November of 2008 after a 3 year odyssey of 
                medical specialists’ visits and opinions. While eradicating a
                disability that was discovered in 1868 may sound like a lofty
                and idyllic goal, I am happy to say that I’ve been free of
                Relapsing Remitting Multiple Sclerosis for 8 years now. I am not
                a doctor, but identify as a disruptor
              </p>
              <p className="lowercase">
                At the end of 2004, I failed the run element of an Army Physical
                Fitness Test (APFT). I had maxed out my push-ups and sit-ups,
                but in the last two laps of the 2-mile run, my legs refused to
                propel me across the finish line by the designated time for a
                passing score. Not that I’ve ever enjoyed the run, but this was
                the first time my body had completely refused my commands. After
                taking the retest in early 2005, the exact same thing happened.
                I immediately went to my primary care physician and started
                documenting the onset of debilitating symptoms including
                numbness, tingling, balance and coordination loss, and the most
                perilous to my gainful employment, “brain fog.” 
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-sm md:text-base text-[#2C383C] font-normal mt-8 text-justify lowercase">
          <p>
            But it wasn’t until I started connecting these events into a
            timeline—and matching them with scientific research—that the full
            picture started to form.
          </p>
          <p>
            MS, I realized, is not just a disease of the nervous system. It’s
            the end result of a combination of forces: genetics, immune
            dysfunction, infection, and environment. And for me, each of those
            played a role. My body’s inability to fight off fungal and bacterial
            infections created an internal storm. My nervous system became the
            battlefield. But even then, my story wasn’t finished.
          </p>
          <p>
            In 2012, after having dental implants, I noticed a significant drop
            in brain fog and numbness. Then, in 2017, I underwent gastric sleeve
            surgery to manage my weight. What I didn’t expect was that this
            surgery would completely change my MS symptoms. The fatigue
            disappeared. The relapses stopped. And now, more than eight years
            later, I’m still in remission.
          </p>
          <p>No injections. No flares. Just freedom.</p>
          <p>
            That was my turning point. I began to document everything—from
            medical records and lab results to personal experiences and family
            history. I started asking deeper questions: Could chronic infections
            be triggering MS in more people than we think? Could mold toxins
            like gliotoxin be mimicking MS symptoms? Could gut health, dental
            health, and immune response hold the key to recovery?
          </p>
          <p>Now, I’ve turned that research into purpose.</p>
          <p>
            This website is more than my story—it&#39;s a platform for others
            living with MS (or conditions like it) to find answers, to explore
            alternate causes, and to map their own pathway toward healing.
            Whether you&#39;re a patient, a caregiver, or a medical
            professional, my hope is that my experience sheds light on how
            complex, unique, and treatable MS can be—when we’re willing to look
            beyond the surface.
          </p>
          <p>
            If you’ve ever been told, “We don’t know what’s causing your
            symptoms,” or “Just manage it the best you can,” I want you to
            know—you’re not alone. And there might be more answers than you’ve
            been given.
          </p>
          <p>This is my journey. And I hope it helps guide yours.</p>
        </div>
        <Image
          src="/singrare.png"
          alt="Dhata Harris, Founder"
          width={900}
          height={900}
          className=" w-[200px]  h-[50px] object-cover mt-8"
        ></Image>
      </div>
    </main>
  );
}
