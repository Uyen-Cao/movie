import * as ActionType from "./constants";
import axios from "axios";

const actUserLoginRequest = () => {
  return {
    type: ActionType.USER_LOGIN_REQUEST,
  };
};

const actUserLoginSuccess = (data) => {
  return {
    type: ActionType.USER_LOGIN_SUCCESS,
    payload: data,
  };
};

const actUserLoginFailed = (err) => {
  return {
    type: ActionType.USER_LOGIN_FAILED,
    payload: err,
  };
};

export const actFetchUserLogin = (user, history) => {
  console.log(user);
  return (dispatch) => {
    dispatch(actUserLoginRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        localStorage.setItem("UserLogin", JSON.stringify(result.data));
        history.replace("/");
        dispatch(actUserLoginSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actUserLoginFailed(err));
      });
  };
};
