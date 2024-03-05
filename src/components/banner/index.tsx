import React from "react";
import styles from "./banner.module.css";
interface Props {
  image: string;
  mob_image?: string;
  mob_height?: number;
}
export default function Banner({ image, mob_height }: Props) {
  return (
    <picture>
      <img
        style={{
          maxHeight: mob_height,
        }}
        className={styles.img}
        src={image}
        alt={image}
      />
    </picture>
  );
}
