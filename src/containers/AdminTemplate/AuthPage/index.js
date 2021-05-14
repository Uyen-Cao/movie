import React, { useState } from "react";
import { fetchLoginAuth } from "./modules/action";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./../../../components/Loader";

function AuthPage(props) {
  const [state, setState] = useState({ taiKhoan: "", matKhau: "" });

  const dispatch = useDispatch();
  // const { loading } = props;
  const loading = useSelector((state) => state.authReducer.loading);
  const error = useSelector((state) => state.authReducer.error);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(fetchLoginAuth(state, props.history));
  };

  if (loading) return <Loader />;

  const renderNoti = () => {
    // const { error } = props;
    // if (error)
    //   return <div className="alert alert-danger">{error.response.data}</div>;
    return (
      error && <div className="alert alert-danger">{error.response.data}</div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h3>AuthPage</h3>
          {renderNoti()}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                onChange={handleOnchange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     loading: state.authReducer.loading,
//     error: state.authReducer.error,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchLogin: (user) => {
//       dispatch(fetchLoginAuth(user));
//     },
//   };
// };

export default AuthPage;
// export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
