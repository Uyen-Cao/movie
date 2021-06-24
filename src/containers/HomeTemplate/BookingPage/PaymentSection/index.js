import React from "react";
import "./paymentSection.css";

export default function PaymentSection() {
  return (
    <div className="payment-outer">
      <div className="payment-container text-center">
        <div className="payment-wrapper">
          <div className="payment-movie">
            <div className="movie-image">
              <img src="https://ntdesigner.com/wp-content/uploads/2019/11/poster-phim-6-scaled.jpg" />
            </div>
            <div className="movie-information">
              <span>SPACE STONE</span>
            </div>
          </div>
          <div className="payment-customer">
            <div className="py-2 d-flex align-items-center justify-content-around">
              <span>Email:</span>
              <span>abc@gmail.com</span>
            </div>
            <div className="py-2 d-flex align-items-center justify-content-around">
              <span>Phone:</span>
              <span>0909665789</span>
            </div>
          </div>
          <div className="payment-details">
            <div className="payment-selection">
              <div className="payment-seat py-2 d-flex align-items-center justify-content-around">
                <span>Regular Seat - A12</span>
                <div>
                  <span className="font-weight-bold">12.00$</span>
                  <button className="button-delete btn py-0 px-1">
                    <i className="fa fa-trash-alt text-danger"></i>
                  </button>
                </div>
              </div>
              <div className="payment-seat py-2 d-flex align-items-center justify-content-around">
                <span>Regular Seat - A12</span>
                <div>
                  <span className="font-weight-bold">12.00$</span>
                  <button className="button-delete btn py-0 px-1">
                    <i className="fa fa-trash-alt text-danger"></i>
                  </button>
                </div>
              </div>
              <div className="payment-seat py-2 d-flex align-items-center justify-content-around">
                <span>Regular Seat - A12</span>
                <div>
                  <span className="font-weight-bold">12.00$</span>
                  <button className="button-delete btn py-0 px-1">
                    <i className="fa fa-trash-alt text-danger"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="payment-total row">
              <div className="col-md-8"></div>
              <span className="col-md-4">24.00$</span>
            </div>
            <div className="payment-notice">
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
          </div>
        </div>
      </div>
      <div className="payment-button">
        <button className="btn btn-warning w-100 py-4">
          <span>Xác nhận thanh toán</span>
        </button>
      </div>
    </div>
  );
}
