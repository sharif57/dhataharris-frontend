import Discovery from "../components/Discovery";
import Donation from "../components/Donation";
import Hero from "../components/Hero";
import HowWorks from "../components/HowWorks";
import MSNewsSection from "../components/MSNewsSection";
import Platform from "../components/Platform";
import Series from "../components/Series";
import StoriesSection from "../components/StoriesSection";

export default function Home() {
  return (
    <div>
      <Hero />

      <HowWorks />

      <Platform />

      <Discovery></Discovery>

      <StoriesSection />

      <MSNewsSection />
      
      <Series />

      <Donation />
    </div>
  );
}
