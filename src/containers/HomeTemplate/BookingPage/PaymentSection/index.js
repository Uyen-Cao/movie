import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookingStatus } from "./modules/action";
import {useHistory} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "./paymentSection.css";
import Loader from "components/Loader";

export default function PaymentSection(props) {
  const movieData = useSelector((state) => state.boxOfficeReducer.data);
  const loading = useSelector((state) => state.boxOfficeReducer.loading);
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
  const renderTotalCost = () => {
    let totalCost = 0;
    if(props.seatSelected.danhSachVe.length === 0){
      return <span className="col-md-6 text-right font-weight-bold text-danger">00.00 VNĐ</span>
    }
      props.seatSelected && props.seatSelected.danhSachVe.forEach((seat) => {
        totalCost += seat.giaVe;
      });
      return <span className="col-md-6 text-right font-weight-bold text-danger">{totalCost} VNĐ</span>
  }
  const handleBooking = () => {
    if(props.seatSelected.danhSachVe.length === 0){
      bookingSeatNot();
    } else{
    dispatch(fetchBookingStatus(props.seatSelected, history))
    }
  }
  const isDesktop = useMediaQuery({ minWidth: 992 })
  const isTablet = useMediaQuery({ maxWidth: 991 })

  const bookingSeatNot = () => {
    toast.error("Vui lòng chọn ghế!")
  }

  return (
    <div className="payment-outer">
      <ToastContainer draggable={false} transition={Zoom} autoClose={5000}/>
      <div className="payment-container text-center">
        {isDesktop &&(
          <div className="payment-wrapper">
          <div className="payment-movie">
            <div className="movie-image">
              {loading ? <Loader/> : <img src={movieData && movieData.thongTinPhim.hinhAnh} />}
            </div>
            <div className="movie-information">
              <span>{movieData && movieData.thongTinPhim.tenPhim}</span>
            </div>
          </div>
          <div>
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
              <div className="col-md-6"></div>
              {renderTotalCost()}
            </div>
          </div>
          </div>
        </div>
        )}
        {isTablet && (
          <div className="payment-wrapper row align-items-center">
          <div className="payment-movie col-5 col-sm-5">
            <div className="movie-image">
              {loading ? <Loader/> : <img src={movieData && movieData.thongTinPhim.hinhAnh} />}
            </div>
            <div className="movie-information">
              <span>{movieData && movieData.thongTinPhim.tenPhim}</span>
            </div>
          </div>
          <div className="col-7 col-sm-7">
          <div className="payment-customer">
            <div className="row py-2 d-flex ">
              <span className="pr-2 font-weight-bold">Email:</span>
              <span>{user && user.email}</span>
            </div>
            <div className="row py-2 d-flex">
              <span className="pr-2 font-weight-bold">Phone:</span>
              <span >{user && user.soDT}</span>
            </div>
          </div>
          <div className="payment-details">
            <div className="payment-selection">{renderSeatSelected()}</div>
            <div className="payment-total row">
              <div className="col-8 col-sm-8"></div>
              {renderTotalCost()}
            </div>
          </div>
          </div>
        </div>
        )}
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
