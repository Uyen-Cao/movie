import React from "react";
import "./style/index.css";
import MovieSchedule from "../movieSchedule";

export default function CinemaPlace(props) {
  const handleMovieSchedule = (movieList) => {
    props.getCinemaSchedule(movieList);
  };

  return (
    <button
      onClick={() => {
        handleMovieSchedule(props.place.danhSachPhim);
      }}
      className="row border-bottom py-2 align-items-center btn-place"
    >
      <div className="col-md-6">
        <img
          className="w-100"
          src="https://mag-cinema.com/image/catalog/News/2020/mammut1.jpg"
        />
      </div>
      <div className="col-md-6">
        <span className="font-weight-bold">{props.place.tenCumRap}</span>
        <p>{props.place.diaChi}</p>
      </div>
    </button>
  );
}
