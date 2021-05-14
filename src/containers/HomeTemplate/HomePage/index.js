import Carousel from "react-bootstrap/Carousel";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./style/index.css";
import ShowtimeTable from "components/ShowtimeTable";
import ListMoviePage from "./../ListMoviePage";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div>
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
      <div className="container py-3 d-flex justify-content-center align-items-center selecting-box">
        <TextField
          id="outlined-select-currency-native"
          select
          label="Phim"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          className="col-md-3"
        ></TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Rạp"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          className="col-md-3"
        ></TextField>

        <TextField
          id="outlined-select-currency-native"
          select
          label="Ngày xem"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          className="col-md-2"
        ></TextField>

        <TextField
          id="outlined-select-currency-native"
          select
          label="Suất chiếu"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          className="col-md-2"
        ></TextField>
        <div className="col-md-2 d-inline-block text-center">
          <Button className="bg-dark text-light" variant="contained">
            MUA VÉ NGAY
          </Button>
        </div>
      </div>

      <div>
        <div className="showtime-table py-5 ">
          <div className="button-transfer container text-center">
            <div className="btn active btn-decor from-center">ĐANG CHIẾU</div>
            <div className="btn btn-decor from-center">SẮP CHIẾU</div>
          </div>
          <div>
            <ListMoviePage />
          </div>
          <div className="my-3">
            <ShowtimeTable />
          </div>
        </div>
      </div>
    </div>
  );
}
