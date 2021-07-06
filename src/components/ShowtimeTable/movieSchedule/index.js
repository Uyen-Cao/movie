import React from "react";
import {useHistory} from "react-router-dom";
import "./movieSchedule.css"

export default function MovieSchedule({ movieSchedule }) {
  const history = useHistory();
  if (movieSchedule.length === 0) {
    return "";
  }

  const moveToCinema = (cinemaID) => {
    if(localStorage.getItem("UserLogin")){
      history.push({
        pathname: `booking/${cinemaID}`,
        state: {
          cinemaID: cinemaID,
        },
      });
    } else{
      history.push({
        pathname: "/log-in",
        state: {
          nextPathname: `booking/${cinemaID}`,
          cinemaID: cinemaID,
        }
      })
    }
  }

  const renderTime = (schedule) => {
    if (schedule) {
      let array = [];
      schedule.map((each) => {
        let date = new Date(each.ngayChieuGioChieu);
        let time = date.toLocaleTimeString();
        array.push({time: time, cinemaID: each.maLichChieu});
      });
      return array.map((item, index) => {
        if(index > 5){
          return;
        }
        return (<button onClick={() => moveToCinema(item.cinemaID)} className=" ml-1 my-2 btn btn-primary">{item.time}</button>);
      });
    }
  };

  return (
    <div className="movie-showtime my-2 container">
      <div className="row">
        <div className="col-md-5 col-xl-3">
          <img className="w-100" src={movieSchedule.movieSchedule[0].hinhAnh} />
        </div>
        <div className="showtime-time text-center d-inline col-md-7 col-xl-9">
          <div className="movie-info text-left mx-3">
            <span className="font-weight-bold mx-2">
              {movieSchedule.movieSchedule[0].tenPhim} -{" "}
              {movieSchedule.movieSchedule[0].lstLichChieuTheoPhim[0].tenRap}
            </span>
          </div>
          <div className="my-2 showtime-row">
            {renderTime(movieSchedule.movieSchedule[0].lstLichChieuTheoPhim)}
          </div>
        </div>
      </div>
    </div>
  );
}
