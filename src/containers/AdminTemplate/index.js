import React from "react";
import { Route, Redirect } from "react-router-dom";

function LayoutAdmin(props) {
  return (
    <>
      <nav>Navbar Admin</nav>
      {props.children}
    </>
  );
}

export default function AdminTemplate() {
  return <Route />;
}
