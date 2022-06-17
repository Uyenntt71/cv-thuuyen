import { Row, Col } from "antd";
import styles from "./index.module.css";
import commonStyles from "./../index.module.css";

import {
  CalendarOutlined,
  MailOutlined,
  SkypeOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import { OverPack } from "rc-scroll-anim";

export default function About() {
  return (
    <div className={commonStyles.background}>
      <Row className={commonStyles.row}>
        <Col span={11}>
          <div className={commonStyles.h2}>About me</div>
        </Col>
        <Col span={11} offset={2}>
          <div className={commonStyles.h2}>Bio</div>
        </Col>
      </Row>
      <Row className={commonStyles.row}>
        <OverPack className={commonStyles.overpack} playScale={0.15}>
          <QueueAnim
            key="queue"
            leaveReverse
            className={commonStyles.queue}
            duration={1500}
            type="top"
          >
            <Col span={11} key="1">
              <Row gutter={[10, 10]}>
                <div className={styles.aboutMe}>
                  Hello! I am Nguyen Thi Thu Uyen. I have worked as Web
                  Developer for over a year of experience in designing and
                  developing user interfaces, testing, debugging and maintaining
                  applications.
                </div>
                <div className={styles.aboutMe}>
                  I have experience working for production company. I have basic
                  communication skills in English and have experience in
                  communicating with foreign vendor. I always try my best to
                  complete the work well with the team.
                </div>
              </Row>
            </Col>
            <Col span={11} offset={2} key="2">
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
          </QueueAnim>
        </OverPack>
      </Row>
    </div>
  );
}
