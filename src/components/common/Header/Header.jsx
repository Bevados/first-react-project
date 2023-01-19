import React from "react";
import Hamburger from "./Hamburger/Hamburger";
import { useLocation, useNavigate } from "react-router";
import styles from "./Header.module.scss";

import userImage from "../../../images/header/user.svg";
import arrowImage from "../../../images/header/arrow.svg";

const Header = () => {
  const location = useLocation();
  const history = useNavigate();

  return (
    <header className={styles.header}>
      {location.pathname !== "/" ? (
        <button type="button" onClick={() => history('/')}>
          <img src={arrowImage} alt="Back" />
        </button>
      ) : (
        <button type="button">
          <img src={userImage} alt="Auth" />
        </button>
      )}
      <Hamburger />
    </header>
  );
};

export default Header;
