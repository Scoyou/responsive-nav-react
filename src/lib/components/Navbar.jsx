import React, { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "../styles/index.css";
import CollapsedNav from "./CollapsedNav";

const Navbar = ({ navTitle, menuIcon, iconHeight, iconWidth }) => {
  const [colorChange, setColorchange] = useState(false);
  const [showCollapsedNav, setShowCollapsedNav] = useState(false);
  const { width } = useWindowDimensions();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className={colorChange ? "navbar colorChange" : "navbar"}>
      {showCollapsedNav && (
        <CollapsedNav setShowCollapsedNav={setShowCollapsedNav}>
          {children}
        </CollapsedNav>
      )}
      <span className="nav-title">{navTitle}</span>
      {width < 600 ? (
        <img
          alt="nav menu"
          className="nav-item"
          src={menuIcon}
          onClick={() => setShowCollapsedNav(true)}
          height={iconHeight}
          width={iconWidth}
        />
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Navbar;
