// In your reviewsData.ts file
export interface ReviewData {
  id: number;
  rating: number;
  description: string;
  icon: string;
  name: string;
  impression: string;
}

export const reviewsData: ReviewData[] = [
  {
    id: 1,
    name: "Vanja Popovic",

    description:
      "Mark's redesign of our landing page exceeded our expectations. His design not only encapsulated our brand essence but also met our standards for modern, user-friendly design. The visually appealing layout...",
    icon: "/ya.avif",
    rating: 5,
    impression: "15% in Session Duration",
  },
  {
    id: 2,
    name: "Ya",
    description:
      "The design is very nice, my associate and | are pleased with the improvements made to our basic design. Once the work began, the delivery of the design was quite prompt!",
    icon: "/ya.avif",
    rating: 5,
    impression: "-40% Bounce Rate Reduction",
  },
  {
    id: 3,
    name: "Aleksandr Lyubkin",

    description:
      "The design exceeded all my expectations - unique,  modern, with creative use of space. It attracted visitors’ attention and significantly improved the conversion rate i from 0.5% to 3%. The work was completed in the...",
    icon: "/alesandr.webp",
    rating: 5,
    impression: "6x Conversion Increase",
  },
  {
    id: 4,
    name: "Anton Malyshev",

    description:
      "I had the pleasure of working with Mark and his team on building a website for my business, and I couldn't be | more thrilled with the results. They were incredibly talented, creative, and easy to work with throughout...",
    icon: "/anton.webp",
    rating: 5,
    impression: "85% in User Satisfaction",
  },
  {
    id: 5,
    name: "Alexender",
    description: "The guys did the design for my website, | was very eased!",
    icon: "/alexzender.avif",
    rating: 5,
    impression: "+27% Conversion Increase",
  },
  {
    id: 6,
    name: "Chris Barrineau",
    description:
      "Hey Mark, thank you so much for the website! The design and cinematic elements for Your Purposels YourPower.com are fantastic. You realy brought the vision to life. The mobile-responsive...",
    icon: "/chris.avif",
    rating: 5,
    impression: "3 clients in a first week",
  },
  {
    id: 7,
    name: "Jesse Cox",

    description:
      "Mark Vassilevskiy did an outstanding job designing our website! His attention to detail, creativity, and ability to understand our vision were truly impressive. The final product not only looks stunning but also functions...",
    icon: "/jesse.avif",
    rating: 5,
    impression: "+2 Angel Investors",
  },
  {
    id: 7,
    name: "Karim Abuzeine",

    description:
      "Mark was incredibly cooperative, intuitive and fast acting. Would definitely recommend working with him. If you're looking for modern, creative and novel designs, he's your guy.",
    icon: "/ya.avif",
    rating: 5,
    impression: "+75% in Client Retention",
  },
];
