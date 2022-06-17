import React from "react";
import styles from "./index.module.css";
import commonStyles from "./../index.module.css";
import { Row, Col, Input, Button, Form } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import Map from "./Map";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className={commonStyles.background}>
      <Row className={commonStyles.row}>
        <div className={commonStyles.h2}>Contact</div>
      </Row>
      <Row className={commonStyles.row}>
        <Col span={11}>
          <div>
            <PhoneOutlined /> 033-560-6978
          </div>
          <div style={{ paddingBottom: "2rem" }}>
            <MailOutlined /> nguyenuyendhcn@gmail.com
          </div>
          <ContactForm />
        </Col>
        <Col span={11} offset={2} style={{ paddingBottom: "1.1rem" }}>
          <Map />
        </Col>
      </Row>
    </div>
  );
}
