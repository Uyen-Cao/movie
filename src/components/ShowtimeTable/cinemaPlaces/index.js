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
      className={`column border-bottom py-2 align-items-center btn-place ${active ? "btn-active" : ""}`}
    >
      <div className="">
        <img
          className="w-75"
          src="https://mag-cinema.com/image/catalog/News/2020/mammut1.jpg"
        />
      </div>
      <div className="">
        <span className="font-weight-bold">{props.place.tenCumRap}</span>
        <p>{props.place.diaChi}</p>
      </div>
    </button>
  );
}
