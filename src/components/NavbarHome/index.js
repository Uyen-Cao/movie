import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Button } from "@material-ui/core";
import "./style/index.css";
import logo from "./image/logo.png";
import { LaptopWindowsTwoTone } from "@material-ui/icons";

export default function NavbarHome() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("UserLogin")));
  const history = useHistory();
  useEffect(() => {
    if(user === null){
      setTimeout(() => {
        setUser(JSON.parse(localStorage.getItem("UserLogin")));
      }, 500);
    } else if(user){
      setUser(JSON.parse(localStorage.getItem("UserLogin")));
    }
  }, []);
 
  const renderLoginUser = () => {
    return (
      <>
        <div className="text-nowrap">
          <span>
            <img
              className="avatar-user"
              src="https://i0.wp.com/shareicon.net/data/2017/02/15/878685_user_512x512.png"
            />
          </span>
          <span className="px-2">{user && user.hoTen}</span>
        </div>
        <div className="text-nowrap">
          <button
            onClick={() => {
              clearStorage();
            }}
            className="btn bg-dark"
          >
            <span className="button-link">LOG OUT</span>
          </button>
        </div>
      </>
    );
  }
  const renderIfNotLogin = () => {
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
  };
  const clearStorage = () => {
    localStorage.clear();
    setTimeout(() => {
      setUser("")
    }, 1000);
  };

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between ">
      <NavLink
        to="/"
        className="movie-logo d-flex align-items-center col-6 col-sm-6 col-md-4 col-lg-4 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <img src={logo} />
      </NavLink>
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
          <Link
            spy={true}
            smooth={true}
            className="btn btn-5"
            to="movie-schedule"
          >
            Lịch chiếu
          </Link>
        </li>
      </ul>
      <div className="right-column col-6 col-sm-6 col-md-4 col-lg-4 text-right d-flex align-items-center">
        {user ? renderLoginUser() : renderIfNotLogin()}
      </div>
    </header>
  );
}
