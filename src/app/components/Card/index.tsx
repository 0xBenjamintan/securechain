/* eslint-disable @next/next/no-img-element */
import React from "react";

interface CardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  isNew?: boolean;
  description: string;
  tags: string[];
  walletAddress: string;
  totalDonations: number;
  yourDonations: number;
}

const Card = ({
  imageUrl,
  imageAlt,
  title,
  isNew = false,
  description,
  tags,
  walletAddress,
  totalDonations,
  yourDonations,
}: CardProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-[60%] h-[100%] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {isNew && <div className="badge badge-primary">NEW</div>}
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          {walletAddress ? (
            <>
              Wallet Address: {walletAddress.slice(0, 4)}...
              {walletAddress.slice(-4)}
            </>
          ) : null}
        </p>
        <p>{description}</p>
        <div className="card-actions justify-end mt-4">
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between mt-4">
          <p className="text-sm text-gray-500">
            Total Donations: {totalDonations} ETH
          </p>
          <p className="text-sm text-gray-500">
            You have donated: {yourDonations} ETH
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
