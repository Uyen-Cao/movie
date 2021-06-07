import React from "react";
import { Route, Redirect } from "react-router-dom";
import DashboardMovie from "./DashboardPage/DashboardMovie";
import DasboardUser from "./DashboardPage/DashboardUser";

export default function AdminTemplate() {
  return (
    <>
      <DasboardUser />
    </>
  );
}
