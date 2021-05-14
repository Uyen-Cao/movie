import React, { useEffect } from "react";
import "./style/index.css";
import { fetchCinemaPlace } from "./modules/action";
import { useDispatch, useSelector } from "react-redux";
import CinemaPlace from "../cinemaPlaces";

export default function CinemaItem({ cinema }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cinemaPlaceReducer.data);

  const handleSendCinemaID = (cinemaID) => {
    dispatch(fetchCinemaPlace(cinemaID));
  };

  return (
    <div className="logo-row">
      <button
        className="btn-logo"
        onClick={() => {
          handleSendCinemaID(cinema.maHeThongRap);
        }}
      >
        <img src={cinema.logo} />
      </button>
    </div>
  );
}
