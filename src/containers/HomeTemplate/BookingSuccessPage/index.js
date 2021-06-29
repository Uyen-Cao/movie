import React from "react";
import { useHistory } from "react-router-dom";

export default function BookingSuccessPage() {
  const history = useHistory();
  const getBackToHomePage = () => {
      history.push("/")
  }
  return (
    <div className="container text-center">
      <img
        className="w-25"
        src="https://hoclammypham.com.vn/wp-content/uploads/icon-check-2.png"
      ></img>
      <br />
      <br />
      <span>Đặt vé thành công!</span>
      <br />
      <span>Chúng tôi sẽ sớm liên hệ để xác nhận vé đã đặt!</span>
      <br />
      <span>Cám ơn và chúc bạn một ngày vui vẻ</span>
      <br />
      <br />
      <button onClick={() => getBackToHomePage()} className=" btn btn-primary">Quay lại trang chủ</button>
    </div>
  );
}
