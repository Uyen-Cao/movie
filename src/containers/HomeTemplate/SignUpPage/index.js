import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "./styles/sign-up.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { actUserRegister } from "./modules/action";
import { useFormik } from "formik";
import { isEmpty } from "lodash";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "25ch",
    },
  },
}));

export default function SignupPage() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
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
      soDt: "",
      email: "",
      hoTen: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Vui lòng nhập tên tài khoản"),
      soDt: Yup.number("Vui lòng chỉ nhập chữ số").required(
        "Vui lòng nhập số điện thoại"
      ),
      email: Yup.string()
        .email("Email không đúng định dạng")
        .required("Vui lòng nhập email"),
      hoTen: Yup.string().required("Vui lòng nhập họ tên"),
      matKhau: Yup.string().required("Vui lòng nhập mật khẩu"),
    }),
    onSubmit: (values) => {
      if (!isEmpty(values)) {
        dispatch(
          actUserRegister(
            {
              taiKhoan: values.taiKhoan,
              matKhau: values.matKhau,
              email: values.email,
              soDt: values.soDt,
              maNhom: "GP07",
              maLoaiNguoiDung: "khachHang",
              hoTen: values.hoTen,
            },
            history
          )
        );
      }
    },
  });
  return (
    <div className="sign-up">
      <div className="signup-background">
        <div className="signup-box ">
          <div className="signup-box-wrapper row">
            <div className="left-box col-7">
              <h2 className="text-center">Đăng ký</h2>
              <form
                onSubmit={handleSubmit}
                className={classes.root}
                noValidate
                autoComplete="off"
              >
                {touched.taiKhoan && errors.taiKhoan ? (
                  <div className="text-danger text-left">{errors.taiKhoan}</div>
                ) : (
                  ""
                )}
                <TextField
                  type="text"
                  className="signup-input"
                  id="standard-basic"
                  label="Tên tài khoản"
                  onChange={handleChange}
                  name="taiKhoan"
                  onBlur={handleBlur}
                />
                <br />
                {touched.soDt && errors.soDt ? (
                  <div className="text-danger text-left">{errors.soDt}</div>
                ) : (
                  ""
                )}
                <TextField
                  type="text"
                  className="signup-input"
                  id="standard-basic"
                  label="Số điện thoại"
                  onChange={handleChange}
                  name="soDt"
                  onBlur={handleBlur}
                />
                <br />
                {touched.hoTen && errors.hoTen ? (
                  <div className="text-danger text-left">{errors.hoTen}</div>
                ) : (
                  ""
                )}
                <TextField
                  type="text"
                  className="signup-input"
                  id="standard-basic"
                  label="Họ và tên"
                  onChange={handleChange}
                  name="hoTen"
                  onBlur={handleBlur}
                />
                <br />
                {touched.email && errors.email ? (
                  <div className="text-danger text-left">{errors.email}</div>
                ) : (
                  ""
                )}
                <TextField
                  type="text"
                  className="signup-input"
                  id="standard-basic"
                  label="Email"
                  onChange={handleChange}
                  name="email"
                  onBlur={handleBlur}
                />
                <br />
                {touched.matKhau && errors.matKhau ? (
                  <div className="text-danger text-left">{errors.matKhau}</div>
                ) : (
                  ""
                )}
                <TextField
                  className="signup-input"
                  id="standard-basic"
                  type="password"
                  label="Mật khẩu"
                  onChange={handleChange}
                  name="matKhau"
                  onBlur={handleBlur}
                />
                {/* <br />
                <TextField
                  className="signup-input"
                  type="password"
                  id="standard-basic"
                  label="Xác nhận mật khẩu"
                /> */}
                {/* <div className="button"> */}
                <Button
                  type="submit"
                  className="my-3 w-50 button"
                  variant="contained"
                  color="primary"
                >
                  Đăng ký
                </Button>
                {/* </div> */}
                <div className="link-signin">
                  <span>Đã có tài khoản? </span>
                  <Link to="/log-in">Đăng nhập</Link>
                </div>
              </form>
            </div>
            <div className="right-box col-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
