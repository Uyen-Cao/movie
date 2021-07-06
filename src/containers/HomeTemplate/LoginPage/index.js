import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import { NavLink } from "react-router-dom";
import logo from "./image/logo.png";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom";
import { actFetchUserLogin } from "./modules/action";
import { useFormik } from "formik";
import { isEmpty } from "lodash";
import * as Yup from "yup";

import { Button } from "@material-ui/core";

export default function LoginPage(props) {
  const history = useHistory();
  console.log(history);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.userReducer.error);
  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
  } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        // .email("Email không đúng định dạng")
        .required("Vui lòng nhập tên tài khoản"),
      matKhau: Yup.string()
        // .min(5, "Password must be longer than 5 characters")
        .required("Vui lòng nhập mật khẩu"),
    }),
    onSubmit: (values) => {
      if (!isEmpty(values.taiKhoan) && !isEmpty(values.matKhau)) {
        dispatch(
          actFetchUserLogin(
            { taiKhoan: values.taiKhoan, matKhau: values.matKhau },
            props.history
          )
        );
        if (history.location.state) {
          history.push({
            pathname: history.location.state.nextPathname,
            state: {
              cinemaID: history.location.state.cinemaID,
            },
          });
        } else {
          history.replace("/");
        }
      }
    },
  });

  return (
    <div>
      {/* <Loader /> */}
      <div className="login-layout">

        <NavLink className=" btn btn-warning" exact to="/">
          TRANG CHỦ
        </NavLink>
  
        <div className="grid align__item">
          {/* <NavLink className=" btn close-btn" exact to="/">
            X
          </NavLink> */}
          <div className="register">
            <img className=" cinema-logo" src={logo} />
            <h2>Log in</h2>
            {error && (
              <span className="text-danger">
                Tài khoản hoặc mật khẩu không đúng
              </span>
            )}
            <form action method="post" className="form" onSubmit={handleSubmit}>
              {touched.taiKhoan && errors.taiKhoan ? (
                <div className="text-danger text-left">{errors.taiKhoan}</div>
              ) : (
                ""
              )}
              <div className="form__field">
                <input
                  type="text"
                  placeholder="username.123"
                  onChange={handleChange}
                  name="taiKhoan"
                  onBlur={handleBlur}
                />
              </div>

              {touched.matKhau && errors.matKhau ? (
                <div className="text-danger text-left">{errors.matKhau}</div>
              ) : (
                ""
              )}
              <div className="form__field">
                <input
                  type="password"
                  placeholder="••••••••••••"
                  onChange={handleChange}
                  name="matKhau"
                  onBlur={handleBlur}
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
