import commonStyles from "./../index.module.css";
import styles from "./index.module.css";
import { Row, Col, Progress } from "antd";
import { OverPack } from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";

export default function Skills() {
  return (
    <div className={commonStyles.background}>
      <Row className={commonStyles.row}>
        <div className={commonStyles.h2}>Technical Skills</div>
      </Row>
      <Row className={commonStyles.row}>
        <OverPack
          style={{
            width: "100%",
            display: "flex",
            height: "15rem",
          }}
          playScale={0.1}
        >
          <QueueAnim
            key="queue"
            leaveReverse
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
            }}
            duration={1500}
            type="left"
          >
            <Col span={11} key="item7">
              <div>Java</div>
              <div>
                <Progress
                  percent={75}
                  strokeWidth={10}
                  showInfo={false}
                  trailColor={"#eee"}
                />
              </div>
            </Col>
            <Col span={11} offset={2} key="item6">
              <div>PostgreSql</div>
              <div>
                <Progress
                  percent={80}
                  strokeWidth={10}
                  showInfo={false}
                  strokeColor={"purple"}
                  trailColor={"#eee"}
                />
              </div>
            </Col>
            <Col span={11} key="item5">
              <div>HTML</div>
              <div>
                <Progress
                  percent={70}
                  strokeWidth={10}
                  showInfo={false}
                  trailColor={"#eee"}
                />
              </div>
            </Col>
            <Col span={11} offset={2} key="item4">
              <div>Word</div>
              <div>
                <Progress
                  percent={80}
                  strokeWidth={10}
                  showInfo={false}
                  strokeColor={"purple"}
                  trailColor={"#eee"}
                />
              </div>
            </Col>
            <Col span={11} key="item9">
              <div>CSS</div>
              <div>
                <Progress
                  percent={65}
                  strokeWidth={10}
                  showInfo={false}
                  trailColor={"#eee"}
                />
              </div>
            </Col>
            <Col span={11} offset={2} key="item3">
              <div>Excel</div>
              <div>
                <Progress
                  percent={65}
                  strokeWidth={10}
                  showInfo={false}
                  strokeColor={"purple"}
                  trailColor={"#eee"}
                />
              </div>
            </Col>
            <Col span={11} key="item2">
              <div>JavaScript</div>
              <div>
                <Progress
                  percent={65}
                  strokeWidth={10}
                  showInfo={false}
                  trailColor={"#eee"}
                />
              </div>
            </Col>
            <Col span={11} offset={2} key="item1">
              <div>PowerPoint</div>
              <div>
                <Progress
                  percent={60}
                  strokeWidth={10}
                  showInfo={false}
                  strokeColor={"purple"}
                  trailColor={"#eee"}
                />
              </div>
            </Col>
          </QueueAnim>
        </OverPack>
      </Row>
    </div>
  );
}
