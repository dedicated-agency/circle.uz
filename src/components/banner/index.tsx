import React from "react";
import styles from "./banner.module.css";
interface Props {
  image: string;
}
export default function Banner({ image }: Props) {
  return (
    <div className={styles.banner}>
      <img className={styles.img} src={image} alt={image} />
    </div>
  );
}
