import React from 'react'
import Header from './common/Header'
import Image from 'next/image';
const Hero = () => {
    return (
      <div className="position-relative">
        <div className="d-flex align-items-center h-100 ">
          <div className="container mx-auto">
            <Header />
            <div className="mt-custom-4xl">
              <div className="line"></div>
              <h1 className="hero-heading">NEKOZUMA</h1>
              <p className="fw-normal hero-description">
                The collection of 5555 NFTs on the Solana blockchain. The
                collection serves to be a rising force against the anime meta of
                collections with undoxxed teams and is therefore backed by the
                team at Nubbies NFT & Karmic Labs.
              </p>
              <button className="hero-button d-flex align-items-center justify-content-center">
                Connect Wallet
              </button>
            </div>
          </div>
          <Image
            src="/assets/images/webp/kakashi-cat.webp"
            alt="kakashi"
            width={564}
            height={543}
            className="w-100 max-w-kakashi position-absolute bottom end-0 "
          />
        </div>
      </div>
    );
}

export default Hero