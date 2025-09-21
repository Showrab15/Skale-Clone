import Image from "next/image";

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const Sponsors: React.FC = () => {
  const images: ImageData[] = [
    { id: 1, src: "/context.avif", alt: "Mountain landscape" },
    { id: 2, src: "/ajax.avif", alt: "Ocean sunset" },
    { id: 3, src: "/stemwave.avif", alt: "Forest path" },
    { id: 4, src: "/rolai.avif", alt: "Desert dunes" },
    { id: 5, src: "/clickup.avif", alt: "Canyon view" },
    { id: 6, src: "/boltnew.avif", alt: "Canyon view" },
    { id: 7, src: "/whop.avif", alt: "Canyon view" },
    { id: 8, src: "/framer.avif", alt: "Canyon view" },
  ];

  return (
    <section
      className=" mx-auto mt-20 max-w-[1440px] flex justify-center items-center overflow-hidden "
      style={{
        padding: 0,
        listStyleType: "none",
        opacity: 1,
        maskImage:
          "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 10%, rgb(0,0,0) 90%, rgba(0,0,0,0) 100%)",
      }}
    >
      <div className=" text-red-500 flex animate-scroll-infinite-sponsors gap-[64px] md:gap-[85px] items-center">
        {[...images, ...images].map((image) => (
          <div key={image.id + Math.random()} className="flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={140} // replace with your actual image width
              height={100} // replace with your actual image height
              className="object-contain"
              priority={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
