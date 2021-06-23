import React, { useEffect, useState } from "react";
import "./style/index.css";
import { useDispatch, useSelector } from "react-redux";

export default function CinemaItem({ cinema, getCinemaSelected, activeCinema }) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false)
  const data = useSelector((state) => state.cinemaPlaceReducer.data);
  useEffect(() => {
    if(activeCinema && activeCinema === cinema.maHeThongRap){
      setActive(true)
    }else{
      setActive(false)
    }
  }, [activeCinema])

  const handleSendCinemaID = (cinemaID) => {
    getCinemaSelected(cinemaID)
  };

  return (
    <div className="logo-row">
      <button
        className={`btn-logo ${active ? "btn-active" : ""}`}
        onClick={() => {
          handleSendCinemaID(cinema.maHeThongRap);
        }}
      >
        <img src={cinema.logo} />
      </button>
    </div>
  );
}
