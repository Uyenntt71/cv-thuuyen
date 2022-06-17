import { message } from "antd";

export const openMessage = (
  type: "error" | "success" | "warning",
  msg: any
) => {
  return message[type](msg);
};
