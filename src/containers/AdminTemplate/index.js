import React from "react";
import { Route, Redirect } from "react-router-dom";
import DashboardMovie from "./DashboardPage/DashboardMovie";

export default function AdminTemplate(props) {
  const { exact, path, Component } = props;
  return <Route exact={exact} path={path} component={Component} />;
}
