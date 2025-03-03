"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HEADER_LIST, SOCIAL_LIST } from "@/utils/helper";
import layer_blue from "../../../public/assets/images/png/blue-layer.png";
import discord from "../../../public/assets/images/svg/discord-icon.svg";
import twitter from "../../../public/assets/images/svg/twitter-icon.svg";
const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav && window.innerWidth < 768) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [nav]);

  return (
    <div className="position-relative">
      <div className="position-absolute start-0 top-0">
        <Image src='/assets/images/png/blue-layer.png' alt="layer" width={250} height={45} />
      </div>
      <nav className="navbar navbar-expand-md navbar-dark container-fluid px-4">
        <div className="container mx-auto" style={{ maxWidth: "1140px" }}>
          <Link href="/" className="navbar-brand z-10 py-3 ff-franklin">
            NEKOZUMA
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler z-40"
            type="button"
            onClick={handleClick}
          >
            <span className={`navbar-toggler-icon ${nav ? "open" : ""}`}></span>
          </button>

          {/* Navbar Menu */}
          <div className={`collapse navbar-collapse ${nav ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto mb-2 mb-md-0">
              {HEADER_LIST.map((obj, index) => (
                <li key={index} className="nav-item">
                  <a
                    onClick={handleClick}
                    href={obj.link}
                    className="nav-link text-white link-hover"
                  >
                    {obj.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item">
                <Link
                  onClick={handleClick}
                  className="nav-link social-hover"
                  href="/discord"
                >
                  <Image width={29} height={29} src='/assets/images/svg/discord-icon.svg' alt="discord" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={handleClick}
                  className="nav-link social-hover"
                  href="/twitter"
                >
                  <Image width={29} height={29} src='/assets/images/svg/twitter-icon.svg' alt="twitter" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
