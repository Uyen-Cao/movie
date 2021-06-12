import React from "react";
import MaterialTable from "material-table";
import adminService from "../../AdminService/AdminService";
import PopupUser from "containers/AdminTemplate/component/PopupUser";
import { ToastContainer, toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


export default function DasboardUser() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [userDelete, setUserDelete] = React.useState();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setUserDelete("");
    setOpen(false);
  };

  const handleDelete = () => {
    adminService.deleteAUser(token,userDelete.taiKhoan).then((res)=>{
      adminService.notification(res.data, "success");
      setFlag(!flag)
    }).catch((err)=>{
      adminService.notification(err.response.data, "error");
      console.log({...err});
    })
    setOpen(false);
  };

  const [allUser, setAllUser] = React.useState([]);
  //status 0 = not thing, 1 = display Edit popupUser, 2 = display Add User popupUser
  const [statusPopup, setstatusPopup] = React.useState(0);
  const [userEdit, setuserEdit] = React.useState();
  const [flag, setFlag] = React.useState(false);
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

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYXN1a2ExOTk3IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiUXVhblRyaSIsIm5iZiI6MTYyMzUxMTQ4NiwiZXhwIjoxNjIzNTE1MDg2fQ.A9ZpE-ZQ6NHTU5xq1TfS7s7s-2Nmu9Ur-Hfv1IWCyVI";
  // JSON.parse(localStorage.getItem("UserLogin")).accessToken;
  const handleEditUser = (data,flagShowNoti) => {
    adminService.editAUser(token, data).then((res)=>{
        adminService.notification("Success", "success");
    }).catch((err)=>{
      if(flagShowNoti)
        adminService.notification(err.response.data, "error");
      console.log({...err});
    });
  };

  const handleAddUser = (data,flagShowNoti) => {
    adminService.AddAUser(token, data).then((res)=>{
      adminService.notification("Success", "success");
    }).catch((err)=>{
      if(flagShowNoti)
        adminService.notification(err.response.data, "error");
      console.log({...err});
    });
  };
      
  return (
    <>
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleCancel}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Delete User"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you sure want to delete user: {userDelete && userDelete.hoTen}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
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
      
      {statusPopup === 1 && (
        <PopupUser
          title="Edit"
          user={userEdit}
          handleClosePopup={handleClosePopup}
          handleUser={handleEditUser}
        />
      )}
      {statusPopup === 2 && (
        <PopupUser
          user={{
            email:"",
            hoTen:"",
            maLoaiNguoiDung:"",
            matKhau:"",
            soDt:"",
            taiKhoan:""
          }}
          title="Add User"
          handleClosePopup={handleClosePopup}
          handleUser={handleAddUser}
        />
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
                console.log(rowData);
              },
            },
            {
              icon: "delete",
              tooltip: "Delete User",
              onClick: (event, rowData) =>{
                setUserDelete(rowData)
                handleClickOpen()
              }
            },
          ]}
        />
      </div>
    </>
  );
}
