import { fetchMovieSchedule } from "components/MovieBox/modules/action";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";


export default function PopupMovie(props) {
    const history = useHistory();
    const [theatreSchedule, setTheatreSchedule] = useState(null);
    const [dateSchedule, setDateSchedule] = useState(null);
    const [error, setError] = useState(null);
    const [movie, setMovie] = useState({
      rap: "",
      ngayChieu: "",
      maLichChieu: "",
    });
    useEffect(() => {
      if (props.trigger) {
        setMovie({ ...movie, ngayChieu: "", maLichChieu: "" });
        document.getElementById("dateBox").value = "0";
        document.getElementById("timeBox").value = "0";
      }
    }, [movie.rap]);

    useEffect(() => {
      if(props.trigger){
        setMovie({ ...movie, maLichChieu: "" });
        document.getElementById("timeBox").value = "0";
      }
    }, [movie.ngayChieu]);
    const movieSchedule = useSelector(
      (state) => state.movieScheduleReducer.data
    );
    const data = useSelector((state) => state.detailMovieReducer.data);

    const giveCinemaOptions = () => {
      return (
        movieSchedule &&
        movieSchedule.heThongRapChieu.map((cinema) => {
          return (
            <option value={cinema.cumRapChieu[0].tenCumRap}>
              {cinema.cumRapChieu[0].tenCumRap}
            </option>
          );
        })
      );
    };
    const handleCinemaChange = (event) => {
      const { value } = event.target;
      movieSchedule.heThongRapChieu.map((cinema) => {
        if (cinema.cumRapChieu[0].tenCumRap === value) {
          setMovie({ ...movie, rap: cinema.cumRapChieu[0].tenCumRap });
          setTheatreSchedule(cinema.cumRapChieu[0].lichChieuPhim);
        }
      });
    };
    const giveDateOptions = (lichChieu) => {
      if (lichChieu) {
        let array = [];
        lichChieu.map((lich) => {
          let date = new Date(lich.ngayChieuGioChieu);
          let convertedDate = date.toLocaleDateString("en-GB");
          array.push(convertedDate);
        });
        array = array.filter((item, index) => {
          return array.indexOf(item) === index;
        });
        return array.map((date) => {
          return <option value={date}>{date}</option>;
        });
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
          pathname: `/booking/${movie.maLichChieu}`,
          state: {
            cinemaID: movie.maLichChieu,
          },
        });
      } else{
        history.push({
          pathname: "/log-in",
          state: {
            nextPathname: `/booking/${movie.maLichChieu}`,
            cinemaID: movie.maLichChieu,
          }
        })
      }
    }
  };



  return props.trigger ? (
    <div className="popup text-center">
      <div className="popup-inner">
        <div>
          <h3>Lịch chiếu phim</h3>
          <h4>{data && data.tenPhim}</h4>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <img src={data && data.hinhAnh} />
          </div>
          <div className="col-md-6">
            <div className="cinema-selection pb-4 mr-5">
              <select
                onChange={handleCinemaChange}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="0" selected>
                  Chọn rạp chiếu
                </option>
                {giveCinemaOptions()}
              </select>
            </div>
            <div className="date-selection pb-4 mr-5">
              <select
                id="dateBox"
                onChange={handleDateChange}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="0" selected>
                  Chọn ngày chiếu
                </option>
                {movie.rap && giveDateOptions(theatreSchedule)}
              </select>
            </div>
            <div className="time-selection pb-4 mr-5">
              <select
                onChange={handleTimeChange}
                id="timeBox"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="0" selected>
                  Chọn khung giờ
                </option>
                {giveTimeOptions(dateSchedule, theatreSchedule)}
              </select>
            </div>
            {error ? <div className="text-danger text-right">{error}</div> : ""}
            <div className="button-selection mr-5">
              <button
                onClick={() => handleOnSubmit()}
                className="btn btn-primary w-50"
              >
                ĐẶT VÉ
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.setTrigger(false);
          }}
          className="btn btn-danger close"
        >
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}