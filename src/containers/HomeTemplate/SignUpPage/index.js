import React from "react";
import { useLocation } from "react-router";
import "./styles/sign-up.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SignupPage() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="sign-up">
      <div className="signup-background">
        <div className="signup-box ">
          <div className="signup-box-wrapper row">
            <div className="left-box col-7">
              <h2 className="text-center">Đăng ký</h2>
              <form noValidate autoComplete="off" className="text-center">
                <TextField
                  className="signup-input"
                  id="standard-basic"
                  label="Tên tài khoản"
                />
                <br />
                <TextField
                  className="signup-input"
                  id="standard-basic"
                  label="Email"
                />
                <br />
                <TextField
                  className="signup-input"
                  id="standard-basic"
                  label="Mật khẩu"
                />
                <br />
                <TextField
                  className="signup-input"
                  id="standard-basic"
                  label="Xác nhận mật khẩu"
                />
                <div className="button">
                  <Button
                    className="my-3 w-50"
                    variant="contained"
                    color="primary"
                  >
                    Đăng ký
                  </Button>
                </div>
                <div className="link-signin">
                  <Link to="/log-in">Đã có tài khoản? Đăng nhập</Link>
                </div>
              </form>
            </div>
            <div className="right-box col-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
