import React from "react";
import { Button } from "@material-ui/core";

export default function MovieSchedule({ movieSchedule }) {
  if (movieSchedule.length === 0) {
    return "";
  }

  const renderTime = (schedule) => {
    return schedule.map((scheduleEach) => {
      return (
        <Button className="mx-2" variant="contained">
          {scheduleEach.ngayChieuGioChieu}
        </Button>
      );
    });
  };

  return (
    <div className="movie-showtime my-2 container">
      <div className="row">
        <div className="col-md-3">
          <img className="w-100" src={movieSchedule.movieSchedule[0].hinhAnh} />
        </div>
        <div className="showtime-time d-inline col-md-9">
          <div className="movie-info text-left mx-3">
            <Button variant="contained" className="bg-warning">
              C16
            </Button>
            <span className="font-weight-bold mx-2">
              {movieSchedule.movieSchedule[0].tenPhim} -{" "}
              {movieSchedule.movieSchedule[0].lstLichChieuTheoPhim[0].tenRap}
            </span>
          </div>
          <div className="my-2 showtime-row text-center">
            {renderTime(movieSchedule.movieSchedule[0].lstLichChieuTheoPhim)}
          </div>
        </div>
      </div>
    </div>
  );
}
