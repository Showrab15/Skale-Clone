import FAQSection from "@/components/FAQ/FAQ";
import PricingSection from "@/components/Pricing/Pricing";
import Services from "@/components/Services/Services";
import Sponsors from "@/components/Sponsors/Sponsors";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Sponsors />
      <Services />
      <PricingSection />
      <Testimonial />
      <FAQSection />
    </>
  );
}
