import React from "react";
import {useSelector} from "react-redux";
import "./seatSection.css";
import Seat from "../Seat";

export default function SeatSection(props) {
  const movieData = useSelector((state) => state.boxOfficeReducer.data);

  const renderSeat = () => {
    let seatGroup = [];
    let letterID = "A";
    let seatID = 0;
    for (let j = 1; j <= 10; j++) {
      seatID = seatID;
      if (j === 1) {
        letterID = letterID;
      } else {
        letterID = String.fromCharCode(letterID.charCodeAt() + 1);
      }
      let horizontalLine = [];
      for (let i = 1; i <= 16; i++) {
        seatID = seatID + 1;
        horizontalLine.push(<Seat seatRemovedByButton={props.seatRemovedByButton} getSeatRemove={props.getSeatRemove} getSeatSelect={props.getSeatSelect} key={seatID} id={seatID} />);
      }
      seatGroup.push(
        <div className="letterID">
          <span>{letterID}</span>
        </div>,
        horizontalLine,
        <div className="letterID">
          <span>{letterID}</span>
        </div>,
        <br />
      );
    }
    return seatGroup;
  };
  return (
    <div className="seat-container column">
      <div className="seat-movie">
        <div className="movie-place">
          <span>Cụm Rạp:</span>
          <span className="pl-2 font-weight-bold">{movieData && movieData.thongTinPhim.tenCumRap}</span>
        </div>
        <div className="movie-time">
          <span>Ngày chiếu:</span>
          <span className="pl-2 font-weight-bold">{movieData && movieData.thongTinPhim.ngayChieu}</span>
        </div>
        <div className="movie-date">
          <span>Giờ chiếu:</span>
          <span className="pl-2 font-weight-bold">{movieData && movieData.thongTinPhim.gioChieu}</span>
        </div>
        <div className="movie-cinema">
          <span>Rạp:</span>
          <span className="pl-2 font-weight-bold">{movieData && movieData.thongTinPhim.tenRap}</span>
        </div>
      </div>
      <div class="cinema-screen text-center"></div>
      <div className="text-center font-weight-bold pb-5">SCREEN</div>
      <div className="seat-group text-center">{renderSeat()}</div>
      <div className="seat-classify text-center">
        <div className="seat-button seat-icon">
          <span>Ghế đã chọn</span>
          <i className="pl-1 text-danger fa fa-stop"></i>
        </div>
        <div className="seat-button seat-icon">
          <span>Ghế đang chọn</span>
          <i className="pl-1 text-primary fa fa-stop"></i>
        </div>
        <div className="seat-button seat-icon">
          <span>Ghế trống</span>
          <i className="pl-1 fa fa-stop"></i>
        </div>
        <div className="seat-button seat-icon">
          <span>Ghế VIP</span>
          <i className="pl-1 text-warning fa fa-stop"></i>
        </div>
      </div>
    </div>
  );
}
