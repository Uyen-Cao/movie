import axios from "axios";
const config = (method, url, token, data) => {
  return {
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json",
      "Accept":"application/json",
      "Authorization":`Bearer  ${token}`
    },
    data: data,
  };
};

class AdminService {
  getListRoleUser = () => {
    return axios(config("get", "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"));
  };
  getAllUser = () => {
    return axios(config("get", "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"));
  };
  getAllMovie = () => {
    return axios(config("get", "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"));
  };
  deleteAUser = ()=>{

  };
  editAUser = (token, data)=>{
    return axios(config("put","https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",token, data))
  }
  editAUser1 = (token, data)=>{
    return axios(config("put","https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",token, data))
  }
}

const adminService = new AdminService();
export default adminService;
