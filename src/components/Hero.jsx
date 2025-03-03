"use client";
import React from 'react'
import Header from './common/Header'
import Image from 'next/image';
const Hero = () => {
  return (
    <div className=''>
      <Header/>
      <div className="flex-grow w-100 d-flex justify-content-center align-items-center">
        <div
          className="container mw-1140 mx-auto px-3 position-relative z-5"
          
        >
          <div className="row gx-3 align-items-center">
            <div className="col-12 col-lg-6 px-3 mt-custom-50 mt-lg-0">
              <div className="d-flex justify-content-center align-items-center flex-column align-items-lg-start">
                <h1 className="text-primary font-normal fs-45 text-center text-lg-start fs-md-64 lh-113 mb-3 ff-franklin">
                  NEKOZUMA
                </h1>
                <p className="font-normal fs-16 lh-130 text-light-custom mb-5 text-center text-lg-start mw-502">
                  The collection of 5555 NFTs on the Solana blockchain. The
                  collection serves to be a rising force against the anime meta
                  of collections with undoxxed teams and is therefore backed by
                  the team at Nubbies NFT & Karmic Labs.
                </p>
                <button className="btn btn-custom font-normal fs-16 lh-130 text-white py-2 px-4 rounded-9 transition-all hover-scale-110">
                  Connect Wallet
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 px-3 mt-3 mt-lg-0">
              <div className="position-lg-absolute bottom-0 end-0">
                <div className="position-relative d-flex justify-content-center align-items-center">
                  <Image
                    className="d-none d-lg-block"
                    src='/assets/images/png/blue-layer-bottom.png'
                    alt="layer" width={640} height={273}
                  />
                  <div className="position-lg-absolute end-0 bottom-0 mw-564">
                    <Image width={564} height={564} className="w-100" src='/assets/images/webp/kakashi-cat.webp' alt="fox" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Hero