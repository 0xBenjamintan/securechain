"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full h-[100vh] z-0 fixed top-0 left-0">
            <Image
              src="/hero.jpg"
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 w-full">
            Transparent Giving, Lasting Impact
          </h1>
          <p className="text-sm md:text-lg text-center absolute top-[60%] md:top-[55%] left-1/2 transform -translate-x-1/2 z-10 px-4 w-full">
            A secure and transparent blockchain platform for effortless
            donations.
          </p>
        </div>
      </div>
    </main>
  );
}
