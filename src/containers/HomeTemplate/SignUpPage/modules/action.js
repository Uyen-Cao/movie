import * as ActionType from "./constants";
import axios from "axios";
import { toast } from "react-toastify";

const actRegisterRequest = (data) => {
  return {
    type: ActionType.REGISTER_REQUEST,
    payload: data,
  };
};

const actRegisterSuccess = (data) => {
  return {
    type: ActionType.REGISTER_SUCCESS,
    payload: data,
  };
};

const actRegisterFailed = (err) => {
  return {
    type: ActionType.REGISTER_FAILED,
    payload: err,
  };
};

export const actUserRegister = (user, history) => {
  return (dispatch) => {
    dispatch(actRegisterRequest(user));
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((result) => {
        dispatch(actRegisterSuccess(result.data));
        history.replace({
          pathname: "/",
          state: {
            from: "sign/up"
          }
        });
      })
      .catch((err) => {
        dispatch(actRegisterFailed(err));
        toast.error("Đăng ký thất bại, có thể tên tài khoản, hoặc email đã tồn tại!");
      });
  };
};
