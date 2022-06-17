import { Button, Form, Input, Select } from "antd";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { openMessage } from "../../Notification";

export default function ContactForm() {
  const { Option } = Select;
  const layout = {
    labelCol: { span: 16 },
    wrapperCol: { span: 24 },
  };

  const sendEmail = (e: any) => {
    // e.preventDefault();
    console.log("e", e);
    emailjs
      .send("service_w38ns9h", "template_t0gccbj", e, "KB0DDO79i-zMp6Pzy")
      .then(
        (response: any) => {
          console.log("SUCCESS!", response.status, response.text);
          if (response.status === 200) {
            openMessage("success", "Send success");
            // window.location.reload();
          } else {
            openMessage("error", "Send error");
          }
        },
        (err: any) => {
          console.log("FAILED...", err);
          openMessage("error", "Send error");
        }
      );
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
        <Option value="85">+85</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Form {...layout} name="mailForm" onFinish={sendEmail}>
      <Form.Item
        name={"name"}
        rules={[{ required: true, message: "Please input your name!" }]}
        style={{ width: "100%" }}
      >
        <Input placeholder="Name" bordered={true} />
      </Form.Item>
      <Form.Item
        name={"email"}
        rules={[
          { type: "email" },
          { required: true, message: "Please input your email!" },
        ]}
        style={{ width: "100%" }}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{ width: "100%" }}
          placeholder="Phone number"
          pattern="[0-9]{9,15}"
        />
      </Form.Item>
      <Form.Item name={"message"} style={{ width: "100%" }}>
        <Input.TextArea placeholder="Message" allowClear={true} rows={10} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Send
        </Button>
      </Form.Item>
    </Form>
  );
}
