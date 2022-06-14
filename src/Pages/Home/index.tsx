import commonStyles from "./index.module.css";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import References from "./References";
import Contact from "./Contact";
import { List } from "antd";

export default function HomePage() {
  const nav = [
    {
      title: "About",
      id: "about",
    },
    {
      title: "Skills",
      id: "skills",
    },
    {
      title: "Experience",
      id: "experience",
    },
    {
      title: "Education",
      id: "education",
    },
    {
      title: "References",
      id: "references",
    },
    {
      title: "Contact",
      id: "contact",
    },
  ];
  return (
    <div className={commonStyles.resumeContainer}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "2rem",
          marginBottom: "-2rem",
        }}
      >
        <p className={commonStyles.h6}>Nguyen Thi Thu Uyen</p>
        <List
          grid={{
            gutter: 30,
            column: 6,
          }}
          dataSource={nav}
          renderItem={(item) => (
            <List.Item>
              <a href={`#${item.id}`}>{item.title}</a>
            </List.Item>
          )}
          style={{
            float: "right",
            textAlign: "center",
            justifyContent: "center",
          }}
        ></List>
      </div>
      <div className={commonStyles.subContainer}>
        <Intro />
      </div>
      <div className={commonStyles.subContainer} id="about">
        <About />
      </div>
      <div className={commonStyles.subContainer} id="skills">
        <Skills />
      </div>
      <div className={commonStyles.subContainer} id="experience">
        <Experience />
      </div>
      <div className={commonStyles.subContainer} id="education">
        <Education />
      </div>
      <div className={commonStyles.subContainer} id="references">
        <References />
      </div>
      <div className={commonStyles.subContainer} id="contact">
        <Contact />
      </div>
    </div>
  );
}
