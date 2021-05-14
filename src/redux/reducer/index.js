import { combineReducers } from "redux";
import listMovieReducer from "./../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import addUserReducer from "./../../containers/AdminTemplate/AddUserPage2/modules/reducer";
import authReducer from "./../../containers/AdminTemplate/AuthPage2/modules/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/MovieDetail/modules/reducer";
import cinemaListReducer from "../../components/ShowtimeTable/modules/reducer";
import cinemaPlaceReducer from "../../components/ShowtimeTable/cinemaItem/modules/reducer";
import userReducer from "../../containers/HomeTemplate/LoginPage/modules/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  addUserReducer,
  authReducer,
  cinemaListReducer,
  cinemaPlaceReducer,
  userReducer,
});

export default rootReducer;
