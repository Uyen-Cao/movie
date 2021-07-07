import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./styles/movieBox.css";
import { fetchMovieSchedule } from "./modules/action";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function MovieBox() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const listMovie = useSelector((state) => state.listMovieReducer.data);
  const movieSchedule = useSelector((state) => state.movieScheduleReducer.data);
  const [movie, setMovie] = useState({
    maPhim: "",
    rap: "",
    ngayChieu: "",
    maLichChieu: "",
  });
  const [theatreSchedule, setTheatreSchedule] = useState(null);
  const [dateSchedule, setDateSchedule] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMovie({ ...movie, rap: "", ngayChieu: "", maLichChieu: "" });
  }, [movie.maPhim]);

  useEffect(() => {
    setMovie({...movie, ngayChieu: "", maLichChieu:""});
    document.getElementById("dateBox").value = "0";
    document.getElementById("timeBox").value = "0";
  }, [movie.rap])

  useEffect(() => {
    setMovie({...movie, maLichChieu:""});
    document.getElementById("timeBox").value = "0";
  }, [movie.ngayChieu])

  // Select-Film Box
  const giveFilmOptions = () => {
    return (
      listMovie &&
      listMovie.map((movie) => {
        return <option value={movie.maPhim}>{movie.tenPhim}</option>;
      })
    );
  };
  const handleFilmChange = (event) => {
    dispatch(fetchMovieSchedule(event.target.value));
    setMovie({ ...movie, maPhim: event.target.value });
  };
  // Select-Theater Box
  const giveTheaterOptions = () => {
    return (
      movieSchedule &&
      movieSchedule.heThongRapChieu.map((theater) => {
        return (
          <option value={theater.cumRapChieu[0].tenCumRap}>
            {theater && theater.cumRapChieu[0].tenCumRap}
          </option>
        );
      })
    );
  };
  const handleTheaterChange = (event) => {
    const { value } = event.target;
    movieSchedule.heThongRapChieu.map((cinema) => {
      if (cinema.cumRapChieu[0].tenCumRap === value) {
        setMovie({ ...movie, rap: cinema.cumRapChieu[0].tenCumRap });
        setTheatreSchedule(cinema.cumRapChieu[0].lichChieuPhim);
      }
    });
  };
  // Select-Date Box
  const giveDateOptions = (lichChieu) => {
    if (lichChieu) {
      let array = [];
      lichChieu.map((lich) => {
        let date = new Date(lich.ngayChieuGioChieu);
        let convertedDate = date.toLocaleDateString("en-GB");
        array.push(convertedDate);
      });
      array = array.filter((item, index) => {
        return array.indexOf(item) === index
      });
      return array.map((date) => {
        return <option value={date}>{date}</option>
      })
    }
  };
  const handleDateChange = (event) => {
    setMovie({ ...movie, ngayChieu: event.target.value });
    setDateSchedule(event.target.value);
  };

  const giveTimeOptions = (thoiGian, ngayThang) => {
    if (ngayThang && thoiGian) {
      let array = [];
      for (let i = 0; i < ngayThang.length; i++) {
        let ngayGio = new Date(ngayThang[i].ngayChieuGioChieu);
        let ngay = ngayGio.toLocaleDateString("en-GB");
        let gio = ngayGio.toLocaleTimeString();
        if (ngay === thoiGian) {
          array.push(<option value={ngayThang[i].maLichChieu}>{gio}</option>);
        }
      }
      return array;
    }
  };

  const handleTimeChange = (event) => {
    setMovie({ ...movie, maLichChieu: event.target.value });
  };
  const handleOnSubmit = () => {
    if (movie.maLichChieu === "" || movie.maLichChieu === "Suất chiếu") {
      setError("Xin hãy chọn lịch chiếu phù hợp");
    } else {
      if(localStorage.getItem("UserLogin")){
        history.push({
          pathname: `booking/${movie.maLichChieu}`,
          state: {
            cinemaID: movie.maLichChieu,
          },
        });
      } else{
        history.push({
          pathname: "/log-in",
          state: {
            nextPathname: `booking/${movie.maLichChieu}`,
            cinemaID: movie.maLichChieu,
          }
        })
      }
    }
  };

  return (
 
      <div className="container py-3 selecting-box">
        <form className="row justify-content-center">
          <select
            className="form-select film-box mt-1 col-sm-5 col-md-3"
            aria-label="Default select example"
            onChange={handleFilmChange}
          >
            <option selected>Phim</option>
            {giveFilmOptions()}
          </select>
          <select
            className="form-select theatre-box mt-1 col-sm-5  col-md-2"
            aria-label="Default select example"
            onChange={handleTheaterChange}
          >
            <option selected>Rạp</option>
            {movie.maPhim && giveTheaterOptions()}
          </select>
          <select
            id="dateBox"
            className="form-select date-box mt-1 col-sm-5 col-md-2"
            aria-label="Default select example"
            onChange={handleDateChange}
          >
            <option value="0" selected>Ngày xem</option>
            {movie.rap && giveDateOptions(theatreSchedule)}
          </select>
          <select
            id="timeBox"
            className="form-select time-box mt-1 col-sm-5 col-md-2"
            aria-label="Default select example"
            onChange={handleTimeChange}
          >
            <option value="0" selected>Suất chiếu</option>
            {movie.ngayChieu && giveTimeOptions(dateSchedule, theatreSchedule)}
          </select>
          <div className=" d-inline text-center">
            <Button
              type="button"
              className="bg-dark m-1 text-light"
              variant="contained"
              onClick={() => handleOnSubmit()}
            >
              MUA VÉ NGAY
            </Button>
          </div>
        </form>
        {error ? <div className="text-danger text-right">{error}</div> : ""}
      </div>
   
  );
}
