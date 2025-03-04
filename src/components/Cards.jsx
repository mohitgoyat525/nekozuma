import React from 'react'
import Image from 'next/image'
import { CARDS_IMG } from '@/utils/helper'
const Cards = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="d-flex align-items-center slide-scroll mx-auto justify-content-center">
          {CARDS_IMG.map((obj, i) => (
            <Image
              src={obj}
              key={i}
              width={320}
              height={320}
              alt="cats"
              className="w-100 max-w-320 mx-auto max-md-h-xl pointer-event-none"
            />
          ))}
        </div>
        <div className="d-flex flex-row-reverse align-items-center slide-scroll-left">
          {CARDS_IMG.map((obj, i) => (
            <Image
              src={obj}
              key={i}
              width={320}
              height={320}
              className="w-100 max-w-320  max-md-h-xl pointer-event-none"
              alt="cats"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards