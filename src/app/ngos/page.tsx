/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "../components/Card";

const ngos = [
  {
    id: 1,
    description:
      "UNICEF works globally to ensure every child has access to education, healthcare, and emergency aid, improving lives in over 190 countries. They focus on creating a brighter future for vulnerable children and their families.",
    tags: ["Children", "Education", "Health"],
    imageUrl: "/unicef.png",
    imageAlt: "UNICEF",
    isNew: true,
    title: "UNICEF",
    walletAddress: "0xd47B2Bc991865a39adf3616d8E5aC3A9290Fb155",
  },
  {
    id: 2,
    title: "MSF",
    description:
      "Doctors Without Borders (MSF) delivers medical aid to those affected by crises, providing care in conflict zones, natural disasters, and epidemics. Their work saves lives in some of the world's most challenging environments.",
    tags: ["Health", "Humanitarian", "Disaster Relief"],
    imageUrl: "/msf.jpg",
    imageAlt: "MSF",
    isNew: true,
    walletAddress: "0xC7fa499e2D42CC3377DC2d4e0C4D646CDc2D7e2e",
  },
  {
    id: 3,
    title: "WWF",
    description:
      "WWF focuses on conserving nature and protecting endangered species, working toward a sustainable future for people and the planet. Their efforts include tackling climate change and promoting biodiversity.",
    tags: ["Environment", "Wildlife", "Conservation"],
    imageUrl: "/wwf.jpg",
    imageAlt: "WWF",
    walletAddress: "0xd9127DD7c1AFF86b808161Da1BDd1A93e3b56b20",
    isNew: true,
  },
];

const page = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/ngo.jpg"
          alt="About Us"
          className="w-full lg:h-[600px] h-[400px] object-cover"
        />
        <h1 className="lg:text-7xl text-4xl font-bold text-white text-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          Our NGOs
        </h1>
      </div>
      <div className="container mx-auto px-8 lg:px-16 py-12 text-black justify-center items-center flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ngos.map((ngo) => (
            <Card
              key={ngo.id}
              isNew={ngo.isNew}
              imageUrl={ngo.imageUrl}
              imageAlt={ngo.imageAlt}
              walletAddress={ngo.walletAddress || ""}
              title={ngo.title}
              description={ngo.description}
              tags={ngo.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
