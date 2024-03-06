import React from "react";
import styles from "./project.module.css";
//@ts-ignore
import banner1 from "../../../static/img/banner1.png";
//@ts-ignore
import Banner from "../../components/banner/index";
//@ts-ignore
import banner2 from "../../../static/img/banner2.png";
//@ts-ignore
import banner3 from "../../../static/img/banner3.png";
//@ts-ignore
import startProject from "../../../static/img/startProject.png";
import Navbar from "../../components/navbar";
import { useInView } from "react-intersection-observer";
import Footer from "../../components/footer";
import Translate from "@docusaurus/Translate";
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
          <Translate>We provide the opportunity to significantly</Translate>
        </h1>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.about}>
            <img
              className={styles.about_image}
              src={banner1}
              alt="challange files image"
              loading="lazy"
            />
            <div className={styles.articles}>
              <div className={styles.article}>
                <div className={styles.articleContainer}>
                  <h3 className={styles.artcleTitle}>
                    <Translate>About</Translate>
                  </h3>
                  <p className={styles.artcleDescription}>
                    <Translate>aboutText</Translate>
                  </p>
                  <p className={styles.artcleDescription}>
                    <Translate>aboutText2</Translate>
                  </p>
                </div>
                <img
                  className={styles.about_image}
                  src={banner2}
                  alt="challange files image"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
          <section className={styles.startProject}>
            <div className={styles.startProjectHeader}>
              <h2>
                <Translate>projectTitle</Translate>
              </h2>
              <p>
                <Translate>projectDescription</Translate>
              </p>
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
                    <p className={styles.projectTitle}>
                      <Translate>Frontend</Translate>
                    </p>
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
                      <Translate>Backend (soon)</Translate>
                    </p>
                  </div>
                </div>
                <div className={styles.projectsLeftContainer}>
                  <h5 className={styles.projectsLeftContainerTitle}>
                    <Translate>frontend_title</Translate>
                  </h5>
                  <p className={styles.projectsLeftContainerText}>
                    <Translate>frontend_one</Translate>
                  </p>
                  <p className={styles.projectsLeftContainerTextItem}>
                    <Translate>frontend_one1</Translate>,
                    <Translate>frontend_one2</Translate>,
                    <Translate>frontend_one3</Translate>,
                    <Translate>frontend_one4</Translate>.
                  </p>
                  <p className={styles.projectsLeftContainerText}>
                    <Translate>frontend_two</Translate>
                  </p>
                  <p className={styles.projectsLeftContainerTextItem}>
                    <Translate>frontend_two1</Translate>,
                    <Translate>frontend_two2</Translate>.
                  </p>
                  <p className={styles.projectsLeftContainerText}>
                    <Translate>frontend_three</Translate>
                  </p>
                  <p className={styles.projectsLeftContainerTextItem}>
                    <Translate>frontend_three1</Translate>,
                    <Translate>frontend_three2</Translate>.
                  </p>
                  <p className={styles.projectsLeftContainerText}>
                    <Translate>frontend_four</Translate>
                  </p>
                  <p className={styles.projectsLeftContainerTextItem}>
                    <Translate>frontend_four1</Translate>,
                    <Translate>frontend_four2</Translate>,
                    <Translate>frontend_four3</Translate>,
                    <Translate>frontend_four4</Translate>.
                  </p>
                  <p className={styles.projectsLeftContainerText}>
                    <Translate>frontend_five</Translate>
                  </p>
                  <p className={styles.projectsLeftContainerTextItem}>
                    <Translate>frontend_five1</Translate>,
                    <Translate>frontend_five2</Translate>,
                    <Translate>frontend_five3</Translate>.
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
                <img src={startProject} loading="lazy" />
              </div>
            </div>
          </section>
          <section className={styles.article_wrapper}>
            <div className={styles.article}>
              <div className={styles.articleContainer}>
                <h3 className={styles.artcleTitle}>
                  <Translate>plan</Translate>
                </h3>
                <p className={styles.artcleDescription}>
                  <Translate>articleDescriptionTop</Translate>
                  <a target="_blank" href="https://circle.uz/docs/intro/">
                    <Translate>articleDescriptionTopFigmaLink</Translate>
                  </a>
                </p>
              </div>
              <div className={styles.articleBanners}>
                <div className={styles.articleBanners_image_left}>
                  <img
                    className={styles.articleBanners_image_left_img}
                    src={banner3}
                    alt="challange files image"
                    loading="lazy"
                  />
                </div>
                <div className={styles.articleBanners_image_right}>
                  <img
                    className={styles.articleBanners_image_right_img}
                    src={banner3}
                    alt="challange files image"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className={styles.artcleDescription}>
                <Translate>articleDescriptionBottom</Translate>
              </p>
            </div>
          </section>
          <section className={styles.contacts}>
            <div className={styles.contactsContainer}>
              <h4>
                <Translate>Have any questions?</Translate>
              </h4>
              <p>
                <Translate>
                  If you have any questions, we are glad to answer them
                </Translate>
              </p>
            </div>
            <a
              target="_blank"
              href="https://t.me/circleuz_chat"
              className={styles.contactsBtn}
            >
              <p>
                <Translate>Type in telegram</Translate>
              </p>
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
        <Footer isWhite />
      </main>
    </div>
  );
}
