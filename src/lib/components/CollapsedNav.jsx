import React from "react";
import "../styles/index.css";

const CollapsedNav = ({
  setShowCollapsedNav,
  menuIcon,
  iconHeight,
  iconWidth,
}) => {
  return (
    <div className="collapsed-nav">
      <img
        alt="nav menu"
        className="nav-item"
        src={menuIcon}
        onClick={() => setShowCollapsedNav(false)}
        height={iconHeight}
        width={iconWidth}
      />
      {children}
    </div>
  );
};

export default CollapsedNav;
