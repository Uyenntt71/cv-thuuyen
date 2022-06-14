import React from "react";
import styles from "./index.module.css";
import commonStyles from "./../index.module.css";
import { Row, Col, Image } from "antd";
import Avatar1 from "./../../../Images/avatar-male.png";
import Avatar2 from "./../../../Images/avatar-female.png";

export default function References() {
  return (
    <div className={commonStyles.background}>
      <Row className={commonStyles.row}>
        <div className={commonStyles.h2}>References</div>
      </Row>
      <Row className={commonStyles.row}>
        <Col span={11}>
          <Row className={styles.avaRow}>
            <Image
              src={Avatar1}
              alt="Avatar"
              preview={false}
              className={styles.avatar}
            ></Image>
            <div>
              <div className={styles.h7}>Aiyana</div>
              <div className={styles.h8}>CEO / Web Design Company</div>
            </div>
          </Row>
          <div className={commonStyles.h5}>
            "Walter displays exemplary professionalism and is able to take on
            challenges. He learns quickly and is an asset to any team."
          </div>
        </Col>
        <Col span={11} offset={2}>
          <Row className={styles.avaRow}>
            <Image
              src={Avatar2}
              alt="Avatar"
              preview={false}
              className={styles.avatar}
            ></Image>
            <div>
              <div className={styles.h7}>Alexander</div>
              <div className={styles.h8}>
                Front-end Developer / Web Design Company
              </div>
            </div>
          </Row>
          <div className={commonStyles.h5}>
            "Walter is a great co-worker and problem solver. He is quick to
            extend his helping hand and makes a good team player."
          </div>
        </Col>
      </Row>
    </div>
  );
}
