import * as ActionType from "./constants";
import axios from "axios";

export const fetchBookingStatus = (booking, history) => {
  const user = JSON.parse(localStorage.getItem("UserLogin"));
  return (dispatch) => {
    dispatch(actBookingRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      method: "POST",
      data: booking,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((result) => {
        dispatch(actBookingSuccess(result.data));
        if (result.data === "Đặt vé thành công!") {
          history.push("/booking-success");
        }
      })
      .catch((err) => {
        dispatch(actBookingFailed(err));
        alert("Đặt vé thất bại, xin hãy thử lại trong ít phút!")
      });
  };
};

const actBookingRequest = () => {
  return {
    type: ActionType.BOOKING_REQUEST,
  };
};

const actBookingSuccess = (data) => {
  return {
    type: ActionType.BOOKING_SUCCESS,
    payload: data,
  };
};

const actBookingFailed = (err) => {
  return {
    type: ActionType.BOOKING_FAILED,
    payload: err,
  };
};
