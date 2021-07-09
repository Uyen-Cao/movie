import React, { useEffect, useState } from "react";
import "./style/index.css";
import { Button } from "@material-ui/core";
import { fetchDetailMovie } from "./modules/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from "components/Loader";
import Popup from "components/Popup";
import PopupMovie from "components/PopupMovie";
import { fetchMovieSchedule } from "components/MovieBox/modules/action";

export default function MovieDetailPage(props) {
  const [button, setButton] = useState(false);
  const [bookingButton, setBookingButton] = useState(false)
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detailMovieReducer.data);
  const loading = useSelector((state) => state.detailMovieReducer.loading);

  useEffect(() => {
    dispatch(fetchDetailMovie(props.match.params.id));
  }, []);

  return (
    <div className="movie-layout">
      <div className="movie-menubar"></div>
      <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background-detail.jpg'})`,}} className="movie-carousel">
        <div className="container movie-details">
          <div className="row outer-wrapper text-center">
            <div className="movie-content col-6 col-sm-6 col-md-6 col-xl-8 text-left text-light">
              <Button className="button-limitage" variant="contained">
                C18
              </Button>
              <h1 className="text-light">{data && data.tenPhim}</h1>
              <p>Rated: {data && data.danhGia}</p>
              <p>{data && data.moTa}</p>
              <div className="movie-rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-alt"></i>
              </div>

              <div className="details-btn">
                <Button
                  onClick={() => {
                    setBookingButton(true);
                    dispatch(fetchMovieSchedule(data.maPhim));
                  }}
                  variant="contained"
                  color="secondary"
                >
                  Đặt vé
                </Button>
                <Button
                  onClick={() => setButton(true)}
                  className="mx-2 my-3"
                  variant="contained"
                >
                  Trailer
                </Button>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-xl-4 movie-poster">
              {loading ? <Loader /> : <img src={data && data.hinhAnh} />}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Popup
          movieTrailer={data && data.trailer}
          trigger={button}
          setTrigger={setButton}
        />
      </div>
      <div>
        <PopupMovie
          data={data}
          trigger={bookingButton}
          setTrigger={setBookingButton}
        />
      </div>
    </div>
  );
}
