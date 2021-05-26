import * as ActionType from "./constants";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.USER_LOGIN_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      toast.success("Đăng nhập thành công");
      return { ...state };
    }
    case ActionType.USER_LOGIN_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      toast.error("Đăng nhập thất bại");
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default userReducer;
