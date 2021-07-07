import React, { Component, useRef } from "react";
import { NavLink } from "react-router-dom";
import {Link} from 'react-scroll';
import { Button } from "@material-ui/core";
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
            <div className="text-nowrap">
              <a href="#">
                <img
                  className="avatar-user"
                  src="https://i0.wp.com/shareicon.net/data/2017/02/15/878685_user_512x512.png"
                />
              </a>
              <span className="px-2">{hoTen}</span>
            </div>
            <div className="text-nowrap">
              <button
                onClick={() => {
                  clearStorage();
                }}
                className="btn bg-dark"
              >
                <Link className="button-link" to="" refresh="true">
                  LOG OUT
                </Link>
              </button>
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
          className="movie-logo d-flex align-items-center col-6 col-sm-6 col-md-4 col-lg-4 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={logo} />
        </a>
        <ul className="content-menu nav col-md-4 col-lg-4 mb-2 justify-content-center mb-md-0">
          <li className="nav-item">
            <Link spy={true} smooth={true} exact className="btn btn-5" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link spy={true} smooth={true} className="btn btn-5" to="list-movie">
              Phim
            </Link>
          </li>
          <li className="nav-item">
            <Link spy={true} smooth={true} className="btn btn-5" to="movie-schedule">
              Lịch chiếu
            </Link>
          </li>
        </ul>
        <div className="right-column col-6 col-sm-6 col-md-4 col-lg-4 text-right d-flex align-items-center">
          {renderIfLogin()}
        </div>
      </header>
    );
  }
}
