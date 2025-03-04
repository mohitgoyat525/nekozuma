import React from "react";
import Image from "next/image";
import { CARDS_IMG } from "@/utils/helper";
import Marquee from "react-fast-marquee";

const Cards = () => {
  return (
    <div id="overview" className="overflow-hidden w-100">
      <div className="d-flex align-items-center justify-content-center">
        <Marquee direction="left" speed={50} pauseOnHover={true}>
          {CARDS_IMG.map((obj, i) => (
            <div key={i}>
              <Image
                src={obj}
                width={320}
                height={320}
                alt="carousel item"
                className="img-fluid pe-none"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="d-flex flex-row-reverse align-items-center justify-content-center">
        <Marquee direction="right" speed={50} pauseOnHover={true}>
          {CARDS_IMG.map((obj, i) => (
            <div key={i}>
              <Image
                src={obj}
                width={320}
                height={320}
                alt="carousel item"
                className="img-fluid pe-none"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Cards;
