import Image from "next/image";

export default function MSArticlePage() {
  return (
    <div className="bg-[#f9f9f9] px-4 md:px-6">
      <main className="min-h-screen  max-w-6xl mx-auto pt-10">
        {/* Header Image */}
        <div className="relative w-full h-[200px] md:h-[440px] rounded-3xl overflow-hidden ">
          <Image
            src="/new1.png"
            alt="Doctor attending to patient"
            fill
            className="object-cover  rounded-3xl"
            priority
          />
        </div>

        {/* Article Content */}
        <div className=" py-4">
          <h1 className="text-xl md:text-4xl font-semibold underline text-gray-900 mb-4">
            What Does The 2025 Spring Statement Mean For People MS?
          </h1>

          <div className="space-y-4 text-gray-800 text-sm md:text-base">
            <p>
              There Are Now A Number Of Health Conditions - Like Rheumatoid
              Arthritis Or Type 1 Diabetes – Where There Are No Cures. But The
              Experience Of Life For People With These Conditions Has Radically
              Changed, Thanks To The Development Of New Treatments.
            </p>

            <p>
              Over The Past 20 Years MS Research Has Led To Major Advances In
              Treatments. Today There Are Over A Dozen Licensed Treatments For
              People With Relapsing MS And Some Emerging For People With Early
              Active Progressive MS.
            </p>

            <p>
              We Now Know Enough About What Goes Wrong In MS, To Know What Needs
              To Be Done To Develop Treatments To Stop It.
            </p>

            <p>
              The Treatments That Do Exist Work On One Aspect Of MS:
              Inflammation. We&rsquo;re Now Investigating Treatments That Repair
              Myelin - The Fatty Layer Surrounding Our Nerves That Is Damaged In
              MS. And Treatments That Protect Our Nerves From More Damage.
            </p>

            <p>
              Up To Now, We&apos;ve Used Our Expanding Knowledge Of The Immune
              System To Help People With Relapsing MS. We Couldn&lsquo;t Do The
              Same For People With Progressive MS Because, Until Very Recently,
              We Didn&lsquo;t Know All The Information About Why It Happens.
            </p>

            <p>
              In The Last Few Years, Research Has Transformed Our Understanding
              Of Progression. So Developing Treatments That Slow Or Stop
              Disability Is Now A Very Real Prospect.
            </p>

            <p>Two Major Discoveries Brought Us To This Point:</p>

            <p>
              When Myelin Is Damaged It Limits Messages From The Brain And
              Spinal Cord Getting To The Rest Of The Body. It Also Exposes The
              Underlying Nerve Fibres To Damage.
            </p>

            <p>
              Myelin Repair Treatment Could Get Nerves Working Again, Prevent
              Permanent Damage, And Help Recovery. Researchers Have Started
              Early Clinical Trials Of Treatments And Are Working To Identify
              Others. Thanks To Investment From Us, The UK Is A World Leader In
              Myelin Repair Research.
            </p>

            <p>
              Once A Nerve Cell Is Damaged It Can&apos;t Be Replaced. So To Slow
              Or Stop Progression In MS We Need To Develop Treatments That
              Protect The Nerves From More Damage. In 2017 We Co-Funded The
              Multi-Million Pound MS-STAT2 Trial, Which Could Deliver The First
              Ever Neuroprotective Treatment For MS. In 2021, The Trial
              Completed Recruitment, And We Should Have The Results By 2025.
            </p>

            <p>
              We&#39;re Going To Keep Funding Ground-Breaking Research Including
              MS-STAT2 And Other Ground-Breaking Clinical Trials Like ChariotMS
              And Octopus, Until We Achieve Our Goal: Everyone Living Their
              Lives Free From The Effects Of MS.
            </p>

            <p>
              Your Support Makes Everything We Do Possible. Together We Can Stop
              MS.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
