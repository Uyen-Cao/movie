import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style/index.css";

export default class MovieItem extends Component {
  triggerVideoTrailer = (trailer) => {
    console.log(trailer);
  };
  render() {
    const { movie } = this.props;
    return (
      <>
        <div className="py-4 box">
          <div className="box-img">
            <img className="card-img-top" src={movie.hinhAnh} alt="" />
          </div>
          <div className="content">
            <h4>{movie.tenPhim}</h4>
            <p>IMDB: {movie.danhGia}/10</p>
          </div>

          <div className="button">
            <li>
              <button
                onClick={() => {
                  this.triggerVideoTrailer(movie.trailer);
                }}
                className="b1 btn btn-danger "
                href="#"
              >
                Trailer
              </button>
            </li>
            <li>
              <Link to={`/detail/${movie.maPhim}`} className="b1">
                Thông tin
              </Link>
            </li>
          </div>
        </div>
      </>
    );
  }
}

MovieItem.propTypes = {
  movie: PropTypes.object,
};
