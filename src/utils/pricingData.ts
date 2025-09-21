export interface PricingData {
  id: number;
  title: string;
  price: string;
  description: string;
  spotsAvailable: string;
  features: string[];
  isHighlighted: boolean;
}
export const pricingData: PricingData[] = [
  {
    id: 1,
    title: "Landing Creation",
    price: "$20000",
    description:
      "Every business needs a landing, and it's never been easier to get one...",
    spotsAvailable: "2 spots available",
    features: [
      "2 design concepts",
      "Full copywriting",
      "Unlimited 3D models",
      "Framer development",
      "2 rounds of revisions",
      "1 month of free support",
    ],
    isHighlighted: true,
  },
  {
    id: 2,
    title: "Product Design",
    price: "$20000",
    description:
      "Need an MVP, a high-end dashboard or a SaaS? We'll help you to build all of that",
    spotsAvailable: "1 spot available",
    features: [
      "Unlimited design concepts",
      "10+ desktop/mobile screens",
      "Unlimited 3D models",
      "Custom Dev",
      "1 month of free support",
    ],
    isHighlighted: false,
  },
  {
    id: 3,
    title: "Launch Videos",
    price: "$15000",
    description:
      "Launching a product or a new feature? Then you definitely need a promo sec animation",
    spotsAvailable: "3 spots available",
    features: [
      "10-30 sec length",
      "2 rounds of revisions",
      "ETA up to 1 week",
      "Everything in AE",
    ],
    isHighlighted: false,
  },
];
