import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import { NavLink } from "react-router-dom"
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import logo from "./image/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { actFetchUserLogin } from "./modules/action";
import { useFormik } from "formik";
import { isEmpty } from "lodash";
import * as Yup from "yup";

import { Button } from "@material-ui/core";

export default function LoginPage(props) {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string()
          .required("Vui lòng nhập tên tài khoản"),
        matKhau: Yup.string()
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
        }
      },
    });

  return (
    <>
      <div className="login-layout">
      <ToastContainer draggable={false} transition={Zoom} autoClose={5000}/>
        <div className="grid align__item">
          <div className="register">
            <img className=" cinema-logo" src={logo} />
            <h4 className="font-weight-bold">ĐĂNG NHẬP</h4>
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
                Đăng nhập
              </Button>
            </form>
            <span>
              Chưa có tài khoản? <a href="/sign-up">Đăng ký</a>
            </span>
            <br/>
            <NavLink className="text-primary" to="/">Quay lại trang chủ</NavLink>
            <br/>
            <NavLink className="text-primary" to="/admin/sign-in">Đăng nhập với tư cách Admin</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
