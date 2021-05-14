import React from "react";
import NavbarHome from "./../../components/NavbarHome";
import { Route } from "react-router-dom";
import Footer from "Footer";

function LayoutHome(props) {
  return (
    <>
      <NavbarHome />
      {props.children}
      <Footer />
    </>
  );
}

export default function HomeTemplate(props) {
  const { exact, path, Component } = props;
  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={Component} />
    </LayoutHome>
  );
}
