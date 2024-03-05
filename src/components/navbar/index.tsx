import React from "react";
import styles from "./navbar.module.css";
import Translate from "@docusaurus/Translate";
interface Props {
  isBlack: boolean;
}
export default function Navbar({ isBlack }: Props) {
  function handleGetStart() {
    window.location.pathname = "/docs/intro";
  }
  return (
    <nav
      className={styles.navbar}
      style={{ backgroundColor: isBlack ? "#001219" : "transparent" }}
    >
      <div className={styles.inner}>
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="108"
            height="21"
            viewBox="0 0 108 21"
            fill="none"
          >
            <path
              d="M91.7094 20.0891V0.911133H107.545V4.44536H95.545V8.71932H107.107V12.2535H95.545V16.5275H107.545V20.0891H91.7094Z"
              fill="white"
            />
            <path
              d="M72.9808 20.0891V0.911133H76.8164V16.4179H88.2136V20.0891H72.9808Z"
              fill="white"
            />
            <path
              d="M56.0306 10.467C56.0306 8.36355 57.6781 6.81836 59.8883 6.81836C62.0884 6.81836 63.736 8.2838 63.736 10.467C63.736 12.6203 62.0884 14.0957 59.8883 14.0957C57.6882 14.0957 56.0306 12.5406 56.0306 10.467ZM57.437 10.467C57.437 11.8128 58.4617 12.7599 59.8883 12.7599C61.345 12.7599 62.3295 11.8128 62.3295 10.467C62.3295 9.09129 61.345 8.1542 59.8883 8.1542C58.4517 8.1542 57.437 9.09129 57.437 10.467Z"
              fill="white"
            />
            <path
              d="M57.437 10.467C57.437 11.8128 58.4617 12.7599 59.8883 12.7599C61.345 12.7599 62.3295 11.8128 62.3295 10.467C62.3295 9.09129 61.345 8.1542 59.8883 8.1542C58.4517 8.1542 57.437 9.09129 57.437 10.467Z"
              fill="white"
            />
            <path
              d="M43.8618 20.0891L39.6152 14.5001H34.4097V20.0891H30.5741V0.911133H40.4371C44.5467 0.911133 47.9439 3.62345 47.9439 7.70562C47.9439 10.3905 46.1905 12.6371 43.807 13.7604L48.6289 20.0891H43.8618ZM44.1083 7.70562C44.1083 5.81522 42.5741 4.44536 40.4371 4.44536H34.4097V10.9111H40.4371C42.5467 10.9111 44.1083 9.51383 44.1083 7.70562Z"
              fill="white"
            />
            <path
              d="M27.105 0.911133V20.0891H23.2694V0.911133H27.105Z"
              fill="white"
            />
            <path
              d="M3.8356 10.5274C3.8356 14.226 6.63011 16.8287 10.5205 16.8287C13.2876 16.8287 15.452 15.541 16.5205 13.4588H20.5752C19.3972 17.7602 15.452 20.4999 10.5205 20.4999C4.52053 20.4999 0 16.226 0 10.5274C0 4.74656 4.49313 0.5 10.5205 0.5C15.452 0.5 19.3698 3.23971 20.5752 7.54106H16.5205C15.4794 5.43148 13.315 4.17122 10.5205 4.17122C6.60271 4.17122 3.8356 6.74655 3.8356 10.5274Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.83 0.5C53.8026 0.5 49.3095 4.74656 49.3095 10.5274C49.3095 16.226 53.83 20.4999 59.83 20.4999C64.9938 20.4999 69.0416 17.4965 70.0694 12.8868H66.0785C65.1845 15.2854 62.889 16.8287 59.83 16.8287C55.9396 16.8287 53.1451 14.226 53.1451 10.5274C53.1451 6.74655 55.9122 4.17122 59.83 4.17122C63.3888 4.17122 65.9143 6.23805 66.4017 9.38684H70.2673C69.7347 4.02255 65.4413 0.5 59.83 0.5Z"
              fill="white"
            />
          </svg>
        </a>

        <div className={styles.container}>
          <a
            target="_blank"
            href="https://t.me/circleuz"
            className={styles.title}
          >
            <Translate>Join our community</Translate>
          </a>
          <button onClick={handleGetStart} className={styles.btn}>
            <p>
              <Translate>Get started</Translate>
            </p>
          </button>
        </div>
      </div>
    </nav>
  );
}
