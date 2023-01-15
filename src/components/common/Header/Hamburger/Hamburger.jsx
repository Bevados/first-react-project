import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Hamburger.module.scss";
import {menuBase} from "./menuBase";

import hamburgerImage from "../../../../images/header/hamburger.svg";
import hamburgerCloseImage from "../../../../images/header/hamburger-close.svg";


const Hamburger = () => {
	const [show, setShow] = useState(false);

	const handleLogout= () => {
		console.log('logout');
	}

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={() => setShow(!show)}>
        <img src={show ? hamburgerCloseImage : hamburgerImage} alt="Auth" />
      </button>
      <nav className={`${styles.menu} ${show ? styles.show : ''}`}>
        <ul>
          {menuBase.map((item, idx) => (
            <li key={`{_menu_${idx}}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
