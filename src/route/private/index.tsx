import React from "react";
import { getToken } from "../../utils/token";
import { Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  component?: React.FC;
  element?: JSX.Element;
  path: string;
  exact: boolean;
}

export function PrivateRoute(props: PrivateRouteProps) {
  const condition = getToken() ? true : false;

  return condition ? (
    <Route path={props.path} element={props.element}>
      {props.element}
    </Route>
  ) : //   <Redirect to={{ pathname: '/login' }} />
  null;
}
