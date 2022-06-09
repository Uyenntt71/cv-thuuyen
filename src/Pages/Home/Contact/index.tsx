import React from "react";
import styles from "./index.module.css";
import { Row, Col, Input, Button } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import Map from "./Map";

export default function Contact() {
  return (
    <div className={styles.background}>
      <Row className={styles.row}>
        <div className={styles.h2}>Contact</div>
      </Row>
      <Row className={styles.row}>
        <Col span={11}>
          <div>
            <PhoneOutlined /> 033-560-6978
          </div>
          <div style={{ paddingBottom: "2rem" }}>
            <MailOutlined /> nguyenuyendhcn@gmail.com
          </div>
          <div style={{ width: "100%", paddingBottom: "1rem" }}>
            <Input name="name" placeholder="Name" bordered={true} />
          </div>
          <div style={{ width: "100%", paddingBottom: "1rem" }}>
            <Input name="mail" placeholder="Mail" />
          </div>
          <div style={{ width: "100%", paddingBottom: "1rem" }}>
            <Input.TextArea
              name="message"
              placeholder="Message"
              allowClear={true}
              rows={10}
            />
          </div>
          <div style={{ width: "100%" }}>
            <Button className={styles.button}>Send</Button>
          </div>
        </Col>
        <Col span={11} offset={2}>
          <Map />
        </Col>
      </Row>
    </div>
  );
}
