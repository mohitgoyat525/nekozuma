import React from 'react'
import { TEAM_LIST } from '@/utils/helper'
import Image from 'next/image';
import Link from 'next/link';
const Team = () => {
  return (
    <div id="team" className="team-max-width mx-auto">
      <div className="story-line mx-auto"></div>
      <h2 className="text-center fw-bold font-franklin fs-xl text-blue m-0">
        Team
      </h2>
      <div className="d-flex flex-wrap justify-content-center gap-3 custom-mt-3xl">
        {TEAM_LIST.map((obj, i) => (
          <div key={i} className="cards-max-width w-100">
            <Image
              src={obj.image}
              alt={obj.name}
              width={202}
              height={202}
              className="w-100 cards-max-width pe-none"
            />
            <h3 className="text-center fw-normal font-franklin fs-custom-xxl pt-4 text-blue m-0 pb-2">
              {obj.tittle}
            </h3>
            <p className="common-decprition text-center fw-normal p-0 m-0 ">
              {obj.name}
            </p>
            <p className="common-decprition text-center fw-normal p-0 m-0 pt-2">
              {obj.description}
            </p>
            <Link href="https://twitter.com/invite/NeKozuma" target="_blank">
              <Image
                src={obj.socialIcon}
                width={20}
                height={20}
                alt="social icon"
                className={`mx-auto max-w-sm d-flex align-items-center mt-2 justify-content-center1 ${
                  i === 7
                    ? ""
                    : i === 6
                    ? ""
                    : i === 5
                    ? ""
                    : i === 4
                    ? ""
                    : "mb-4"
                }`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team