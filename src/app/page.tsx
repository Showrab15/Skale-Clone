import FAQSection from "@/components/FAQ/FAQ";
import PricingSection from "@/components/Pricing/Pricing";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Services />
      <PricingSection />
      <Testimonial />
      <FAQSection />
    </>
  );
}
