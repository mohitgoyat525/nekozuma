import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HEADER_LIST, SOCIAL_LIST } from '@/utils/helper'
const Header = () => {
    return (
      <nav className="position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <Link href="/">
            <Image
              src="/assets/images/png/logo-bg.png"
              alt="logo"
              width={252}
              height={40}
              className="position-absolute top-0 left-0"
            />
          </Link>

          <div className="d-flex align-items-center gap-custom-3xl justify-content-end">
            <ul className="d-flex align-items-center gap-custom-3xl">
              {HEADER_LIST.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="d-none d-md-block d-sm-none">
              {SOCIAL_LIST.map((obj, i) => (
                <Link href={obj.link} target="_blank" key={i}>
                  <Image src={obj.name} alt={obj.name} width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Header