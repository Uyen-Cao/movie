import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "100%",
        fontSize: "large",
      },
      flexGrow: 1,
      justifyContent: "center",
      textAlign: "center",
      position: "fixed",
      zIndex: 20,
      width: "100%",
      height: "100%",
    },
    input: {
      display: 'none',
    },
    desciption: {
      width: "60%",
    },
    image: {
      width: "70%",
    },
    container: {
      textAlign: "center",
    },
    backContainer: {
      position: "absolute",
      backgroundColor: "rgba(0,0,0,.2)",
      zIndex: "90",
      width: "100%",
      height: "100%",
    },
    previousContainer: {
      position: "absolute",
      backgroundColor: "white",
      zIndex: "100",
      margin: "5% 10%",
      padding: "35px 25px",
      borderRadius: "5px"
    },
    closeIcon: {
      cursor: "pointer",
      fontSize:40,
      position:"absolute",
      top: 5,
      right: 10
    },
  })
);
