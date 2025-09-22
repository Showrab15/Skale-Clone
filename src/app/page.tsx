import Banner from "@/components/Bsnner/Banner";
import FAQSection from "@/components/FAQ/FAQ";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import PricingSection from "@/components/Pricing/Pricing";
import AnimatedProjects from "@/components/Projects/AnimatedProjects";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Sponsors from "@/components/Sponsors/Sponsors";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Banner />
      <Sponsors />
      <Projects />

      <AnimatedProjects />
      <Services />

      <HowItWorks />

      <PricingSection />
      <Testimonial />
      <FAQSection />
    </>
  );
}
