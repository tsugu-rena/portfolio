import React from "react";
import styles from "./index.module.css";
import logoImage from "../../assets/imageFile/logo-suetsugu.svg";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <a className={styles.logo} href="/">
          <img src={logoImage} alt="suetsuguのロゴ" />
        </a>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/portfolio">Work</a>
            </li>
            <li>
              <a href="/portfolio/about">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
