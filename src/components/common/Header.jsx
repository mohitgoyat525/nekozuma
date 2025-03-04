"use client";
import { HEADER_LIST, SOCIAL_LIST } from "@/utils/helper";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import Image from "next/image";

const Header = () => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      document.body.style.overflow = open ? "hidden" : "auto";
    } else {
      document.body.style.overflow = "auto"; // Ensure overflow is reset on larger screens
    }
  }, [open]);
  return (
    <div className="position-relative  align-items-center w-100 d-flex justify-content-between navbar-parent">
      <Link href="#" className="position-absolute navbar-logo">
        <Image
          src="/assets/images/png/logo-bg.png"
          alt="logo"
          width={355}
          height={55}
        />
      </Link>
      <div className="container d-flex justify-content-center pt-md-0 pt-2 mt-md-0 mt-4 justify-content-md-end ">
        <div
          className={`d-flex align-items-center  flex-column end-md-0 navbar-link-parent z-2 flex-md-row justify-content-center ${
            open ? "start-0" : "start-100"
          }`}
        >
          {HEADER_LIST.map((obj, i) => (
            <Link
              onClick={() => setOpen(!open)}
              key={i}
              href={obj.link}
              className="text-decoration-none navbar-link text-white fw-normal"
            >
              {obj.name}
            </Link>
          ))}
          <div className="d-flex gap-3">
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
        <div
          onClick={() => setOpen(!open)}
          className="w-100 d-flex gap-2 flex-column align-items-end w-100 z-3 d-md-none justify-content-center"
        >
          <span className={`toggle-button ${open ? "open" : "close"}`}></span>
          <span
            className={`toggle-button ${open ? "open-two" : "close"}`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
