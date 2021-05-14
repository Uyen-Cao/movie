import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import { NavLink } from "react-router-dom";
import logo from "./image/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { actFetchUserLogin } from "./modules/action";
// import Loader from "../../../components/Loader";

import { Button } from "@material-ui/core";

export default function LoginPage(props) {
  const [user, setUser] = useState({ taiKhoan: "", matKhau: "" });
  const error = useSelector((state) => state.userReducer.error);
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actFetchUserLogin(user, props.history));
  };

  return (
    <div>
      {/* <Loader /> */}
      <div className="login-layout">
        <div className="grid align__item">
          <NavLink className=" btn close-btn" exact to="/">
            X
          </NavLink>
          <div className="register">
            <img className=" cinema-logo" src={logo} />
            <h2>Sign Up</h2>
            {error && (
              <span className="text-danger">
                Tài khoản hoặc mật khẩu không đúng
              </span>
            )}
            <form action method="post" className="form" onSubmit={handleSubmit}>
              <div className="form__field">
                <input
                  type="text"
                  placeholder="username.123"
                  onChange={handleOnchange}
                  name="taiKhoan"
                />
              </div>
              <div className="form__field">
                <input
                  type="password"
                  placeholder="••••••••••••"
                  onChange={handleOnchange}
                  name="matKhau"
                />
              </div>

              <Button
                type="submit"
                className="mx-2 button-signup"
                variant="outlined"
              >
                Login
              </Button>
            </form>
            <p>
              Already have an accout? <a href="#">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
