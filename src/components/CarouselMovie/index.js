import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./styles/carousel.css";
import Button from "@material-ui/core/Button";

export default function CarouselMovie() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.hdqwalls.com/download/avengers-infinity-war-2018-10k-poster-yp-7680x4320.jpg"
            alt="First slide"
          />
          <div className="text-light  movie-detail-carousel">
            <button className="btn btn-warning">C19</button>
            <h1>Avengers: End game</h1>
            <p>Rating: 8/10</p>
            <p>
              Lorem ipsum abc consule manika lala sushiajino apakalama ipsum abc
              consule manika lala sushiajino apakalama ipsum abc consule manika
              lala sushiajino apakalama ipsum abc consule manika lala sushiajino
              apakalama ipsum abc consule manika lala sushiajino apakalama ipsum
              abc consule manika lala sushiajino apakalama{" "}
            </p>
            <Button variant="contained">Trailer</Button>
            <Button className="mx-3" variant="contained" color="secondary">
              Mua vé ngay
            </Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp3278769.jpg"
            alt="Second slide"
          />
          <div className="text-light  movie-detail-carousel">
            <button className="btn btn-warning">C19</button>
            <h1>DEADPOOL 2</h1>
            <p>Rating: 8/10</p>
            <p>
              Lorem ipsum abc consule manika lala sushiajino apakalama ipsum abc
              consule manika lala sushiajino apakalama ipsum abc consule manika
              lala sushiajino apakalama ipsum abc consule manika lala sushiajino
              apakalama ipsum abc consule manika lala sushiajino apakalama ipsum
              abc consule manika lala sushiajino apakalama{" "}
            </p>
            <Button variant="contained">Trailer</Button>
            <Button className="mx-3" variant="contained" color="secondary">
              Mua vé ngay
            </Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/805697.jpg"
            alt="Third slide"
          />
          <div className="text-light  movie-detail-carousel">
            <button className="btn btn-warning">C19</button>
            <h1>Bond 24: SPECTRE</h1>
            <p>Rating: 8/10</p>
            <p>
              Lorem ipsum abc consule manika lala sushiajino apakalama ipsum abc
              consule manika lala sushiajino apakalama ipsum abc consule manika
              lala sushiajino apakalama ipsum abc consule manika lala sushiajino
              apakalama ipsum abc consule manika lala sushiajino apakalama ipsum
              abc consule manika lala sushiajino apakalama{" "}
            </p>
            <Button variant="contained">Trailer</Button>
            <Button className="mx-3" variant="contained" color="secondary">
              Mua vé ngay
            </Button>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
