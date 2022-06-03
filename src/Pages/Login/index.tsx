import React from "react";
import { Card, Row, Col } from "antd";
import styles from "./index.module.css";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  return (
    <div>
      <Row
      className={styles.mainRow}>
        <Card
          headStyle={{ textAlign: "center" }}
          title="Login your account"
          className={styles.cardBorder}
        >
          <Row style={{ display: "block" }}>
            <Col>
              <LoginForm />
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
  );
};

export default Login;
