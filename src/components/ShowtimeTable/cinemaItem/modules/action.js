import axios from "axios";
import * as ActionType from "./constants";

const actCinemaPlaceRequest = () => {
  return {
    type: ActionType.CINEMA_PLACE_REQUEST,
  };
};

const actCinemaPlaceSuccess = (data) => {
  return {
    type: ActionType.CINEMA_PLACE_SUCCESS,
    payload: data,
  };
};

const actCinemaPlaceFailed = (error) => {
  return {
    type: ActionType.CINEMA_PLACE_FAILED,
    payload: error,
  };
};

export const fetchCinemaPlace = (maHeThongRap) => {
  return (dispatch) => {
    dispatch(actCinemaPlaceRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP07`,
      method: "GET",
      data: maHeThongRap,
    })
      .then((result) => {
        dispatch(actCinemaPlaceSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actCinemaPlaceFailed(error));
      });
  };
};
