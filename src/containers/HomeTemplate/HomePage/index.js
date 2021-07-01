import Carousel from "react-bootstrap/Carousel";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import "./style/index.css";
import ShowtimeTable from "components/ShowtimeTable";
import ListMoviePage from "./../ListMoviePage";
import MovieBox from "./../../../components/MovieBox";
import CarouselMovie from "components/CarouselMovie";

export default function HomePage() {
  return (
    <div>
      <CarouselMovie />
      <div>
        <MovieBox />
      </div>

      <div>
        <div className="showtime-table py-5 ">
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
