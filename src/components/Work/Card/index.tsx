import React from "react";
import styles from "./index.module.css";
import logoImage from "../../assets/imageFile/logo-suetsugu.svg";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImage} alt="suetsuguのロゴ" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
