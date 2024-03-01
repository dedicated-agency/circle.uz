import React from "react";
import styles from "./navbar.module.css";
import Translate from "@docusaurus/Translate";
interface Props {
  isBlack: boolean;
}
export default function Navbar({ isBlack }: Props) {
  return (
    <nav
      className={styles.navbar}
      style={{ backgroundColor: isBlack ? "#001219" : "transparent" }}
    >
      <div className={styles.inner}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="16"
          viewBox="0 0 90 16"
          fill="none"
        >
          <path
            d="M78.2031 14.7998V0.799805H89.7631V3.3798H81.0031V6.49981H89.4431V9.07981H81.0031V12.1998H89.7631V14.7998H78.2031Z"
            fill="white"
          />
          <path
            d="M62.4219 14.7998V0.799805H69.0419C72.9419 0.799805 76.2819 3.6398 76.2819 7.77981C76.2819 11.7798 72.7419 14.7998 69.0419 14.7998H62.4219ZM73.4819 7.77981C73.4819 5.23981 71.6019 3.4798 69.0419 3.4798H65.2219V12.1198H69.0419C71.5819 12.1198 73.4819 10.3198 73.4819 7.77981Z"
            fill="white"
          />
          <path
            d="M45.1417 7.82C45.1417 3.6 48.4217 0.5 52.8217 0.5C57.2017 0.5 60.4817 3.44 60.4817 7.82C60.4817 12.14 57.2017 15.1 52.8217 15.1C48.4417 15.1 45.1417 11.98 45.1417 7.82ZM47.9417 7.82C47.9417 10.52 49.9817 12.42 52.8217 12.42C55.7217 12.42 57.6817 10.52 57.6817 7.82C57.6817 5.06 55.7217 3.18 52.8217 3.18C49.9617 3.18 47.9417 5.06 47.9417 7.82Z"
            fill="white"
          />
          <path
            d="M31.9456 7.82C31.9456 10.52 33.9856 12.42 36.8256 12.42C38.8456 12.42 40.4256 11.48 41.2056 9.96H44.1656C43.3056 13.1 40.4256 15.1 36.8256 15.1C32.4456 15.1 29.1456 11.98 29.1456 7.82C29.1456 3.6 32.4256 0.5 36.8256 0.5C40.4256 0.5 43.2856 2.5 44.1656 5.64H41.2056C40.4456 4.1 38.8656 3.18 36.8256 3.18C33.9656 3.18 31.9456 5.06 31.9456 7.82Z"
            fill="white"
          />
          <path
            d="M15.7812 14.7998V0.799805H27.3412V3.3798H18.5812V6.49981H27.0212V9.07981H18.5812V12.1998H27.3412V14.7998H15.7812Z"
            fill="white"
          />
          <path
            d="M0 14.7998V0.799805H6.62C10.52 0.799805 13.86 3.6398 13.86 7.77981C13.86 11.7798 10.32 14.7998 6.62 14.7998H0ZM11.06 7.77981C11.06 5.23981 9.18 3.4798 6.62 3.4798H2.8V12.1198H6.62C9.16 12.1198 11.06 10.3198 11.06 7.77981Z"
            fill="white"
          />
        </svg>
        <div className={styles.container}>
          <p className={styles.title}>
            <Translate>Join our community</Translate>
          </p>
          <button className={styles.btn}>
            <p>
              <Translate>Get started</Translate>
            </p>
          </button>
        </div>
      </div>
    </nav>
  );
}
