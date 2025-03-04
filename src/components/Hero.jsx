"use client"
import React from "react";
import Image from "next/image";
import Header from "./common/Header";

const Hero = () => {
  return (
    <div className="relative mx-auto" style={{ maxWidth: "1920px" }}>
      <Header />
      <div className="d-flex align-items-center position-relative hero-section-parent justify-content-center">
        <div className="container position-relative z-1">
          <h1 className="hero-heading font-franklin m-0">NEKOZUMA</h1>
          <p className="m-0 custom-description max-md-center">
            The collection of 5555 NFTs on the Solana blockchain. The collection
            serves to be a rising force against the anime meta of collections
            with undoxxed teams and is therefore backed by the team at Nubbies
            NFT & Karmic Labs.
          </p>
          <div className="max-md-btn-center">
            <button className="text-white fw-normal hero-button d-flex align-items-center justify-content-center">
              Connect Wallet
            </button>
          </div>
        </div>
        <Image
          className="position-relative z-1 pointer-event-none"
          src="/assets/images/webp/kakashi-cat.webp"
          alt="kakashi cat"
          width={556}
          height={556}
        />
        <Image
          className="position-absolute bottom-0 start-0 user-select-none hero-left-thunder pointer-event-none"
          src="/assets/images/webp/hero-left-thunder.webp"
          alt="left vector"
          width={355}
          height={411}
        />
        <Image
          className="position-absolute end-0 bottom-0 z-1 hero-right-thunder pointer-event-none"
          src="/assets/images/webp/hero-right-thunder.webp"
          alt="right-thunder"
          width={564}
          height={543}
        />
        <Image
          className="position-absolute end-0 bottom-0 blue-box pointer-event-none"
          src="/assets/images/webp/blue-box.webp"
          alt="layer"
          width={640}
          height={273}
        />
      </div>
    </div>
  );
};

export default Hero;
