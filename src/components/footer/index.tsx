import React from "react";
import styles from "./footer.module.css";
const routes = ["Help", "About", "Contacts", "Socials"];
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.routes}>
          {routes.map((item, index) => (
            <p className={styles.route} key={index}>
              {item}
            </p>
          ))}
        </div>
        <p className={styles.company}>©2023 Decode Academy</p>
      </div>
    </footer>
  );
}
