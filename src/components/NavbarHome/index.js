import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import "./style/index.css";
import logo from "./image/logo.png";

export default class NavbarHome extends Component {
  render() {
    const renderIfLogin = () => {
      if (localStorage.getItem("UserLogin")) {
        const hoTen = JSON.parse(localStorage.getItem("UserLogin")).hoTen;
        const clearStorage = () => {
          localStorage.clear();
          window.location.reload();
        };
        return (
          <>
            <div className="w-50">
              <a href="#">
                <img
                  className="avatar-user"
                  src="https://i0.wp.com/shareicon.net/data/2017/02/15/878685_user_512x512.png"
                />
              </a>
              <span className="px-2">{hoTen}</span>
            </div>
            <div className="">
              <Button
                onClick={() => {
                  clearStorage();
                }}
                className="mx-2 bg-dark"
                variant="contained"
                color="secondary"
              >
                <Link className="button-link" to="" refresh="true">
                  LOG OUT
                </Link>
              </Button>
            </div>
          </>
        );
      } else {
        return (
          <>
            <Button className="mx-2" variant="contained" color="secondary">
              <NavLink className="button-link" to="/log-in">
                LOG IN
              </NavLink>
            </Button>
            <Button variant="contained">
              <NavLink className="button-link text-dark" to="/sign-up">
                SIGN UP
              </NavLink>
            </Button>
          </>
        );
      }
    };

    return (
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between ">
        <a
          href="/"
          className="movie-logo d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img className="w-50" src={logo} />
        </a>
        <ul className="content-menu nav col-md-6 mb-2 justify-content-center mb-md-0">
          <li className="nav-item">
            <NavLink exact className="nav-link btn btn-5" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link btn btn-5" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link btn btn-5" to="/list-movie">
              List Movie
            </NavLink>
          </li>
        </ul>
        <div className="right-column col-md-3 text-right d-flex align-items-center">
          {renderIfLogin()}
        </div>
      </header>
    );
  }
}
