import React from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import adminService from "../../AdminService/AdminService";
import MovieDetail from "containers/AdminTemplate/component/MovieDetail/MovieDetail";
import { ToastContainer, toast } from "react-toastify";
import PopupMovie from "containers/AdminTemplate/component/PopupMovie/PopupMovie";
import { Button } from "@material-ui/core";
export default function DashboardMovie() {
  const [allMovie, setAllMovie] = React.useState([]);

  const [showAddMovie, setShowAddMovie] = React.useState(false);
  const [loadAgain, setloadAgain] = React.useState(true);
  React.useEffect(() => {
    try {
      const callApi = async () => {
        const data = await adminService.getAllMovie('""');
        setAllMovie(data.data);
      };
      callApi();
    } catch (err) {
      console.log(err);
    }
  }, [loadAgain]);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {showAddMovie && (
        <div>
          <PopupMovie
            showAddMovie={showAddMovie}
            setShowAddMovie={setShowAddMovie}
          />
        </div>
      )}
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          title="DashBoard User"
          columns={[
            { title: "Mã Phim", field: "maPhim" },
            { title: "Tên Phim", field: "tenPhim" },
            {
              title: "Ngày khỏi chiếu",
              field: "ngayKhoiChieu",
              type: "date",
            },
          ]}
          actions={[
            {
              icon: "add",
              tooltip: "Thêm mới phim",
              isFreeAction: true,
              onClick: () => {
                setShowAddMovie(true);
              },
            },
          ]}
          detailPanel={(rowData) => {
            return (
              <MovieDetail
                setloadAgain={setloadAgain}
                loadAgain={loadAgain}
                movie={rowData}
              />
            );
          }}
          data={allMovie}
          options={{
            pageSize: 10,
            pageSizeOptions: [10, 15, 20, 25],
            headerStyle: {
              backgroundColor: "#212121",
              color: "#FFF",
            },
            emptyRowsWhenPaging: false,
          }}
          components={{
            Toolbar: (props) => (
              <div>
                <MTableToolbar {...props} />
                <div style={{ textAlign: "center", marginBottom: 10 }}>
                  <Button variant="contained" color="primary" href="">
                    Switch Dasboard User
                  </Button>
                </div>
              </div>
            ),
          }}
        />
      </div>
    </>
  );
}
