import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../SeatSection/seatSection.css";

export default function Seat(props) {
  const seatBooked = useSelector((state) => state.boxOfficeReducer.data);
  const [seatVip, setSeatVip] = useState(false);
  const [seatSelected, setSeatSelected] = useState(false);
  const [seatID, setSeatID] = useState("");
  const [seatDisabled, setSeatDisabled] = useState(false);
  useEffect(() => {
    filterVipSeat(props.id);
  }, []);
  useEffect(() => {
    if(props.seatRemovedByButton && props.seatRemovedByButton.maGhe === seatID){
      setSeatSelected(false)
      props.getSeatRemove(props.seatRemovedByButton);
      filterVipSeat(props.seatRemovedByButton.tenGhe);
    };
  }, [props.seatRemovedByButton])
  useEffect(() => {
    seatBooked &&
      seatBooked.danhSachGhe.forEach((seat) => {
        if (seat.tenGhe == props.id) {
          setSeatID(seat.maGhe);
        }
        if (seat.daDat && seat.tenGhe == props.id) {
          setSeatDisabled(true);
          setSeatVip(false);
        }
      });
  }, [seatBooked]);
  const filterVipSeat = (id) => {
    let seat = 0;
    let lastSeat = 30;
    for (let i = 1; i <= 6; i++) {
      seat = lastSeat + 5;
      lastSeat = seat + 11;
      if (id >= seat && id <= lastSeat) {
        setSeatVip(true);
      }
    }
  };
  const handleSelectSeat = (seat) => {
    if (seatSelected === false) {
      setSeatSelected(true);
      setSeatVip(false);
      props.getSeatSelect(seat);
    } else {
      setSeatSelected(false);
      filterVipSeat(parseInt(seat.tenGhe));
      props.getSeatRemove(seat);
    }
  };
  return (
    <>
      <button
        disabled={seatDisabled}
        onClick={() =>
          handleSelectSeat( { tenGhe: props.id, maGhe: seatID, giaVe: seatVip ? 90000 : 75000 })
        }
        id={seatID}
        className={`btn px-1 py-0 seat-button
          ${seatDisabled ? "text-danger" : ""}
        ${seatSelected ? "text-primary" : ""} ${seatVip ? "text-warning" : ""}
         `}
      >
        <i class="fa fa-stop"></i>
      </button>
    </>
  );
}
