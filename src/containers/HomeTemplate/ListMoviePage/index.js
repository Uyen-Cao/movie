import React, { Component } from "react";
import MovieItem from "components/MovieItem";
import Loader from "./../../../components/Loader";
import { actFetchListMovie } from "./modules/action";
import { connect } from "react-redux";

class ListMoviePage extends Component {
  componentDidMount() {
    this.props.fetchListMovie();
  }

  // renderListMovive = () => {
  //   const { data, isLoading } = this.props;
  //   if (isLoading) return <Loader />;
  //   if (data) {
  //     return data.map((movie) => {
  //       return <MovieItem key={movie.maPhim} movie={movie} />;
  //     });
  //   }
  // };

  renderListMovive = () => {
    const { data, isLoading } = this.props;
    // if(isLoading) return <Loader />;

    return (
      (isLoading && <Loader />) ||
      (data &&
        data.map((movie) => {
          return <MovieItem key={movie.maPhim} movie={movie} />;
        }))
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-between">
          {this.renderListMovive()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actFetchListMovie());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
