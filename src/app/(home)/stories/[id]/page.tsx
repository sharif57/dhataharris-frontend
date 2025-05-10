/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function DoctorProfilePage() {
  return (
    <main className="min-h-screen bg-[#ffeff3] flex items-center justify-center p-4 md:p-8 text-justify">
      <div className="bg-white rounded-3xl shadow-md max-w-5xl w-full p-6 md:p-8">
        <div className="">
          {/* Profile Image */}
          <div className="lg:flex  items-center gap-6 ">
            <Image
              src="/user.png"
              alt="Dr. Jane Nicholson"
              width={96}
              height={96}
              className="rounded-full w-20 h-20 sm:w-24 sm:h-24 relative mx-auto sm:mx-0 object-cover"
              priority
            />
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 text-center sm:text-left">
                Dr. Jane Nicholson
              </h1>
              <p className="text-[#566063] mb-4 text-lg  text-center sm:text-left">
                Leading Diagnostic Doctor
              </p>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="flex-1 mt-8 w-full sm:w-auto">
            <p className="text-[#2C383C] text-[16px] font-normal leading-relaxed">
              Also for your consideration, I'm including the first doctor's
              visits in 2005 where I was trying to determine what caused the
              numbness and tingling symptoms that I believed were just the
              result of a few spider bites over a 3 year period. There is a
              document showing some of my reported symptoms from MS. A letter
              from my neurologist agreeing that the onset of my MS was 2005. The
              anergy panel result included shows that I had a .1mm reaction to
              candida when a normal body should have .2mm or greater. This is a
              sign of a weakened immune system. The results I got last night
              pose a different question, because gliotoxin is an
              immunosuppressant. So was my immune response to candida non
              reactive because of heredity or was I already exposed to the
              gliotoxin? Because I have cousins with different fungal
              infections, I&#39;m pretty sure its hereditary and is only further
              weakened by these mold toxins. Also for your consideration, I'm
              including the first doctor's visits in 2005 where I was trying to
              determine what caused the numbness and tingling symptoms that I
              believed were just the result of a few spider bites over a 3 year
              period. There is a document showing some of my reported symptoms
              from MS. A letter from my neurologist agreeing that the onset of
              my MS was 2005. The anergy panel result included shows that I had
              a .1mm reaction to candida when a normal body should have .2mm or
              greater. This is a sign of a weakened immune system. The results I
              got last night pose a different question, because gliotoxin is an
              immunosuppressant. So was my immune response to candida non
              reactive because of heredity or was I already exposed to the
              gliotoxin? Because I have cousins with different fungal
              infections, I'm pretty sure its hereditary and is only further
              weakened by these mold toxins. .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
