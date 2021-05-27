import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./styles/movieBox.css";

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

export default function MovieBox() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div>
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
    </div>
  );
}
