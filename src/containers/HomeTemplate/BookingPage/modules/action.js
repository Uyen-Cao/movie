import * as ActionType from "./constants";
import axios from "axios";

export const fetchBoxOffice = (id) => {
  return (dispatch) => {
    dispatch(actBoxOfficeRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
      method: "GET",
    })
      .then((result) => {
        //resolve
        dispatch(actBoxOfficeSuccess(result.data));
      })
      .catch((err) => {
        //reject
        dispatch(actBoxOfficeFailed(err));
      });
  };
};

const actBoxOfficeRequest = () => {
  return {
    type: ActionType.BOX_OFFICE_REQUEST,
  };
};

const actBoxOfficeSuccess = (data) => {
  return {
    type: ActionType.BOX_OFFICE_SUCCESS,
    payload: data,
  };
};

const actBoxOfficeFailed = (err) => {
  return {
    type: ActionType.BOX_OFFICE_FAILED,
    payload: err,
  };
};
