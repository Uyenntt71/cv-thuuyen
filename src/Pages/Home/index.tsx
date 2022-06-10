import { Button } from "antd";
import styles from "./index.module.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import { getToken, revokeToke } from "../../utils/token";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import References from "./References";
import Contact from "./Contact";

export default function HomePage() {

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.subContainer}>
        <Intro />
      </div>
      <div className={styles.subContainer}>
        <About />
      </div>
      <div className={styles.subContainer}>
        <Skills />
      </div>
      <div className={styles.subContainer}>
        <Experience />
      </div>
      <div className={styles.subContainer}>
        <Education />
      </div>
      <div className={styles.subContainer}>
        <References />
      </div>
      <div className={styles.subContainer}>
        <Contact />
      </div>
    </div>
  );
}
