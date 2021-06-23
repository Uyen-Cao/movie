import React from "react";
import "./movieSchedule.css"

export default function MovieSchedule({ movieSchedule }) {
  if (movieSchedule.length === 0) {
    return "";
  }

  const renderTime = (schedule) => {
    if (schedule) {
      let array = [];
      schedule.map((each) => {
        let date = new Date(each.ngayChieuGioChieu);
        let time = date.toLocaleTimeString();
        array.push(time);
      });
      return array.map((item, index) => {
        if(index > 5){
          return;
        }
        return (<button className=" ml-1 my-2 btn btn-primary">{item}</button>);
      });
    }
  };

  return (
    <div className="movie-showtime my-2 container">
      <div className="row">
        <div className="col-md-3">
          <img className="w-100" src={movieSchedule.movieSchedule[0].hinhAnh} />
        </div>
        <div className="showtime-time d-inline col-md-9">
          <div className="movie-info text-left mx-3">
            <button className="btn btn-warning" >
              C16
            </button>
            <span className="font-weight-bold mx-2">
              {movieSchedule.movieSchedule[0].tenPhim} -{" "}
              {movieSchedule.movieSchedule[0].lstLichChieuTheoPhim[0].tenRap}
            </span>
          </div>
          <div className="my-2 showtime-row">
            {renderTime(movieSchedule.movieSchedule[0].lstLichChieuTheoPhim)}
          </div>
        </div>
      </div>
    </div>
  );
}
