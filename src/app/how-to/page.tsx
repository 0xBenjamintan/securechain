/* eslint-disable @next/next/no-img-element */
import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/how-to.jpg"
          alt="About Us"
          className="w-full lg:h-[600px] h-[400px] object-cover brightness-50"
        />
        <h1 className="lg:text-7xl text-4xl font-bold text-white text-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          How to Get Started
        </h1>
      </div>
      <div className="container mx-auto px-8 lg:px-16 py-12 text-black">
        <h2 className="text-2xl font-bold mb-4">
          {" "}
          How to Create and Connect a Wallet
        </h2>
        <p className="text-lg text-justify leading-relaxed mb-6">
          To start donating securely and transparently, you&apos;ll need a
          cryptocurrency wallet. A wallet, such as MetaMask, allows you to store
          digital assets, interact with blockchain applications, and manage your
          donations with ease.
        </p>
        <p className="text-lg text-justify leading-relaxed mb-6">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="purple"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">Step 1</time>
                <div className="text-lg font-black">Create Your Wallet</div>
                <ol className="list-decimal list-inside">
                  <li>
                    Download MetaMask from the official website (
                    <a
                      href="https://metamask.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-800 delay-100"
                    >
                      https://metamask.io
                    </a>
                    ) or your app store. It&apos;s available as a browser
                    extension and mobile app.
                  </li>
                  <li>
                    Install and launch MetaMask, then click Create a Wallet.
                  </li>
                  <li>Set a strong password to secure your wallet.</li>
                  <li>Save your seed phrase in a secure location.</li>
                  <li>
                    This phrase is critical for recovering your wallet if
                    needed—never share it with anyone.
                  </li>
                </ol>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="purple"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10">
                <time className="font-mono italic">Step 2</time>
                <div className="text-lg font-black">
                  Connect Your Wallet to Our Platform
                </div>
                Once your wallet is ready, connecting it to SecureChain
                Donations is quick and easy:
                <ol className="list-decimal list-inside">
                  <li>
                    Click on the Connect Wallet button at the top of our
                    webpage.
                  </li>
                  <li>
                    Choose your wallet provider (e.g., MetaMask) from the list
                    of options.
                  </li>
                  <li>Authorize the connection in your wallet app.</li>
                </ol>
                Your wallet address will now be linked to the platform, allowing
                you to make donations and track your contributions seamlessly.
              </div>
              <hr />
            </li>
          </ul>
        </p>
      </div>
      <div className="container mx-auto px-8 lg:px-16 py-12 text-black">
        <h2 className="text-2xl font-bold mb-4">Introducing Etherscan</h2>
        <img
          src="/etherscan.png"
          alt="Etherscan"
          className="w-[50%] mb-6 rounded-lg justify-center items-center flex mx-auto"
        />
        <p className="text-lg text-justify leading-relaxed mb-6">
          Etherscan is a blockchain explorer that provides complete transparency
          and accountability for all transactions on the Ethereum network.
          Whether you&apos;re a donor or an NGO, Etherscan ensures you can
          verify every step of your contributions.
        </p>
        <p className="text-lg text-justify leading-relaxed mb-6">
          On Etherscan, you can:
          <ul className="list-disc list-inside">
            <li>
              <b>Track Transactions</b>: Use your wallet address or transaction
              hash to view details like donation amounts, timestamps, and
              recipient addresses.
            </li>
            <li>
              <b>Confirm Donations</b>: Ensure your contributions were received
              by the intended NGO.
            </li>
            <li>
              <b>Explore Blockchain Activity</b>: Gain insights into gas fees,
              network status, and other important metrics.
            </li>
          </ul>
        </p>
        <p className="text-lg text-justify leading-relaxed mb-6">
          By integrating Etherscan into your experience, SecureChain Donations
          guarantees that your donations are fully traceable, secure, and
          tamper-proof. Visit Etherscan.io to explore more about it.
        </p>
      </div>
    </div>
  );
};

export default page;
