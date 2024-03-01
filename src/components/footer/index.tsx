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
            <p className={styles.route} key={index}>
              {item.title}
            </p>
          ))}
        </div>
        <p className={styles.company}>©2024 Circle Academy</p>
      </div>
    </footer>
  );
}
