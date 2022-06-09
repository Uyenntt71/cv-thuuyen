import React from "react";
import styles from "./index.module.css";
import { Row, Col, Image } from "antd";
import Avatar1 from "./../../../Images/avatar-male.png";
import Avatar2 from "./../../../Images/avatar-female.png";

export default function References() {
  return (
    <div className={styles.background}>
      <Row className={styles.row}>
        <div className={styles.h2}>References</div>
      </Row>
      <Row className={styles.row}>
        <Col span={11}>
          <Row style={{ position: "relative" }}>
            <Image
              src={Avatar1}
              alt="Avatar"
              preview={false}
              style={{ width: "225px" }}
            ></Image>
            <div>
              <div
                style={{
                  position: "absolute",
                  bottom: "3.25rem",
                  fontWeight: "800",
                }}
              >
                Aiyana
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  fontSize: "0.85rem",
                  color: "#757575",
                }}
              >
                CEO / Web Design Company
              </div>
            </div>
          </Row>
          <div>
            "Walter displays exemplary professionalism and is able to take on
            challenges. He learns quickly and is an asset to any team."
          </div>
        </Col>
        <Col span={11} offset={2}>
          <Row style={{ position: "relative" }}>
            <Image
              src={Avatar2}
              alt="Avatar"
              preview={false}
              style={{ width: "225px" }}
            ></Image>
            <div>
              <div
                style={{
                  position: "absolute",
                  bottom: "3.25rem",
                  fontWeight: "800",
                }}
              >
                Alexander
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  fontSize: "0.85rem",
                  color: "#757575",
                }}
              >
                Front-end Developer / Web Design Company
              </div>
            </div>
          </Row>
          <div>
            "Walter is a great co-worker and problem solver. He is quick to
            extend his helping hand and makes a good team player."
          </div>
        </Col>
      </Row>
    </div>
  );
}
