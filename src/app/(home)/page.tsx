import Discovery from "../components/Discovery";
import Donation from "../components/donation";
import Hero from "../components/Hero";
import MSNewsSection from "../components/MSNewsSection";
import Platform from "../components/Platform";
import StoriesSection from "../components/StoriesSection";

export default function Home() {
  return (
    <div>
      <Hero />

      <Platform />

      <Discovery></Discovery>

      <StoriesSection />

      <MSNewsSection />

      <Donation />
    </div>
  );
}
