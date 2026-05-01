import "../../styles/header.css";
import logo from "../../assets/logo.jpeg";
// import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoClose, IoMenu } from "react-icons/io5";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const closeMenu = () => {
      setShowMenu(false);
    };

    const isMobile = window.innerWidth <= 990;

    if (showMenu && isMobile) {
      document.addEventListener("click", closeMenu);
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [showMenu]);

  return (
    <header
    //   className="container"
    >
      <div className="header" onClick={(e) => e.stopPropagation()}>
        <div className="logo" data-aos="zoom-in">
          <img src={logo} alt="Logo" />
          <h1 className="hero-title">
            Spektrum
            {/* Gems & Jewellers */}
          </h1>
        </div>

        <nav className={showMenu ? "menu-mobile" : "menu-web"}>
          <ul data-aos="zoom-in">
            <li onClick={handleButtonToggle}>
              <a href="#home">Home</a>
            </li>
            <li onClick={handleButtonToggle}>
              <a href="#about">About</a>
            </li>
            <li onClick={handleButtonToggle}>
              <a href="#services">Services</a>
            </li>
            <li onClick={handleButtonToggle}>
              <a href="#labTesting">Lab Testing</a>
            </li>
            <li onClick={handleButtonToggle}>
              <a href="#Bullion">Bullion</a>
            </li>
            <li onClick={handleButtonToggle}>
              <a href="#gems">Spiritual Gems</a>
            </li>
            <li onClick={handleButtonToggle}>
              <a href="#why">Why Us</a>
            </li>
          </ul>
        </nav>

        <div
          className="menu-icon"
          onClick={(e) => {
            e.stopPropagation();
            handleButtonToggle();
          }}
        >
          {showMenu ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </header>
  );
};
