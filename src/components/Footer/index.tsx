import React from "react";
import styles from "./index.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <span className={styles.name}>Lovingly made by Rena Suetsugu</span>
        <span className={styles.date}>2021-2025</span>
      </div>
    </footer>
  );
};

export default Footer;
