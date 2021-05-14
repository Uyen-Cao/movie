import HomePage from "./../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
// import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";
import HocPage from "../containers/HomeTemplate/HocPage";
import HooksPage from "../containers/HomeTemplate/HooksPage";
import Dashboard from "../containers/AdminTemplate/DashboardPage";
// import AddUserPage from "../containers/AdminTemplate/AddUserPage";
import AddUserPage2 from "../containers/AdminTemplate/AddUserPage2";
import MovieDetailPage from "../containers/HomeTemplate/MovieDetail";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: MovieDetailPage,
  },
  {
    exact: false,
    path: "/hoc",
    component: HocPage,
  },
  {
    exact: false,
    path: "/hooks",
    component: HooksPage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    exact: false,
    path: "/add-user-2",
    component: AddUserPage2,
  },
];

export { routesHome, routesAdmin };
