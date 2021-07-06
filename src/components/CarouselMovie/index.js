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
            src={process.env.PUBLIC_URL + "/assets/avengers-poster.jpg"}
            alt="First slide"
          />
          <div className="text-light  movie-detail-carousel">
            <button className="btn btn-warning">C19</button>
            <h1>Avengers: End game</h1>
            <p>Rating: 8/10</p>
            <p>
              Sau chuyến hành trình độc nhất vô nhị không ngừng mở rộng và phát
              triển vụ trũ điện ảnh Marvel, bộ phim Avengers: Cuộc Chiến Vô Cực
              sẽ mang đến màn ảnh trận chiến cuối cùng khốc liệt nhất mọi thời
              đại. Biệt đội Avengers và các đồng minh siêu anh hùng của họ phải
              chấp nhận hy sinh tất cả để có thể chống lại kẻ thù hùng mạnh
              Thanos trước tham vọng hủy diệt toàn bộ vũ trụ của hắn.{" "}
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
            src={process.env.PUBLIC_URL + "/assets/addamfamily-poster.jpg"}
            alt="Second slide"
          />
          <div className="text-light  movie-detail-carousel">
            <button className="btn btn-warning">C19</button>
            <h1>THE ADDAMS FAMILY</h1>
            <p>Rating: 8/10</p>
            <p>
              Gia đình Addams là một bộ phim hài đen siêu nhiên hoạt hình máy
              tính năm 2019 do Conrad Vernon và Greg Tiernan đạo diễn và dựa
              trên các nhân vật do Charles Addams tạo ra.{" "}
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
            src={process.env.PUBLIC_URL + "/assets/spectre-poster.jpg"}
            alt="Third slide"
          />
          <div className="text-light  movie-detail-carousel">
            <button className="btn btn-warning">C19</button>
            <h1>Bond 24: SPECTRE</h1>
            <p>Rating: 8/10</p>
            <p>
              Nội dung phim kể về cuộc chạm mặt đầu tiên của James Bond với tổ
              chức tội phạm quốc tế S.P.E.C.T.R.E. (viết tắt của SPecial
              Executive for Counter-intelligence, Terrorism, Revenge and
              Extortion, dịch ra và gọi đơn giản là "Tổ chức Bóng Ma"), đưa tổ
              chức này trở lại với một bộ phim 007 của Eon Productions từ sau
              Diamonds Are Forever năm 1971,[N 2] và kết nối toàn bộ các phần
              phim 007 có Craig tham gia với một cốt truyện kết nối với các phim
              trước{" "}
            </p>
            <Button variant="contained">Trailer</Button>
            {/* <Button className="mx-3" variant="contained" color="secondary">
              Mua vé ngay
            </Button> */}
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
