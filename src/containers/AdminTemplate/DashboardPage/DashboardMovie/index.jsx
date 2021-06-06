import React from "react";
import MaterialTable from "material-table";
import adminService from "../../AdminService/AdminService";

export default function DashboardMovie() {
  const [allMovie, setAllMovie] = React.useState([]);
  React.useEffect(() => {
    try {
      const callApi = async () => {
        const data = await adminService.getAllMovie();
        setAllMovie(data.data);
      };
      callApi();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          title="DashBoard User"
          columns={[
            { title: "Mã Phim", field: "maPhim" },
            { title: "Tên Phim", field: "tenPhim" },
            { title: "Ảnh", field: "hinhAnh" },
            { title: "Mô tả", field: "moTa" },
            { title: "Ngày khỏi chiếu", field: "ngayKhoiChieu" },
          ]}
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
        />
      </div>
    </>
  );
}
