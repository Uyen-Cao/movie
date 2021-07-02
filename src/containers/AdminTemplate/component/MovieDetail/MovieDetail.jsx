import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import adminService from "../../AdminService/AdminService";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "35ch",
        fontSize: "large",
      },
      flexGrow: 1,
      padding: "20px",
      justifyContent: "center",
    },
    input: {
      display: 'none',
    },
    desciption: {
      width: "70%",
    },
    image: {
      width: "70%",
    },
    container: {
      textAlign: "center",
    },
  })
);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhhbmhOaG9uMjVxNDM0MjEzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiUXVhblRyaSIsIm5iZiI6MTYyNTAzNjgxNywiZXhwIjoxNjI1MDQwNDE3fQ.KQ00jzjzpty20wtWb6hH9gMrxCww4ZSB6Ly-fn-35GE";

export default function MovieDetail(props) {
  const { setloadAgain, loadAgain, movie } = { ...props };
  const classes = useStyles();
  const [tenPhim, setTenPhim] = React.useState(movie.tenPhim);
  const [biDanh, setBiDanh] = React.useState(movie.biDanh);
  const [trailer, setTrailer] = React.useState(movie.trailer);
  const [hinhAnh, setHinhAnh] = React.useState({});
  const [moTa, setMoTa] = React.useState(movie.moTa);
  const [maNhom, setMaNhom] = React.useState(movie.maNhom);
  const [selectedDate, setSelectedDate] = React.useState(
    movie.ngayKhoiChieu.split("T")[0]
  );

  const [disableUpdate, setDisableUpdate] = React.useState(true);
  const handleUpdate = () => {
    if (disableUpdate) {
      setDisableUpdate(false);
    } else {
      let formData = new FormData();
      formData.append("maPhim", movie.maPhim);
      formData.append("tenPhim", tenPhim);
      formData.append("biDanh", biDanh);
      formData.append("trailer", trailer);
      formData.append("hinhAnh", hinhAnh);
      formData.append("moTa", moTa);
      formData.append("maNhom", maNhom);
      formData.append("ngayKhoiChieu", selectedDate);

      adminService
        .updateAMovie(token, formData)
        .then((res) => {
          adminService.notification("Cập nhập thành công", "success");
          setloadAgain(!loadAgain);
        })
        .catch((err) => {
          adminService.notification(err.response.data, "error");
        });

      setDisableUpdate(true);
    }
  };

  const handleDelete = () => {
    adminService
      .deleteAMovie(token, movie.maPhim)
      .then((res) => {
        adminService.notification(res.data, "success");
        setloadAgain(!loadAgain);
      })
      .catch((err) => {
        adminService.notification(err.response.data, "error");
        console.log({ ...err });
      });
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={10}>
        <Grid item lg={4}>
          <img className={classes.image} src={movie.hinhAnh} alt="" />
        </Grid>
        <Grid item lg={8}>
          <Grid container spacing={3}>
            <Grid item lg={6}>
              <TextField
                disabled={disableUpdate}
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
                disabled={disableUpdate}
                id="standard-basic"
                label="Trailer"
                value={trailer}
                onChange={(e) => {
                  setTrailer(e.target.value);
                }}
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                disabled={disableUpdate}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  console.log(e.target.value);
                }}
                value={selectedDate}
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
                disabled={true}
                id="standard-basic"
                label="Mã Nhóm"
                value={maNhom}
                onChange={(e) => {
                  setMaNhom(e.target.value);
                }}
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
                disabled={disableUpdate}
                aria-label="Mo-Ta"
                placeholder="Nhập mô tả cho phim"
                defaultValue={moTa}
                rowsMin={5}
                className={classes.desciption}
                onChange={(e) => {
                  setMoTa(e.target.value);
                }}
              />
            </Grid>
            <Grid item lg={6}>
              <Button variant="outlined" color="primary" onClick={handleUpdate}>
                Cập Nhập
              </Button>
            </Grid>
            <Grid item lg={6}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleDelete}
              >
                Xóa
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
