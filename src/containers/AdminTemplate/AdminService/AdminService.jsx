import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config = (method, url, token, data) => {
  return {
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer  ${token}`,
    },
    data: data,
  };
};

class AdminService {
  notification = (notifi, type) => {
    const tmp = {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    if (type === "success") toast.success(notifi, tmp);
    if (type === "error") toast.error(notifi, tmp);
  };
  //User service
  getListRoleUser = () => {
    return axios(
      config(
        "get",
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"
      )
    );
  };
  getAllUser = () => {
    return axios(
      config(
        "get",
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
      )
    );
  };
  deleteAUser = (token, username) => {
    return axios(
      config(
        "delete",
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${username}`,
        token,
        ""
      )
    );
  };
  editAUser = (token, data) => {
    return axios(
      config(
        "put",
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        token,
        data
      )
    );
  };
  AddAUser = (token, data) => {
    return axios(
      config(
        "post",
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        token,
        data
      )
    );
  };
  //Movie service
  getAllMovie = (tenPhim) => {
    return axios(
      config(
        "get",
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`
      )
    );
  };
  deleteAMovie = (token, maPhim) => {
    return axios(
      config(
        "delete",
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        token,
        ""
      )
    );
  };
  updateAMovie = (token, data) => {
    return axios(
      config(
        "post",
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload`,
        token,
        data
      )
    );
  };
  addAMovie = (token, data) => {
    return axios(
      config(
        "post",
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh`,
        token,
        data
      )
    );
  };

  //Login
  loginAdmin = (data) => {
    return axios(
      config(
        "post",
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
        "",
        data
      )
    );
  }
}

const adminService = new AdminService();
export default adminService;
