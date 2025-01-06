"use client";

import React from "react";

import { ConnectButton } from "thirdweb/react";
import { client } from "@/app/client";
import { arbitrumSepolia } from "thirdweb/chains";
import { inAppWallet, createWallet } from "thirdweb/wallets";

const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "email", "x", "passkey", "facebook", "apple"],
    },
  }),
  createWallet("io.metamask"),
  createWallet("me.rainbow"),
];
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black font-semibold"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/how-to">How-To</a>
            </li>
            <li>
              <a href="/ngos">NGOs</a>
            </li>
          </ul>
        </div>
        <a className="text-xl font-bold text-black">SecureChain</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black font-semibold">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/how-to">How-To</a>
          </li>
          <li>
            <a href="/ngos">NGOs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ConnectButton
          client={client}
          wallets={wallets}
          chain={arbitrumSepolia}
          appMetadata={{
            name: "SecureChain",
            url: "https://example.com",
          }}
          connectModal={{
            size: "compact",
            showThirdwebBranding: false,
          }}
          theme={"light"}
        />
      </div>
    </div>
  );
};

export default Navbar;
