import React, { useEffect } from "react";
import "./style/index.css";
import { Button } from "@material-ui/core";
import { fetchDetailMovie } from "./modules/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from "components/Loader";
import ShowtimeTable from "components/ShowtimeTable";

export default function MovieDetailPage(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detailMovieReducer.data);
  const loading = useSelector((state) => state.detailMovieReducer.loading);
  const error = useSelector((state) => state.detailMovieReducer.error);

  useEffect(() => {
    dispatch(fetchDetailMovie(props.match.params.id));
  });

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="movie-layout">
      <div className="movie-menubar"></div>
      <div className="movie-carousel">
        <div className="container movie-details">
          <div className="row text-center">
            <div className="movie-content col-8 text-left text-light">
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
                <Button variant="contained" color="secondary">
                  Đặt vé
                </Button>
                <Button className="mx-2 my-3" variant="contained">
                  Trailer
                </Button>
              </div>
            </div>
            <div className="col-4">
              <img className="movie-poster" src={data && data.hinhAnh} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
