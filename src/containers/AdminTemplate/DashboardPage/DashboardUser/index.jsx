import React from "react";
import MaterialTable from "material-table";
import adminService from "../../AdminService/AdminService";
import PopupUser from "containers/AdminTemplate/component/PopupUser";

export default function DasboardUser() {
  const [allUser, setAllUser] = React.useState([]);
  //status 0 = not thing, 1 = display Edit popupUser, 2 = display Add User popupUser
  const [statusPopup, setstatusPopup] = React.useState(0);
  const [userEdit, setuserEdit] = React.useState();
  const [flag, setFlag] = React.useState(false)
  React.useEffect(() => {
    try {
      const callApi = async () => {
        const data = await adminService.getAllUser();
        setAllUser(data.data);
      };
      callApi();
    } catch (err) {
      console.log(err);
    }
  }, [flag]);

  const handleClosePopup = () => {
    setstatusPopup(0);
    setFlag(!flag);
  };
  const tokenTest =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaGlldTEyM2FiYyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IktoYWNoSGFuZyIsIm5iZiI6MTYyMjY4NzU3MSwiZXhwIjoxNjIyNjkxMTcxfQ.VH3N1iXRbbx7ZsQ3GH0zG4sOVL6GHuFxNh53DVLR3ms";
  const handleEditUser = (data) => {
    try {
      const callApi = async () => {
        await adminService.editAUser(tokenTest,data);
      };
      callApi();
    } catch (err) {
      console.log({...err});
    }
  };
  return (
    <>
      {statusPopup === 1 && (
        <PopupUser
          title="Edit"
          user={userEdit}
          handleClosePopup={handleClosePopup}
          handleUser = {handleEditUser}
        />
      )}
      {statusPopup === 2 && (
        <PopupUser title="Add User" handleClosePopup={handleClosePopup} />
      )}
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          title="DashBoard User"
          columns={[
            { title: "Họ & Tên", field: "hoTen" },
            { title: "Email", field: "email" },
            { title: "Mật khẩu", field: "matKhau" },
            { title: "Số điện thoại", field: "soDt", type: "numeric" },
            { title: "Loại người dùng", field: "maLoaiNguoiDung" },
          ]}
          data={allUser}
          options={{
            pageSize: 10,
            pageSizeOptions: [10, 15, 20, 25],
            headerStyle: {
              backgroundColor: "#212121",
              color: "#FFF",
            },
            emptyRowsWhenPaging: false,
            actionsColumnIndex: -1,
          }}
          actions={[
            {
              icon: "add",
              tooltip: "Add User",
              isFreeAction: true,
              onClick: () => setstatusPopup(2),
            },
            {
              icon: "edit",
              tooltip: "Edit User",
              onClick: (event, rowData) => {
                setstatusPopup(1);
                setuserEdit(rowData);
              },
            },
            {
              icon: "delete",
              tooltip: "Delete User",
              onClick: (event, rowData) =>
                window.confirm("You want to delete " + rowData.taiKhoan),
            },
          ]}
        />
      </div>
    </>
  );
}
