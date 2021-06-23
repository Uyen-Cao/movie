import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "components/MovieItem";
import Loader from "./../../../components/Loader";
import { actFetchListMovie } from "./modules/action";
import { connect } from "react-redux";
import "./styles/listMoviePage.css";

export default function ListMoviePage() {
  const data = useSelector((state) => state.listMovieReducer.data);
  const loading = useSelector((state) => state.listMovieReducer.loading);
  const [listMovieShow, setListMovieShow] = useState([]);
  const [currentButtonActive, setCurrentButtonActive] = useState(
    "btn btn-decor from-center"
  );
  const [soonButtonActive, setSoonButtonActive] = useState(
    "btn btn-decor from-center"
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchListMovie());
  }, []);
  useEffect(() => {
    if (data) {
      handleCurrentMovie();
    }
  }, [data]);

  const handleCurrentMovie = () => {
    let currentMovies = [];
    for (let i = 0; i <= 15; i++) {
      currentMovies.push(data[i]);
    }
    setCurrentButtonActive("btn btn-decor from-center btn-active");
    setSoonButtonActive("btn btn-decor from-center");
    setListMovieShow(currentMovies);
  };

  const handleSoonMovie = () => {
    let soonMovies = [];
    for (let i = 16; i <= 23; i++) {
      soonMovies.push(data[i]);
    }
    setCurrentButtonActive("btn btn-decor from-center");
    setSoonButtonActive("btn btn-decor from-center btn-active");
    setListMovieShow(soonMovies);
  };

  const renderListMovie = (listMovie) => {
    if (loading) {
      return <Loader />;
    }
    if (listMovie) {
      return listMovie.map((movie) => {
        return <MovieItem key={movie.maPhim} movie={movie} />;
      });
    }
  };

  return (
    <div className="container movie-wrapper">
      <div className="button-transfer container text-center">
        <button
          onClick={() => {
            handleCurrentMovie();
          }}
          className={currentButtonActive}
        >
          ĐANG CHIẾU
        </button>
        <button
          onClick={() => {
            handleSoonMovie();
          }}
          className={soonButtonActive}
        >
          SẮP CHIẾU
        </button>
      </div>
      <div className="row justify-content-between">
        {renderListMovie(listMovieShow)}
      </div>
    </div>
  );
}
