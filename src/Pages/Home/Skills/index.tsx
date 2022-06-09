import React from "react";
import styles from "./index.module.css";
import { Row, Col, Progress } from "antd";
export default function Skills() {
  return (
    <div className={styles.background}>
      <Row className={styles.row}>
        <div className={styles.h2}>Professional Skills</div>
      </Row>
      <Row className={styles.row}>
        <Col span={11}>
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
        <Col span={11} offset={2}>
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
        <Col span={11}>
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
        <Col span={11} offset={2}>
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
        <Col span={11}>
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
        <Col span={11} offset={2}>
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
        <Col span={11}>
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
        <Col span={11} offset={2}>
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
      </Row>
    </div>
  );
}
