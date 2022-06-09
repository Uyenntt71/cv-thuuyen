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

interface HomePageProps {
  component?: React.FC;
  element?: JSX.Element;
  path: string;
  exact: boolean;
}

export default function HomePage(props: HomePageProps) {
  const timeRefresh = 60 * 1000 * 10;
  const isAuthenticated = getToken() ? true : false;
  const [events, setEvents] = useState(["click", "load", "visibilitychange"]);
  const nav = useNavigate();
  const handleLogout = () => {
    revokeToke();
    nav("/login");
  };

  // useEffect(() => {
  //   let intervalId = setTimeout(() => {
  //     handleLogout();
  //   }, timeRefresh);
  //   console.log("intervalId", intervalId);
  //   events.forEach((eventName: string) => {
  //     document.addEventListener(eventName, () => {
  //       if (document.hidden) {
  //         clearTimeout(intervalId);
  //       } else {
  //         intervalId = setTimeout(() => {
  //           handleLogout();
  //         }, timeRefresh);
  //       }
  //     });

  //     return () => clearTimeout(intervalId);
  //   }, []);
  // });

  let timer: string | number | NodeJS.Timeout | null | undefined;

  const handleLogoutTimer = () => {
    timer = setTimeout(() => {
      resetTimer();
      Object.values(events).forEach((item) => {
        window.removeEventListener(item, resetTimer);
      });
      handleLogout();
    }, timeRefresh);
  };

  const resetTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    Object.values(events).forEach((item) => {
      window.addEventListener(item, () => {
        resetTimer();
        handleLogoutTimer();
      });
    });
  }, []);

  return isAuthenticated ? (
    <div className={styles.resumeContainer}>
      <Button onClick={handleLogout}>Logout</Button>
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
  ) : (
    // <Navigate to={{ pathname: "/login" }} />
    <Route path={props.path} element={<Navigate replace to="/login" />}></Route>
  );
}
