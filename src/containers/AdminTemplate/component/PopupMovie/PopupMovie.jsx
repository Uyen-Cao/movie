import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import adminService from "../../AdminService/AdminService";
import Style from "./style/style";
import CloseIcon from "@material-ui/icons/Close";
import { Hidden, IconButton } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const useStyles = Style;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhhbmhOaG9uMjVxNDM0MjEzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiUXVhblRyaSIsIm5iZiI6MTYyNTAzNjgxNywiZXhwIjoxNjI1MDQwNDE3fQ.KQ00jzjzpty20wtWb6hH9gMrxCww4ZSB6Ly-fn-35GE";

export default function PopupMovie(props) {
  const { setloadAgain, loadAgain, setShowAddMovie, showAddMovie } = {
    ...props,
  };
  const classes = useStyles();

  const [maPhim, setMaPhim] = React.useState();
  const [tenPhim, setTenPhim] = React.useState();
  const [biDanh, setBiDanh] = React.useState();
  const [trailer, setTrailer] = React.useState();
  const [hinhAnh, setHinhAnh] = React.useState({});
  const [moTa, setMoTa] = React.useState();
  const [maNhom, setMaNhom] = React.useState("GP01");
  const [selectedDate, setSelectedDate] = React.useState();

  const handleAddMovie = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("maPhim", maPhim);
    formData.append("tenPhim", tenPhim);
    formData.append("biDanh", biDanh);
    formData.append("trailer", trailer);
    formData.append("hinhAnh", hinhAnh);
    formData.append("moTa", moTa);
    formData.append("maNhom", maNhom);
    const date = selectedDate.split("-");
    console.log(`${date[2]}/${date[1]}/${date[0]}`);
    formData.append("ngayKhoiChieu", `${date[2]}/${date[1]}/${date[0]}`);

    adminService
      .addAMovie(token, formData)
      .then((res) => {
        adminService.notification("Thêm mới thành công", "success");
        setShowAddMovie(!showAddMovie);
        setloadAgain(!loadAgain);
      })
      .catch((err) => {
        adminService.notification(err.response.data, "error");
        setShowAddMovie(!showAddMovie);
      });
  };
  return (
    <>
      <div className={classes.root}>
        <div
          className={classes.backContainer}
          onClick={() => {
            setShowAddMovie(!showAddMovie);
          }}
        ></div>
        <div className={classes.previousContainer}>
          <form
            onSubmit={(e) => {
              handleAddMovie(e);
            }}
          >
            <Grid container className={classes.container} spacing={5}>
              <CloseIcon
                className={classes.closeIcon}
                onClick={() => {
                  setShowAddMovie(!showAddMovie);
                }}
              />
              <Grid item lg={12}>
                <h2>Thêm mới phim</h2>
              </Grid>
              <Grid item lg={6}>
                <TextField
                  required
                  id="standard-basic"
                  label="Mã Phim"
                  value={maPhim}
                  onChange={(e) => {
                    setMaPhim(e.target.value);
                  }}
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  required
                  id="standard-basic"
                  label="Tên Phim"
                  value={tenPhim}
                  onChange={(e) => {
                    setTenPhim(e.target.value);
                  }}
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  required
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    console.log(e.target.value);
                  }}
                  id="datetime-local"
                  label="Ngày khởi chiếu"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  id="standard-basic"
                  label="Trailer"
                  value={trailer}
                />
              </Grid>
              <Grid item lg={6}>
                <input
                  className={classes.input}
                  id="contained-button-file"
                  type="file"
                  onChange={(e) => {
                    setHinhAnh(e.target.files[0]);
                  }}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Tải ảnh lên
                  </Button>
                </label>
              </Grid>
              <Grid item lg={6}>
                <TextareaAutosize
                  aria-label="Mo-Ta"
                  placeholder="Nhập mô tả cho phim"
                  defaultValue={moTa}
                  rowsMin={3}
                  className={classes.desciption}
                  onChange={(e) => {
                    setMoTa(e.target.value);
                  }}
                />
              </Grid>
              <Grid item lg={12}>
                <Button type="submit" variant="outlined" color="primary">
                  Thêm
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </>
  );
}
