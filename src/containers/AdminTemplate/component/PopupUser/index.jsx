import adminService from "containers/AdminTemplate/AdminService/AdminService";
import React from "react";
import "./styles/style.css";
import CloseIcon from "@material-ui/icons/Close";

export default function PopupUser(props) {
  const { title, user, handleClosePopup, handleUser } = { ...props };
  const [userName, setUserName] = React.useState(user && user.taiKhoan);
  const [name, setName] = React.useState(user && user.hoTen);
  const [email, setEmail] = React.useState(user && user.email);
  const [password, setPassword] = React.useState(user && user.matKhau);
  const [phone, setPhone] = React.useState(user && user.soDt);
  const [role, setRole] = React.useState(user && user.maLoaiNguoiDung);

  const [roleUser, setroleUser] = React.useState([]);
  React.useEffect(() => {
    try {
      const callApi = async () => {
        const data = await adminService.getListRoleUser();
        setroleUser(data.data);
      };
      callApi();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const [dataUser, setDataUser] = React.useState({});
  React.useEffect(() => {
   handleUser(dataUser);
  }, [dataUser])

  const submit = (e)=>{
    e.preventDefault();
    setDataUser(()=>{
      return {
        "taiKhoan": userName,
        "matKhau": password,
        "email": email,
        "soDt": phone,
        "maNhom": "GP01",
        "maLoaiNguoiDung": role,
        "hoTen": name
      }
    });
  }
  return (
    <>
      <div className="popupUser">
        <div className="container">
          <div className="title">{title}</div>
          <CloseIcon
            className="closeIcon"
            fontSize="large"
            onClick={() => {
              handleClosePopup();
            }}
          />
          <form onSubmit={submit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Tên Tài khoản</span>
                <input
                  type="text"
                  placeholder="Nhập tài khoản"
                  required
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div className="input-box">
                <span className="details">Mật Khẩu</span>
                <input
                  type="text"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Họ & Tên</span>
                <input
                  type="text"
                  placeholder="Nhập Họ và tên"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Nhập Email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="input-box">
                <span className="details">Số điện thoại</span>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="input-box">
                <select
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                >
                  {roleUser.map((item) => {
                    return (user &&
                      item.maLoaiNguoiDung === user.maLoaiNguoiDung) ? (
                      <option
                        key={item.maLoaiNguoiDung}
                        value={item.maLoaiNguoiDung}
                        selected
                      >
                        {item.tenLoai}
                      </option>
                    ) : (
                      <option
                        key={item.maLoaiNguoiDung}
                        value={item.maLoaiNguoiDung}
                      >
                        {item.tenLoai}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="button">
              <input type="submit" value={title} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
