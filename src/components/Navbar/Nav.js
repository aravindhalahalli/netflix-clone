import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/NetflixLogo.svg";
import "./nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav__logo" src={Logo} alt="Netflix logo" />
      <button className="nav__avatar">SignIn</button>
      {/* <img className="nav_avatar" src="" alt="" /> */}
    </div>
  );
};

export default Nav;
