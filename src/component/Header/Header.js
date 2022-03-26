import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-section">
      <h1>
        <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> Camera World
      </h1>
    </div>
  );
};

export default Header;
