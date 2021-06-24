import React from 'react'
import "./seatSection.css"

export default function SeatSection() {

    const renderSeat = () => {
        let seatGroup = [];
        let letterID = "A";
        let seatID = 0;
        for (let j = 1; j <= 10; j++) {
          seatID = seatID;
          if(j === 1){
            letterID = letterID
          } else{
            letterID = String.fromCharCode(letterID.charCodeAt() + 1)
          }
          let horizontalLine = [];
          for (let i = 1; i <= 16; i++) {
            seatID = seatID + 1;
            horizontalLine.push(
              <button id={seatID} className="btn px-1 py-0 seat-button">
                <i class="fa fa-stop"></i>
              </button>
            );
          }
          seatGroup.push(<div className="letterID"><span>{letterID}</span></div>, horizontalLine, <div className="letterID"><span>{letterID}</span></div>, <br/>);
        }
        return seatGroup;
    }
    return (
      <div className="seat-container column">
        <div className="seat-movie">
          <div className="movie-place">
            <span>Cụm Rạp:</span>
            <span className="pl-2 font-weight-bold">CGV Phạm Hùng Cineplex</span>
          </div>
          <div className="movie-time">
            <span>Ngày chiếu:</span>
            <span className="pl-2 font-weight-bold">1/9/2021</span>
          </div>
          <div className="movie-date">
            <span>Giờ chiếu:</span>
            <span className="pl-2 font-weight-bold">10:00 AM</span>
          </div>
          <div className="movie-cinema">
            <span>Rạp:</span>
            <spa className="pl-2 font-weight-bold">9</spa>
          </div>
        </div>
        <div className="seat-group text-center">
            {renderSeat()}
        </div>
        <div className="seat-classify text-center">
            <div className="seat-button seat-icon">
                <span>Ghế đã chọn</span>
                <i className="text-danger fa fa-stop"></i>
            </div>
            <div className="seat-button seat-icon">
                <span>Ghế đang chọn</span>
                <i className="text-primary fa fa-stop"></i>
            </div>
            <div className="seat-button seat-icon">
                <span>Ghế trống</span>
                <i className="fa fa-stop"></i>
            </div>
            <div className="seat-button seat-icon">
                <span>Ghế VIP</span>
                <i className="text-warning fa fa-stop"></i>
            </div>
        </div>
      </div>
    );
}
