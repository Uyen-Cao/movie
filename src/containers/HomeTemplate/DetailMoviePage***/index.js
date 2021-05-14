import React, { Component } from "react";
import { actFetchDetailMovie } from "./modules/action";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";

class DetailMoviePage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchDetailMovie(id);
  }

  renderTable = () => {
    const { data } = this.props;
    if (data && data.lichChieu) {
      return data.lichChieu.map((item) => (
        <tr key={item.maLichChieu}>
          <td>{item.thongTinRap.tenCumRap}</td>
          <td>{item.thongTinRap.tenRap}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
          <td>
            <button className="btn btn-success">Mua vé</button>
          </td>
        </tr>
      ));
    }
  };

  render() {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container">
        <h3>DetailMoviePage</h3>
        <div className="row">
          <div className="col-sm-6">
            <img className="img-fluid" src={data && data.hinhAnh} alt="" />
          </div>
          <div className="col-sm-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Ten Phim</td>
                  <td>{data && data.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mo ta</td>
                  <td>{data && data.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Cum Rap</th>
                  <th>Ten Rap</th>
                  <th>Ngay Chieu</th>
                  <th>Gio Chieu</th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    data: state.detailMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailMovie: (id) => {
      dispatch(actFetchDetailMovie(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
