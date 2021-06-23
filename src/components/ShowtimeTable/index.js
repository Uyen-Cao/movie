import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./showtimeTable.css";
import { Button } from "@material-ui/core";
import { fetchCinemaList } from "./modules/action";
import { fetchCinemaPlace } from "./cinemaItem/modules/action";
import CinemaItem from "./cinemaItem";
import CinemaPlace from "./cinemaPlaces";
import Loader from "../../components/Loader";
import MovieSchedule from "./movieSchedule";

export default function ShowtimeTable() {
  const [movieSchedule, setMovieSchedule] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState("BHDStar")
  const [selectedPlace, setSelectedPlace] = useState()
  const dispatch = useDispatch();
  const cinemaList = useSelector((state) => state.cinemaListReducer.data);
  const cinemaPlaces = useSelector((state) => state.cinemaPlaceReducer.data);
  const isLoading = useSelector((state) => state.cinemaPlaceReducer.loading);
  useEffect(() => {
    dispatch(fetchCinemaList());
    dispatch(fetchCinemaPlace(selectedCinema))
  }, []);
  useEffect(() => {
    dispatch(fetchCinemaPlace(selectedCinema))
  }, [selectedCinema])
  useEffect(() => {
    if(cinemaPlaces){
      setSelectedPlace(cinemaPlaces[0].lstCumRap[0])
    }
  }, [cinemaPlaces])

  const activatedSelection = (cinemaID) => {
    setSelectedCinema(cinemaID)
  }

  const activatedCinemaPlace = (place) => {
    setSelectedPlace(place)
  }

  const renderCinemaList = () => {
    return (
      cinemaList &&
      cinemaList.map((cinema) => {
        return <CinemaItem activeCinema={selectedCinema} getCinemaSelected={activatedSelection} cinema={cinema} />;
      })
    );
  };

  const renderCinemaPlace = () => {
    if (cinemaPlaces) {
      return (
        (isLoading && <Loader />) ||
        cinemaPlaces[0].lstCumRap.map((place) => {
          return (
            <CinemaPlace
            activatedCinemaPlace={activatedCinemaPlace}
              selectedPlace={selectedPlace}
              place={place}
              getCinemaSchedule={(movieList) => {
                setMovieSchedule({ movieSchedule: movieList });
              }}
            />
          );
        })
      );
    }
  };
  const renderCinemaSchedule = () => {
    if (movieSchedule) {
      return (
        (isLoading && <Loader />) || (
          <MovieSchedule movieSchedule={movieSchedule} />
        )
      );
    } else {
      console.log("hong co");
    }
  };

  return (
    <div className="container movie-box-wrapper">
      <table className="w-100">
        <thead className="text-center">
          <tr className="row header-table">
            <th className="col-md-2 title-block">Cụm rạp</th>
            <th className="col-md-3 title-block">Địa điểm</th>
            <th className="col-md-7 title-block">Suất chiếu</th>
          </tr>
        </thead>
          <tbody className="container">
            <div className="row movie-table-layout">
            <div className="col-md-2 cinema-row">
              <div className="logo-list">{renderCinemaList()}</div>
            </div>
            <div className="col-md-3 cinema-list container">
              <div className="w-100">{renderCinemaPlace()}</div>
            </div>
            <div className="col-md-7">{renderCinemaSchedule()}</div>
          </div>
        </tbody>
      </table>
    </div>
  );
}
