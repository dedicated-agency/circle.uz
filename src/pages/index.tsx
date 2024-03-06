import React, { useState } from "react";
import styles from "./index.module.css";
//@ts-ignore
import designFile1 from "../../static/img/designFile1.png";
//@ts-ignore
import marktBackImage from "../../static/img/marktMobImage.png";
//@ts-ignore
import designFile2 from "../../static/img/designFile2.png";
//@ts-ignore
import challange1 from "../../static/img/challange1.png";
//@ts-ignore
import challange2 from "../../static/img/challange2.png";
import Navbar from "../components/navbar";
import { useInView } from "react-intersection-observer";
import Footer from "../components/footer";
import Translate from "@docusaurus/Translate";

export default function Home(): JSX.Element {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });
  const [isHover, setIsHover] = useState(false);
  return (
    <div className={styles.body_wrapper}>
      <Navbar isBlack={!inView} />
      <div ref={ref} className={styles.banner}>
        <section className={styles.container}>
          <div className={styles.text}>
            <h1 className={styles.text_title}>
              <Translate>breaking the vicious circle</Translate>
            </h1>
            <p className={styles.text_description}>
              <Translate>
                get working experience by building real world applications
              </Translate>
            </p>
            <div className={styles.text_buttons}>
              <a href="/docs/intro" className={styles.text_buttons_explore}>
                <Translate>Explore</Translate>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.text_buttons_explore_icon}
                >
                  <path
                    d="M7.91667 14.5835L12.0833 10.4168L7.91667 6.25016"
                    stroke="#080809"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                onMouseOver={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                target="_blank"
                href="https://t.me/circleuz"
                className={styles.text_buttons_join}
              >
                <Translate>Join our community</Translate>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.text_buttons_join_icon}
                >
                  <path
                    d="M3.75 3.75C3.75 3.08696 4.01339 2.45107 4.48223 1.98223C4.95107 1.51339 5.58696 1.25 6.25 1.25C6.91304 1.25 7.54893 1.51339 8.01777 1.98223C8.48661 2.45107 8.75 3.08696 8.75 3.75C8.75 4.41304 8.48661 5.04893 8.01777 5.51777C7.54893 5.98661 6.91304 6.25 6.25 6.25C5.58696 6.25 4.95107 5.98661 4.48223 5.51777C4.01339 5.04893 3.75 4.41304 3.75 3.75ZM12.2238 5.73L12.2762 5.77C12.8066 6.16313 13.471 6.33052 14.1243 6.23564C14.7776 6.14076 15.3669 5.7913 15.7635 5.26354C16.1601 4.73578 16.3319 4.07257 16.2413 3.41862C16.1508 2.76468 15.8052 2.17311 15.2801 1.77301C14.755 1.37292 14.0929 1.19677 13.4384 1.28302C12.7838 1.36927 12.19 1.71092 11.7864 2.23339C11.3829 2.75587 11.2024 3.41676 11.2843 4.07184C11.3662 4.72692 11.7039 5.323 12.2238 5.73ZM7.835 7.5C7.992 7.2027 8.20736 6.94013 8.46818 6.72799C8.72901 6.51584 9.02994 6.35849 9.35298 6.26534C9.67603 6.17218 10.0145 6.14514 10.3483 6.18584C10.682 6.22654 11.0041 6.33413 11.2953 6.50218C11.5865 6.67024 11.8408 6.8953 12.043 7.1639C12.2452 7.43251 12.3911 7.73914 12.4721 8.06545C12.5531 8.39176 12.5674 8.73105 12.5142 9.06302C12.461 9.39499 12.3414 9.71282 12.1625 9.9975C11.8184 10.5452 11.2754 10.9381 10.6477 11.0939C10.0199 11.2496 9.35623 11.156 8.79603 10.8327C8.23584 10.5094 7.82275 9.98161 7.64354 9.36014C7.46433 8.73867 7.53296 8.07193 7.835 7.5ZM3.125 7.5H6.4625C6.24034 8.13445 6.19204 8.81679 6.3226 9.47621C6.45317 10.1356 6.75784 10.7481 7.205 11.25H6.875C6.23055 11.2499 5.60181 11.449 5.07486 11.82C4.5479 12.191 4.14847 12.7158 3.93125 13.3225C3.51167 13.154 3.11881 12.9253 2.765 12.6437C1.825 11.8875 1.25 10.77 1.25 9.375C1.25 8.87772 1.44754 8.40081 1.79917 8.04917C2.15081 7.69754 2.62772 7.5 3.125 7.5ZM13.125 11.25C14.4812 11.25 15.6362 12.1138 16.0687 13.3225C16.4937 13.1488 16.8863 12.9225 17.235 12.6437C18.175 11.8875 18.75 10.77 18.75 9.375C18.75 8.87772 18.5525 8.40081 18.2008 8.04917C17.8492 7.69754 17.3723 7.5 16.875 7.5H13.5375C13.675 7.89125 13.75 8.3125 13.75 8.75C13.7512 9.67264 13.411 10.5631 12.795 11.25H13.125ZM14.8588 13.66C14.95 13.88 15 14.1225 15 14.375C15 15.77 14.4263 16.8875 13.485 17.6437C12.5588 18.3875 11.3162 18.75 10 18.75C8.68375 18.75 7.44125 18.3875 6.515 17.6437C5.575 16.8875 5 15.77 5 14.375C4.99934 14.1286 5.04739 13.8845 5.14138 13.6567C5.23538 13.4289 5.37346 13.2219 5.5477 13.0477C5.72194 12.8735 5.92891 12.7354 6.15669 12.6414C6.38447 12.5474 6.62859 12.4993 6.875 12.5H13.125C13.4964 12.4999 13.8594 12.6101 14.1681 12.8166C14.4767 13.0232 14.7171 13.3167 14.8588 13.66Z"
                    fill={isHover ? "#3578e5" : "white"}
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.main_wrapper}>
        <div className={styles.container}>
          <section>
            <h2 className={styles.title}>
              <Translate>How does it work?</Translate>
            </h2>
            <div className={styles.design}>
              <div className={styles.design_text}>
                <p className={styles.design_text_title}>
                  <Translate>Problem</Translate>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.design_text_title_svg}
                  >
                    <path
                      d="M12 28H20"
                      stroke="#6C757D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 4C11.5817 4 8 7.58172 8 12C8 13.8564 8.63234 15.5652 9.69338 16.9226C10.8658 18.4226 12 20.1021 12 22.006V22.6669C12 23.4033 12.597 24.0003 13.3333 24.0003H18.6667C19.403 24.0003 20 23.4033 20 22.6669V22.006C20 20.1021 21.1342 18.4226 22.3066 16.9226C23.3677 15.5652 24 13.8564 24 12C24 7.58172 20.4183 4 16 4Z"
                      fill="#6C757D"
                      stroke="#6C757D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </p>
                <p className={styles.design_text_description}>
                  <Translate>problemDescription1</Translate>
                  <a
                    target="_blank"
                    href="https://www.figma.com/file/ULtstqcr6FJ2jzejdHMOVi/Markt-2.0?type=design&node-id=1%3A4&mode=design&t=6marMaYxLhc05tIL-1"
                  >
                    dizayn
                  </a>
                  <Translate>problemDescription2</Translate>
                </p>
                <div className={styles.design_text_buttons}>
                  <button className={styles.design_text_buttons_btn}>
                    <Translate>Web</Translate>
                  </button>
                  <button className={styles.design_text_buttons_btn}>
                    <Translate>Frontend</Translate>
                  </button>
                  <button className={styles.design_text_buttons_btn}>
                    <Translate>Mobile</Translate>
                  </button>
                  <button className={styles.design_text_buttons_btn}>
                    <Translate>Backend</Translate>
                  </button>
                </div>
              </div>
              <div className={styles.design_image}>
                <div className={styles.design_image_top}>
                  <img
                    className={styles.design_image_top_img}
                    src={designFile1}
                    alt="design files image"
                    loading="lazy"
                  />
                </div>
                <div className={styles.design_image_bottom}>
                  <img
                    className={styles.design_image_bottom_img}
                    src={designFile2}
                    alt="design files image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className={styles.challange}>
            <div className={styles.challange_image}>
              <div className={styles.challange_image_top}>
                <img
                  className={styles.challange_image_top_img}
                  src={challange2}
                  alt="challange files image"
                  loading="lazy"
                />
              </div>
              <div className={styles.challange_image_bottom}>
                <img
                  className={styles.challange_image_bottom_img}
                  src={challange1}
                  alt="challange files image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className={styles.challange_text}>
              <p className={styles.challange_text_title}>
                <Translate>Audience</Translate>
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.challange_text_title_svg}
                >
                  <path
                    d="M17.3333 3.1665L4 19.1665H16L14.6667 29.8332L28 13.8332H16L17.3333 3.1665Z"
                    fill="#6C757D"
                    stroke="#6C757D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>

              <p className={styles.challange_text_description}>
                <Translate>
                  It is designed for juniors who have base knowledge on their
                  stack: programming language, standard framework usage
                  experience, but do not have commercial experience yet.
                </Translate>
              </p>

              {/* <div className={styles.challange_text_buttons}>
                <button className={styles.challange_text_buttons_btn}>
                  <Translate>ReactJs</Translate>
                </button>
                <button className={styles.challange_text_buttons_btn}>
                  <Translate>Front End</Translate>
                </button>
                <button className={styles.challange_text_buttons_btn}>
                  <Translate>Back End</Translate>
                </button>
                <button className={styles.challange_text_buttons_btn}>
                  <Translate>API settings</Translate>
                </button>
              </div> */}
            </div>
          </section>
          {/* <section className={styles.community}>
            <h3 className={styles.community_title}>
              <Translate>Community</Translate>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.community_title_svg}
              >
                <path
                  d="M6 6C6 4.93913 6.42143 3.92172 7.17157 3.17157C7.92172 2.42143 8.93913 2 10 2C11.0609 2 12.0783 2.42143 12.8284 3.17157C13.5786 3.92172 14 4.93913 14 6C14 7.06087 13.5786 8.07828 12.8284 8.82843C12.0783 9.57857 11.0609 10 10 10C8.93913 10 7.92172 9.57857 7.17157 8.82843C6.42143 8.07828 6 7.06087 6 6ZM19.558 9.168L19.642 9.232C20.4906 9.86101 21.5535 10.1288 22.5989 9.97702C23.6442 9.82521 24.587 9.26609 25.2216 8.42167C25.8562 7.57725 26.1311 6.51611 25.9861 5.4698C25.8412 4.42349 25.2883 3.47698 24.4481 2.83682C23.6079 2.19666 22.5486 1.91483 21.5014 2.05283C20.4541 2.19084 19.504 2.73746 18.8583 3.57343C18.2126 4.40939 17.9238 5.46682 18.0549 6.51495C18.186 7.56308 18.7263 8.51681 19.558 9.168ZM12.536 12C12.7872 11.5243 13.1318 11.1042 13.5491 10.7648C13.9664 10.4254 14.4479 10.1736 14.9648 10.0245C15.4816 9.87549 16.0233 9.83223 16.5572 9.89734C17.0912 9.96246 17.6066 10.1346 18.0725 10.4035C18.5384 10.6724 18.9453 11.0325 19.2688 11.4622C19.5923 11.892 19.8258 12.3826 19.9554 12.9047C20.0849 13.4268 20.1078 13.9697 20.0227 14.5008C19.9376 15.032 19.7462 15.5405 19.46 15.996C18.9094 16.8723 18.0407 17.501 17.0363 17.7502C16.0319 17.9994 14.97 17.8497 14.0737 17.3324C13.1773 16.8151 12.5164 15.9706 12.2297 14.9762C11.9429 13.9819 12.0527 12.9151 12.536 12ZM5 12H10.34C9.98455 13.0151 9.90726 14.1069 10.1162 15.1619C10.3251 16.217 10.8125 17.1969 11.528 18H11C9.96887 17.9999 8.9629 18.3184 8.11977 18.912C7.27664 19.5056 6.63756 20.3452 6.29 21.316C5.61867 21.0463 4.9901 20.6805 4.424 20.23C2.92 19.02 2 17.232 2 15C2 14.2044 2.31607 13.4413 2.87868 12.8787C3.44129 12.3161 4.20435 12 5 12ZM21 18C23.17 18 25.018 19.382 25.71 21.316C26.39 21.038 27.018 20.676 27.576 20.23C29.08 19.02 30 17.232 30 15C30 14.2044 29.6839 13.4413 29.1213 12.8787C28.5587 12.3161 27.7956 12 27 12H21.66C21.88 12.626 22 13.3 22 14C22.0018 15.4762 21.4576 16.901 20.472 18H21ZM23.774 21.856C23.92 22.208 24 22.596 24 23C24 25.232 23.082 27.02 21.576 28.23C20.094 29.42 18.106 30 16 30C13.894 30 11.906 29.42 10.424 28.23C8.92 27.02 8 25.232 8 23C7.99894 22.6057 8.07582 22.2152 8.22621 21.8507C8.3766 21.4862 8.59754 21.1551 8.87633 20.8763C9.15511 20.5975 9.48625 20.3766 9.8507 20.2262C10.2152 20.0758 10.6057 19.9989 11 20H21C21.5942 19.9999 22.1751 20.1762 22.6689 20.5066C23.1628 20.837 23.5474 21.3067 23.774 21.856Z"
                  fill="#6C757D"
                />
              </svg>
            </h3>
            <p className={styles.community_description}>
              <Translate>
                Collection of resources, recommendations on self learning and
                improving skills in tech, mainly focusing on practical aspects.
              </Translate>
            </p>
            <p className={styles.community_description}>
              <Translate>
                Authors on platform share their experience on how to solve
                problems, ideas on how to do certain functionality, new topics
                to research and etc
              </Translate>
            </p>
            <a
              target="_blank"
              href="https://t.me/circleuz"
              className={styles.community_button}
            >
              <Translate>Join the community</Translate>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.community_button_icon}
              >
                <path
                  d="M7.91665 14.5835L12.0833 10.4168L7.91665 6.25016"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </section> */}
          <section className={styles.markt}>
            <div className={styles.markt_text}>
              <p className={styles.markt_text_title}>
                <Translate>Markt 2.0</Translate>
              </p>
              <p className={styles.markt_text_description}>
                <Translate>E - commerce project</Translate>
              </p>
              <ol className={styles.markt_text_list}>
                <li className={styles.markt_text_list_item}>
                  <Translate>UI Design</Translate>
                </li>
                <li className={styles.markt_text_list_item}>
                  <Translate>Mobile Web</Translate>
                </li>
                <li className={styles.markt_text_list_item}>
                  <Translate>Style Guide</Translate>
                </li>
                <li className={styles.markt_text_list_item}>
                  <Translate>Compinents</Translate>
                </li>
              </ol>
              <a href="/project" className={styles.markt_text_button}>
                <Translate>About project</Translate>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.markt_text_button_icon}
                >
                  <path
                    d="M7.91666 15.083L12.0833 10.9163L7.91666 6.74967"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className={styles.markt_back_image}>
              <img
                src={marktBackImage}
                alt="design files image"
                loading="lazy"
              />
            </div>
          </section>
          <section className={styles.questions}>
            <h4 className={styles.questions_title}>
              <Translate>Have any questions?</Translate>
            </h4>
            <p className={styles.questions_description}>
              <Translate>
                If you have any questions, we are glad to answer them 👋
              </Translate>
            </p>

            <a
              target="_blank"
              href="https://t.me/circleuz_chat"
              className={styles.questions_button}
            >
              <Translate>Type in telegram</Translate>
              <svg
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.questions_button_icon}
              >
                <path
                  d="M22.8143 2.22684C22.9909 1.07617 21.9059 0.167934 20.8914 0.617137L0.683451 9.56406C-0.0441339 9.88619 0.00908715 10.9975 0.763704 11.2398L4.93109 12.5781C5.72645 12.8335 6.5877 12.7015 7.28224 12.2176L16.6778 5.67182C16.9612 5.47443 17.27 5.88066 17.0279 6.13233L10.2648 13.1638C9.60872 13.8459 9.73895 15.0017 10.5281 15.5007L18.1002 20.289C18.9494 20.826 20.042 20.2865 20.2009 19.2516L22.8143 2.22684Z"
                  fill="white"
                />
              </svg>
            </a>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
