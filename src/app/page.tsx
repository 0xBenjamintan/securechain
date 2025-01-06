/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">
            Transparent Giving, Lasting Impact
          </h1>
          <p className="mb-5 text-xl">
            A secure and transparent blockchain platform for effortless
            donations.
          </p>
        </div>
      </div>
    </div>
  );
}
