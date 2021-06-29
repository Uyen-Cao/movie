import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookingStatus } from "./modules/action";
import {useHistory} from "react-router-dom";
import "./paymentSection.css";

export default function PaymentSection(props) {
  const movieData = useSelector((state) => state.boxOfficeReducer.data);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("UserLogin"));
  const handleRemoveSeat = (seat) => {
    props.getSeatRemoveByButton(seat)
  }
  const renderSeatSelected = () => {
    if(props.seatSelected.danhSachVe.length === 0){
      return <span className="font-weight-bold text-danger">Vui lòng chọn ghế</span>
    }
    return (
      props.seatSelected &&
      props.seatSelected.danhSachVe.map((seat) => {
        return (
          <div className="payment-seat py-2 d-flex align-items-center justify-content-around">
            <span>
              {seat.giaVe === "90000" ? "Vip Seat - " : "Regular Seat - "}
              {seat.tenGhe}
            </span>
            <div>
              <span className="font-weight-bold">{seat.giaVe}</span>
              <button onClick={() => {handleRemoveSeat({tenGhe: seat.tenGhe, maGhe: seat.maGhe})}} className="button-delete btn py-0 px-1">
                <i className="fa fa-trash-alt text-danger"></i>
              </button>
            </div>
          </div>
        );
      })
    );
  };
  const handleBooking = () => {
    dispatch(fetchBookingStatus(props.seatSelected, history))
  }
  return (
    <div className="payment-outer">
      <div className="payment-container text-center">
        <div className="payment-wrapper">
          <div className="payment-movie">
            <div className="movie-image">
              <img src={movieData && movieData.thongTinPhim.hinhAnh} />
            </div>
            <div className="movie-information">
              <span>{movieData && movieData.thongTinPhim.tenPhim}</span>
            </div>
          </div>
          <div className="payment-customer">
            <div className="row py-2 d-flex align-items-center justify-content-around">
              <span className="col-md-5">Email:</span>
              <span className="col-md-7">{user && user.email}</span>
            </div>
            <div className="row py-2 d-flex align-items-center justify-content-around">
              <span className="col-md-5">Phone:</span>
              <span className="col-md-7">{user && user.soDT}</span>
            </div>
          </div>
          <div className="payment-details">
            <div className="payment-selection">{renderSeatSelected()}</div>
            <div className="payment-total row">
              <div className="col-md-8"></div>
              <span className="col-md-4">24.00$</span>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-notice text-center">
        <span>
          <i className=" text-danger px-1 fa fa-exclamation"></i>
          Vé đã mua không thể đổi hoặc hoàn tiền
        </span>
        <br />
        <span>
          Mã vé sẽ được gửi qua tinh nhắn{" "}
          <span className="text-warning">SMS</span> (tin nhắc Zalo) và{" "}
          <span className="text-warning">Email</span> đã nhập
        </span>
      </div>
      <div className="payment-button">
        <button onClick={() => {handleBooking()}} className="btn btn-warning w-100 py-4">
          <span>Xác nhận thanh toán</span>
        </button>
      </div>
    </div>
  );
}
