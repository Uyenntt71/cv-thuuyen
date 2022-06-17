import styles from "./index.module.css";
import commonStyles from "./../index.module.css";

import { Image } from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import Avatar from "./../../../Images/avatar_uyen.jpg";

export default function Intro() {
  return (
    <div className={styles.headerBackground}>
      <div className={styles.textCenter}>
        <Image
          src={Avatar}
          alt="Avatar"
          className={styles.avatar}
          preview={false}
        ></Image>
        <div className={styles.headerBio}>
          <div className={styles.h1}>Nguyen Thi Thu Uyen</div>
          <div className={commonStyles.h3}>Fullstack Developer</div>
          <div className={styles.headerSocial}>
            <a
              className={styles.icon}
              href="https://facebook.com/trontronnhuhotmit"
              title="Facebook"
            >
              <FacebookOutlined />
            </a>
            <a
              className={styles.icon}
              href="https://twitter.com/nguyenuyendhcn"
              title="Twitter"
            >
              <TwitterOutlined />
            </a>
            <a
              className={styles.icon}
              href="https://github.com/Uyenntt71"
              title="Github"
            >
              <GithubOutlined />
            </a>
            <a
              className={styles.icon}
              href="https://instagram.com/uyenntt71"
              title="Instagram"
            >
              <InstagramOutlined />
            </a>
          </div>
          <div>
            <a href="/material-resume.pdf" className={styles.button}>
              Download CV
            </a>
            <a className={styles.button} href="#contact">
              Hire me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
