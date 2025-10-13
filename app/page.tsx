import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedMentors from "@/components/home/FeaturedMentors";
import ImpactStats from "@/components/home/ImpactStats";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <FeaturedMentors />
      <ImpactStats />
      <Testimonials />
      <CTABanner />
    </main>
  );
};

export default Index;
