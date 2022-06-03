import React from "react";
import { Route, Navigate } from "react-router-dom";
import { getToken } from "../../utils/token";

interface HomePageProps {
  component?: React.FC;
  element?: JSX.Element;
  path: string;
  exact: boolean;
}

export default function HomePage(props: HomePageProps) {
  const path = window.location.pathname;
  console.log("path", path);
  const checkAuthorized = getToken() ? true : false;
  console.log("auth", checkAuthorized);

  return checkAuthorized ? (
    <Route path={props.path} element={props.element}></Route>
  ) : (
    // <Navigate to={{ pathname: "/login" }} />
    <Route path={props.path} element={<Navigate replace to="/login" />}></Route>
  );
}
