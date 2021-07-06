import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';
import MovieItem from "components/MovieItem";
import Loader from "./../../../components/Loader";
import Popup from "components/Popup";
import { actFetchListMovie } from "./modules/action";
import "./styles/listMoviePage.css";

export default function ListMoviePage() {
  const data = useSelector((state) => state.listMovieReducer.data);
  const loading = useSelector((state) => state.listMovieReducer.loading);
  const [button, setButton] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState("")
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

  const handleOpenPopUp = (isOpened, movieTrailer) => {
    setButton(isOpened);
    setMovieTrailer(movieTrailer)
  }

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
        return <MovieItem handleOpenPopUp={handleOpenPopUp} key={movie.maPhim} movie={movie} />;
      });
    }
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          rows: 2,
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          rows: 1,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }

    ]
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
      <Slider {...settings} className="row justify-content-between text-center">
        {renderListMovie(listMovieShow)}
      </Slider>
      <div>
        <Popup
          movieTrailer={movieTrailer}
          trigger={button}
          setTrigger={setButton}
        />
      </div>
    </div>
  );
}
