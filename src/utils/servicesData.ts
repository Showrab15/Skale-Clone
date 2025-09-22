export interface ServicesData {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
  switcherData?: {
    label: string;
    value: string;
    isActive: boolean;
  };
  conversionsData?: {
    percentage: string;
    label: string;
  };
  statsData?: {
    title: string;
    items: Array<{
      label: string;
      value: string;
    }>;
  };
}

export const servicesData: ServicesData[] = [
  {
    id: 1,
    title: "Get a Huge Funding",
    description:
      "We have helped tens of startups all over the world to get $70m+ in funding in total. We make websites that impress users",
    backgroundImage: "/services1.avif",
    switcherData: {
      label: "Turn on",
      value: "Growth",
      isActive: true,
    },
  },
  {
    id: 2,
    title: "Increase Conversions",
    description:
      "We help to improve the sales funnels, improve the copy, use more high-converting layout which leads to a significant CRO increase",
    backgroundImage: "/services2.avif",
    conversionsData: {
      percentage: "200%",
      label: "Conversions",
    },
  },
  {
    id: 3,
    title: "Stay Ahead of the Market",
    description:
      "Every page on the web is 1:1 similar to each other. But it's your chance to get something more unique and unusual",
    backgroundImage: "/services1.avif",
    statsData: {
      title: "Stats will speak for itself",
      items: [
        {
          label: "User Retention",
          value: "+80%",
        },
        {
          label: "Leads",
          value: "+150%",
        },
      ],
    },
  },
];
