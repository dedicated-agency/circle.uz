import React, { useEffect, useRef, useState } from "react";
import styles from "./project.module.css";
import banner1 from "../../../static/img/banner1.png";
import Banner from "../../components/banner/index";
import banner2 from "../../../static/img/banner2.png";
import banner3 from "../../../static/img/banner3.png";
import startProject from "../../../static/img/startProject.png";
import Navbar from "../../components/navbar";
import { useInView } from "react-intersection-observer";
import Footer from "../../components/footer";
export default function Project() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  function handleStartPorject() {
    window.location.pathname = "/docs/intro";
  }
  return (
    <div className={styles.root}>
      <Navbar isBlack={!inView} />

      <header ref={ref} className={styles.header}>
        <h1 className={styles.title}>
          We provide the opportunity to significantly
        </h1>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.about}>
            <Banner image={banner1} />
            <section className={styles.articles}>
              <div className={styles.article}>
                <div className={styles.articleContainer}>
                  <h3 className={styles.artcleTitle}>About</h3>
                  <p className={styles.artcleDescription}>
                    <p>
                      We provide the opportunity to significantly improve your
                      coding skills with our open source file. We provide the
                      opportunity to significantly improve your coding skills
                      with our open source file.
                    </p>
                    <p>
                      We provide the opportunity to significantly improve your
                      coding skills with our open source file. We provide the
                      opportunity to significantly improve your coding skills
                      with our open source file.
                    </p>
                  </p>
                </div>
                <Banner image={banner2} />
              </div>
              <div className={styles.article}>
                <div className={styles.articleContainer}>
                  <h3 className={styles.artcleTitle}>Tech spec</h3>
                  <p className={styles.artcleDescription}>
                    <p>
                      We provide the opportunity to significantly improve your
                      coding skills with our open source file. We provide the
                      opportunity to significantly improve your coding skills
                      with our open source file.
                    </p>
                    <p>
                      We provide the opportunity to significantly improve your
                      coding skills with our open source file. We provide the
                      opportunity to significantly improve your coding skills
                      with our open source file.
                    </p>
                  </p>
                </div>
                <div className={styles.articleBanners}>
                  <div>
                    <Banner image={banner3} />
                  </div>
                  <div>
                    <Banner image={banner3} />
                  </div>
                </div>
                <p className={styles.artcleDescription}>
                  <p>
                    We provide the opportunity to significantly improve your
                    coding skills with our open source file. We provide the
                    opportunity to significantly improve your coding skills with
                    our open source file.
                  </p>
                  <p>
                    We provide the opportunity to significantly improve your
                    coding skills with our open source file. We provide the
                    opportunity to significantly improve your coding skills with
                    our open source file.
                  </p>
                </p>
              </div>
            </section>
          </section>
          <section className={styles.startProject}>
            <div className={styles.startProjectHeader}>
              <h2>Start project</h2>
              <p>You can start project as a FrontEnd or BackEnd developer.</p>
            </div>

            <div className={styles.projects}>
              <div className={styles.projectsLeft}>
                <div className={styles.projectsLeftSwitch}>
                  <div className={styles.projectsLeftSwitchBlock}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <circle cx="6" cy="6" r="6" fill="#07059A" />
                    </svg>
                    <p className={styles.projectTitle}>Frontend</p>
                  </div>
                  <div className={styles.inActiveSwitch}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="#D8E2DC"
                    >
                      <circle cx="6" cy="6" r="6" fill="#D8E2DC" />
                    </svg>
                    <p className={styles.inActiveProjectTitle}>
                      Backend (soon)
                    </p>
                  </div>
                </div>
                <div className={styles.projectsLeftContainer}>
                  <h5 className={styles.projectsLeftContainerTitle}>
                    Frontend
                  </h5>
                  <p className={styles.projectsLeftContainerText}>
                    We provide the opportunity to significantly improve your
                    coding skills with our open source file. We provide the
                    opportunity to significantly improve your coding skills with
                    our open source file. We provide the opportunity to
                    significantly improve your coding skills with our open
                    source file. We provide the opportunity to significantly
                    improve your coding skills with our open source file
                  </p>
                </div>
                <button
                  onClick={handleStartPorject}
                  className={styles.projectsLeftBtn}
                >
                  <p className={styles.projectsLeftBtnTitle}>Start project</p>
                </button>
              </div>
              <div className={styles.projectsRight}>
                <img src={startProject} />
              </div>
            </div>
          </section>
          <section className={styles.contacts}>
            <div className={styles.contactsContainer}>
              <h3>Have any questions?</h3>
              <p>If you have any questions, we are glad to answer them 👋</p>
            </div>
            <a href="#" className={styles.contactsBtn}>
              <p>Type in telegram</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
              >
                <path
                  d="M22.8144 2.22684C22.991 1.07617 21.9061 0.167934 20.8915 0.617137L0.683573 9.56406C-0.0440118 9.88619 0.00920922 10.9975 0.763826 11.2398L4.93121 12.5781C5.72657 12.8335 6.58783 12.7015 7.28236 12.2176L16.678 5.67182C16.9613 5.47443 17.2701 5.88066 17.028 6.13233L10.2649 13.1638C9.60884 13.8459 9.73907 15.0017 10.5282 15.5007L18.1003 20.289C18.9496 20.826 20.0421 20.2865 20.201 19.2516L22.8144 2.22684Z"
                  fill="white"
                />
              </svg>
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
