import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { isEmpty } from "lodash";
import * as Yup from "yup";
import "./LogIn.scss";
import adminService from "../../AdminService/AdminService";



export default function LogIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Vui lòng nhập tên tài khoản"),
        matKhau: Yup.string().required("Vui lòng nhập mật khẩu"),
      }),
      onSubmit: (values) => {
        adminService
        .loginAdmin(values)
        .then((res) => {
          if(res.data.maLoaiNguoiDung === "KhachHang"){
            adminService.notification("Bạn không có quyền truy cập", "error");
            return;
          }
          localStorage.setItem("AdminLogin", JSON.stringify(res.data));
          adminService.notification("Đăng nhập thành công", "success");
          history.push("/admin/dasboardUser")
        })
        .catch((err) => {
          adminService.notification(err.response.data, "error");
        });
      },
    });
    return (
      <div className="sign-up-admin">
        <ToastContainer draggable={false} transition={Zoom} autoClose={5000} />
        <div className="signup-background">
          <div className="signup-box ">
            <div className="signup-box-outer">
              <div className="box">
                <h2 className="text-center">Đăng nhập</h2>
                <small>(Admin Only)</small>
                <form action method="post" className="form" onSubmit={handleSubmit}>
                  <div classname="">
                    <div className="input-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Tài khoản"
                        onChange={handleChange}
                        name="taiKhoan"
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  {touched.taiKhoan && errors.taiKhoan ? (
                    <div>
                      <span className="text-danger">
                        Vui lòng nhập tài khoản
                      </span>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="">
                    <div className="input-group mt-3">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Mật khẩu"
                        name="matKhau"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  {touched.matKhau && errors.matKhau ? (
                    <div>
                      <span className="text-danger">
                        Vui lòng nhập mật khẩu
                      </span>
                    </div>
                  ) : (
                    ""
                  )}

                  <button type="submit" className="btn btn-primary mt-2">Đăng nhập</button>
                  <div className="link-signin mt-2">
                    <NavLink className="text-primary" to="/">
                      Quay lại trang chủ
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
