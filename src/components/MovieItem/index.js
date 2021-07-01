import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style/index.css";
import Popup from "components/Popup";

export default function MovieItem({ movie }) {
  const [button, setButton] = useState(false);

  return (
    <>
      <div className="py-4 box col-lg-3 col-md-4 col-sm-6">
        <div className="box-img text-center">
          <img className="card-img-top" src={movie.hinhAnh} alt="" />
        </div>
        <div className="content">
          <h4>{movie.tenPhim}</h4>
          <p>IMDB: {movie.danhGia}/10</p>
        </div>

        <div className="button">
          <li>
            <button
              onClick={() => setButton(true)}
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
      <div>
        <Popup
          movieTrailer={movie.trailer}
          trigger={button}
          setTrigger={setButton}
        />
      </div>
    </>
  );
}
