import React from "react";
import { Route, Redirect } from "react-router-dom";
import DashboardMovie from "./DashboardPage/DashboardMovie";

export default function AdminTemplate() {
  return (
    <>
      <DashboardMovie />
    </>
  );
}
