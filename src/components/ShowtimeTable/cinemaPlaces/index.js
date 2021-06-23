import React, { useEffect,useState } from "react";
import "./style/index.css";
import MovieSchedule from "../movieSchedule";

export default function CinemaPlace(props) {
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (props.selectedPlace && props.selectedPlace.tenCumRap === props.place.tenCumRap) {
      props.getCinemaSchedule(props.selectedPlace.danhSachPhim);
      setActive(true)
    } else{
      setActive(false)
    }
  }, [props.selectedPlace]);
  const handleMovieSchedule = (place) => {
    props.activatedCinemaPlace(place)
    props.getCinemaSchedule(place.danhSachPhim);
  };

  return (
    <button
      onClick={() => {
        handleMovieSchedule(props.place);
      }}
      className={`row border-bottom py-2 align-items-center btn-place ${active ? "btn-active" : ""}`}
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
