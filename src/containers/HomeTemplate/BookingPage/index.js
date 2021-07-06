import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive'
import SeatSection from "./SeatSection";
import PaymentSection from "./PaymentSection";
import Menu from "./MenuSection";
import { fetchBoxOffice } from "./modules/action";

export default function BookingPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("UserLogin"));
  const [seatRemove, setSeatRemove] = useState(null)
  const [seatBooking, setSeatBooking] = useState({
    maLichChieu: history && history.location.state.cinemaID,
    danhSachVe: [],
    taiKhoanNguoiDung: user && user.taiKhoan,
  });
  const getSeatSelect = (seatSelected) => {
    setSeatBooking({
      ...seatBooking,
      danhSachVe: [...seatBooking.danhSachVe, seatSelected],
    });
  };
  const getSeatRemove = (seatRemoved) => {
    const newSeatSelected = seatBooking.danhSachVe.filter((seat) => seat.maGhe !== seatRemoved.maGhe);
    setSeatBooking({...seatBooking, danhSachVe: newSeatSelected})
  }
  useEffect(() => {
    dispatch(fetchBoxOffice(history.location.state.cinemaID));
  }, []);
  const getSeatRemoveByButton = (seat) => {
    setSeatRemove({...seat})
  }
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })

//   useEffect(() => {
//       console.log(seatBooking);
//   }, [seatBooking])

  return (
    <div className="booking container p-0 pt-1">
      {isTabletOrMobile && <div>1234</div>}
      {isDesktopOrLaptop &&
        <div className="row">
        <div className="booking-seat pr-0 col-8">
          <Menu />
          <SeatSection seatRemovedByButton={seatRemove} getSeatRemove={getSeatRemove} getSeatSelect={getSeatSelect} />
        </div>
        <div className="booking-payment p-0 col-4">
          <PaymentSection getSeatRemoveByButton={getSeatRemoveByButton} seatSelected={seatBooking} />
        </div>
      </div>
      }
    </div>
  );
}
