/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Card from "../components/Card";
import { useWalletBalance } from "thirdweb/react";
import { arbitrumSepolia } from "thirdweb/chains";
import { client } from "@/app/client";

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
    // totalDonations: ,
    yourDonations: 1000,
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

export default function Ngo() {
  const unicefBalance =
    useWalletBalance({
      address: ngos[0].walletAddress || "",
      chain: arbitrumSepolia,
      client,
    }).data?.displayValue || "0";
  const msfBalance =
    useWalletBalance({
      address: ngos[1].walletAddress || "",
      chain: arbitrumSepolia,
      client,
    }).data?.displayValue || "0";
  const wwfBalance =
    useWalletBalance({
      address: ngos[2].walletAddress || "",
      chain: arbitrumSepolia,
      client,
    }).data?.displayValue || "0";

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
              totalDonations={
                ngo.id === 1
                  ? Number(unicefBalance)
                  : ngo.id === 2
                  ? Number(msfBalance)
                  : Number(wwfBalance)
              }
              yourDonations={ngo.yourDonations || 0}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-8 lg:px-16 py-12 text-black">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Who do you want to donate to?
          </h2>

          <div className="form-control w-full mb-4">
            <select className="select select-bordered w-full" defaultValue="">
              <option disabled value="">
                Select an NGO
              </option>
              {ngos.map((ngo) => (
                <option key={ngo.id} value={ngo.walletAddress}>
                  {ngo.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full mb-6">
            <input
              type="number"
              placeholder="Enter amount in ETH"
              className="input input-bordered w-full"
              min="0"
              step="0.01"
            />
          </div>

          <button className="btn btn-primary w-full">Send Donation</button>
        </div>
      </div>
    </div>
  );
}
