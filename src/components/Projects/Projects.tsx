// CardSection.tsx
"use client";

import Image from "next/image";

interface ProjectsData {
  id: number;
  href: string;
  mainImage: string;
  overlayImage?: string;
  title?: string;
}

const projects: ProjectsData[] = [
  {
    id: 1,
    href: "https://maily-template.framer.website/",
    mainImage: "/project1.avif",
    overlayImage: "/images/overlay-card.jpg",
    title: "Design Concept 4",
  },
  {
    id: 2,
    href: "#",
    mainImage: "/project2.avif",
    overlayImage: "/images/overlay-card2.jpg",
    title: "Design Concept 5",
  },
  {
    id: 3,
    href: "#",
    mainImage: "/project3.avif",
    overlayImage: "/images/overlay-card2.jpg",
    title: "Design Concept 5",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="  w-full flex xl:flex-row flex-col mx-auto items-center justify-center mt-10 lg:mt-20 gap-16 fle x-wrap">
      {projects.map((card) => (
        <div
          key={card.id}
          className=" bg-white flex items-center justify-center p-2 w-[340px] h-[340px]  relative  rounded-[44px] shadow-lg overflow-hidden group"
        >
          {/* Main background image */}
          <div className="p-2 w-[320px] flex justify-center items-center mx-auto my-auto h-[320px]  absolute inset-0 rounded-[44px]">
            <Image
              src={card.mainImage}
              alt={"Card image"}
              fill
              className="object-cover w-[320px] h-[320px]  rounded-[44px] flex justify-center items-center"
              priority
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
