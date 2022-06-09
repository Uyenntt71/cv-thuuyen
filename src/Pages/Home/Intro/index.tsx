import React from "react";
import styles from "./index.module.css";
import { Button, Image } from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import Avatar from "./../../../Images/avatar.jpg";

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
          <div className={styles.h2}>Back-end Developer</div>
          <div className={styles.headerSocial}>
            <a
              className={styles.icon}
              href="https://facebook.com/"
              title="Facebook"
            >
              <FacebookOutlined />
            </a>
            <a
              className={styles.icon}
              href="https://twitter.com/templateflip"
              title="Twitter"
            >
              <TwitterOutlined />
            </a>
            <a
              className={styles.icon}
              href="https://github.com/"
              title="Github"
            >
              <GithubOutlined />
            </a>
            <a
              className={styles.icon}
              href="https://instagram.com/"
              title="Instagram"
            >
              <InstagramOutlined />
            </a>
          </div>
          <div>
            <Button className={styles.button} shape="round">
              Download CV
            </Button>
            <Button className={styles.button} shape="round">
              Hire me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
