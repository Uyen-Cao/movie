import axios from "axios";
import * as ActionType from "./constants";

const actAuthRequest = () => {
  return {
    type: ActionType.AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (err) => {
  return {
    type: ActionType.AUTH_FAILED,
    payload: err,
  };
};

export const fetchUserLogin = (user, history) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
            response: { data: "Bạn không có quyền truy cập" },
          });
        }
        localStorage.setItem("UserAdmin", JSON.stringify(result.data));
        history.replace("/dashboard");
        dispatch(actAuthSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actAuthFailed(err));
      });
  };
};
