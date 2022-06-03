import { Button, Result } from "antd";
import React from "react";
import { Navigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const handleBackHome = () => {
    return <Navigate to={{ pathname: "/home" }} />;
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={handleBackHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
