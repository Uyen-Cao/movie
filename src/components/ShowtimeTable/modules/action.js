import axios from "axios";
import * as ActionType from "./constants";

const actCinemaListRequest = () => {
  return {
    type: ActionType.CINEMA_LIST_REQUEST,
  };
};

const actCinemaListSuccess = (data) => {
  return {
    type: ActionType.CINEMA_LIST_SUCCESS,
    payload: data,
  };
};

const actCinemaListFailed = (error) => {
  return {
    type: ActionType.CINEMA_LIST_FAILED,
    payload: error,
  };
};

export const fetchCinemaList = () => {
  return (dispatch) => {
    dispatch(actCinemaListRequest());
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((result) => {
        dispatch(actCinemaListSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actCinemaListFailed(error));
      });
  };
};
