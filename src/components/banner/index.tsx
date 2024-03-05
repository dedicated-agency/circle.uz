import React from "react";
import styles from "./banner.module.css";
interface Props {
  image: string;
  mob_image?: string;
  mob_height?: number;
}
export default function Banner({ image, mob_height }: Props) {
  const isSmallScreen = window.innerWidth <= 600;
  alert(isSmallScreen);
  return (
    <picture>
      <img
        style={{
          maxHeight: isSmallScreen ? mob_height : "100%",
        }}
        className={styles.img}
        src={image}
        alt={image}
      />
    </picture>
  );
}
