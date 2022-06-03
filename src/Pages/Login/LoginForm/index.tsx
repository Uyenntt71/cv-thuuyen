import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { UserOutlined, LockOutlined, LoadingOutlined } from "@ant-design/icons";
import { setToken, getToken } from "../../../utils/token";
import { TOKEN } from "../../../utils/constant";
import styles from "./index.module.css";
import { Navigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const loadingIndicator = <LoadingOutlined spin />;

  useEffect(() => {
    setLogin(getToken() !== null);
  }, []);

  const handleSubmit = (values: any) => {
    setLoading(true);
    if (values.username === "uyen" && values.password === "Uyen@123") {
      // console.log("match username and password");
      setToken(TOKEN);
      setLogin(true);
    } else {
      setLogin(false);
    }
    setLoading(false);
  };

  return (
    <>
      {isLogin ? (
        <Navigate to={{ pathname: "/home" }} />
      ) : (
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          style={{ textAlign: "center" }}
        >
          <Row>
            <Col xs={24} sm={24} md={24}>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
                className={styles.formItem}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
                className={styles.formItem}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item className={styles.formItem}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Form.Item>
              <Form.Item className={styles.formItem}>
                <Button
                  type="primary"
                  htmlType="submit"
                  //   className="login-form-button"
                  style={{ width: "100%", color: "#013BA6" }}
                >
                  {!loading ? "Log in" : loadingIndicator}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
};
export default LoginForm;
