import axios from "axios";
import * as ActionType from "./constants";

const actAddUserRequest = () => {
  return {
    type: ActionType.ADD_USER_REQUEST,
  };
};

const actAddUserSuccess = (data) => {
  return {
    type: ActionType.ADD_USER_SUCCESS,
    payload: data,
  };
};

const actAddUserFailed = (error) => {
  return {
    type: ActionType.ADD_USER_FAILED,
    payload: error,
  };
};

export const addUser = (user) => {
  console.log(user);
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin").accessToken);
  }
  return (dispatch) => {
    dispatch(actAddUserRequest());
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer + ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(actAddUserSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actAddUserFailed(error));
      });
  };
};
