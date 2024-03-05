import React from "react";
import styles from "./banner.module.css";
interface Props {
  image: string;
  mob_image?: string;
}
export default function Banner({ image, mob_image }: Props) {
  return (
    <picture>
      <source media="(max-width:425px)" srcSet={mob_image} />
      <img className={styles.img} src={image} alt={image} />
    </picture>
  );
}
