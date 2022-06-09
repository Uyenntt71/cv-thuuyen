import { Row, Col } from "antd";
import React from "react";
import styles from "./index.module.css";
import {
  CalendarOutlined,
  MailOutlined,
  SkypeOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

export default function About() {
  return (
    <div className={styles.background}>
      <Row className={styles.row}>
        <Col span={11}>
          <div className={styles.h2}>About me</div>
        </Col>
        <Col span={11} offset={2}>
          <div className={styles.h2}>Bio</div>
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col span={11}>
          <Row gutter={[10, 10]}>
            <div className={styles.aboutMe}>
              Hello! Im Walter Patterson. I am passionate about UI/UX design and
              Web Design. I am a skilled front-end developer and master of
              graphic design tools such as Photoshop and Sketch. I am a quick
              learner and a team worker that gets the job done.
            </div>
            <div className={styles.aboutMe}>
              I can easily capitalize on low hanging fruits and quickly maximize
              timely deliverables for real-time schemas.
            </div>
          </Row>
        </Col>
        <Col span={11} offset={2}>
          <Row gutter={[8, 10]}>
            <Col span={7}>
              <div>
                <CalendarOutlined />
                &ensp;Age
              </div>
            </Col>
            <Col span={12}>26</Col>
            <Col span={7}>
              <div>
                <MailOutlined />
                &ensp;Mail
              </div>
            </Col>
            <Col span={12}>nguyenuyendhcn@gmail.com</Col>
            <Col span={7}>
              <div>
                <SkypeOutlined />
                &ensp;Skype
              </div>
            </Col>
            <Col span={12}>nguyenuyendhcn@gmail.com</Col>
            <Col span={7}>
              <div>
                <PhoneOutlined />
                &ensp;Phone
              </div>
            </Col>
            <Col span={12}>033-560-6978</Col>
            <Col span={7}>
              <div>
                <EnvironmentOutlined />
                &ensp;Address
              </div>
            </Col>
            <Col span={12}>Phuc Dien, Bac Tu Liem, Ha Noi</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
