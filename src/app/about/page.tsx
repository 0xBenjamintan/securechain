/* eslint-disable @next/next/no-img-element */
import React from "react";

const about = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/about-us.jpg"
          alt="About Us"
          className="w-full lg:h-[600px] h-[400px] object-cover"
        />
        <h1 className="lg:text-7xl text-4xl font-bold text-white text-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          About Us
        </h1>
      </div>
      <div className="container mx-auto px-8 lg:px-16 py-12 text-black">
        <p className="text-lg text-justify leading-relaxed mb-6">
          Welcome to SecureChain Donations, a revolutionary platform designed to
          enhance the way charitable donations are made and managed. Our mission
          is to empower Non-Governmental Organizations (NGOs) and donors
          worldwide by leveraging blockchain technology to ensure secure,
          transparent, and efficient donation transactions.
        </p>
        <p className="text-lg text-justify leading-relaxed mb-6">
          At SecureChain Donations, we aim to address the common challenges in
          the donation ecosystem, including high transaction fees, lack of
          transparency, and cross-border payment complexities. By integrating
          blockchain and Web3 principles, we provide a system that eliminates
          intermediaries, reduces fraud risks, and ensures that every
          contribution is traceable and used effectively.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Our platform is built with features that benefit:
        </h2>
        <p className="text-lg text-justify leading-relaxed mb-6">
          <ul>
            <li>
              - Donors: Enabling secure contributions with real-time tracking
              and auto-generated invoices.
            </li>
            <li>
              - NGOs: Facilitating efficient fund management, cross-border
              donations, and compliance with global regulations.
            </li>
            <li>
              - Cryptocurrency Enthusiasts: Offering a seamless donation
              experience through digital wallets.
            </li>
          </ul>
        </p>
        <blockquote className="text-lg text-justify leading-relaxed mb-6 border-l-4 border-gray-300 pl-4 italic">
          Join us in creating a more trustworthy and impactful donation process
          that revolutionizes charitable giving on a global scale.
        </blockquote>
      </div>
    </div>
  );
};

export default about;
