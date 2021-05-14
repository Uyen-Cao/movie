import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserLogin } from "./modules/action";
import Loader from "../../../components/Loader";

export default function AuthPage2(props) {
  const [state, setState] = useState({ taiKhoan: "", matKhau: "" });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const error = useSelector((state) => state.authReducer.err);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(props);
    dispatch(fetchUserLogin(state, props.history));
  };

  if (loading) return <Loader />;

  const renderNoti = () => {
    if (error) {
      return <div className="alert alert-danger">{error.response.data}</div>;
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h3>AuthPage</h3>
          {renderNoti()}
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="matKhau"
                onChange={handleOnChange}
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
