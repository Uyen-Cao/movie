import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "components/MovieItem";
import Loader from "./../../../components/Loader";
import { actFetchListMovie } from "./modules/action";
import { connect } from "react-redux";

export default function ListMoviePage() {
  const data = useSelector((state) => state.listMovieReducer.data);
  const loading = useSelector((state) => state.listMovieReducer.loading);
  const [listMovieShow, setListMovieShow] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchListMovie());
  }, []);

  const currentMovieArray = (movieArray) => {
    let currentMovies = [];
    for (let i = 0; i <= 11; i++) {
      console.log(movieArray[i]);
      currentMovies.push(movieArray[i]);
    }
    return currentMovies;
  };
  const soonMovieArray = (movieArray) => {
    let soonMovies = [];
    for (let i = 12; i <= 23; i++) {
      console.log(movieArray[i]);
      soonMovies.push(movieArray[i]);
    }
    return soonMovies;
  };

  const renderListMovie = () => {
    if (loading) {
      return <Loader />;
    }
    if (data) {
      const soonMovies = soonMovieArray(data);
      return soonMovies.map((movie) => {
        return <MovieItem key={movie.maPhim} movie={movie} />;
      });
    }
  };
  // const renderCurrentListMovie = () => {};
  // const renderSoonListMovie = () => {
  //   console.log(321);
  // };

  return (
    <div className="container">
      <div className="button-transfer container text-center">
        <button
          // onClick={() => {
          //   renderCurrentListMovie();
          // }}
          className="btn btn-decor from-center"
        >
          ĐANG CHIẾU
        </button>
        <button
          // onClick={() => {
          //   renderSoonListMovie();
          // }}
          className="btn btn-decor from-center"
        >
          SẮP CHIẾU
        </button>
      </div>
      <div className="row justify-content-between">{renderListMovie()}</div>
    </div>
  );
}
