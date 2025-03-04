import { SOCIAL_LIST } from '@/utils/helper'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className="footer-bg-img d-flex align-items-center justify-content-center mt-6xl">
      <div className="">
        <h2 className="text-center fw-normal font-franklin fs-custom-xl text-white">
          NEKOZUMA
        </h2>
        <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
          {SOCIAL_LIST.map((obj, i) => (
            <Link key={i} href={obj.link} target="_blank">
              <Image
                className="media-icon"
                src={obj.name}
                alt="media icon"
                width={29}
                height={29}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer