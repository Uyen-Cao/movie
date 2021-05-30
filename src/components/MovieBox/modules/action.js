import axios from "axios";
import * as ActionType from "./constants";

const actMovieScheduleRequest = (data) => {
  return {
    type: ActionType.MOVIE_SCHEDULE_REQUEST,
    payload: data,
  };
};

const actMovieScheduleSuccess = (data) => {
  return {
    type: ActionType.MOVIE_SCHEDULE_SUCCESS,
    payload: data,
  };
};

const actMovieScheduleFailed = (error) => {
  return {
    type: ActionType.MOVIE_SCHEDULE_FAILED,
    payload: error,
  };
};

export const fetchMovieSchedule = (maPhim) => {
  return (dispatch) => {
    dispatch(actMovieScheduleRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actMovieScheduleSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actMovieScheduleFailed(error));
      });
  };
};
