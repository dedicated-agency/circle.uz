import React from "react";
import styles from "./footer.module.css";
import Translate from "@docusaurus/Translate";
interface Props {
  isWhite?: boolean;
}
export default function Footer({ isWhite }: Props) {
  const routes = [
    { id: 1, title: <Translate>Help</Translate> },
    { id: 2, title: <Translate>About</Translate> },
    { id: 3, title: <Translate>Contacts</Translate> },
    { id: 3, title: <Translate>Socials</Translate> },
  ];
  return (
    <footer
      style={{
        background: isWhite ? "#FFF" : "transparent",
      }}
      className={styles.footer}
    >
      <div className={styles.inner}>
        <div className={styles.routes}>
          {routes.map((item, index) => (
            <a
              target="_blank"
              href="https://t.me/circleuz"
              className={styles.route}
              key={index}
            >
              {item.title}
            </a>
          ))}
        </div>
        <p className={styles.company}>Copyright © 2024 Dedicated.agency</p>
      </div>
    </footer>
  );
}
