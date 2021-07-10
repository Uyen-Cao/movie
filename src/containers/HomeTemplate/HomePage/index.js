import React, {useEffect} from "react";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import {useHistory} from "react-router-dom";
import "./style/index.css";
import ShowtimeTable from "components/ShowtimeTable";
import ListMoviePage from "./../ListMoviePage";
import MovieBox from "./../../../components/MovieBox";
import CarouselMovie from "components/CarouselMovie";

export default function HomePage() {
  const history = useHistory();

  useEffect(() => {
    if(history.location.state === null || history.location.state === undefined){
      return;
    }
    if(history.location.state !== null){
      if (history.location.state.from === "sign/up"){
        toast.success("Đăng ký thành công");
      } else if (history.location.state.from === "/log-in"){
        toast.success("Đăng nhập thành công");
    }
  }
}, [history])



  return (
    <div>
      <ToastContainer draggable={false} transition={Zoom} autoClose={3000}/>
      <CarouselMovie />
      <div>
        <MovieBox />
      </div>

      <div>
        <div className="showtime-table pb-3">
          <div id="list-movie">
            <ListMoviePage />
          </div>
          <div id="movie-schedule" className="my-3">
            <ShowtimeTable />
          </div>
        </div>
      </div>
    </div>
  );
}
