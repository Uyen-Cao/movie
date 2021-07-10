import HomePage from "./../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import MovieDetailPage from "../containers/HomeTemplate/MovieDetail";
import DasboardUser from "containers/AdminTemplate/DashboardPage/DashboardUser";
import DashboardMovie from "containers/AdminTemplate/DashboardPage/DashboardMovie"
import LogIn from "containers/AdminTemplate/component/LogIn/LogIn";

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

];

const routesAdmin = [
  {
    exact: false,
    path: "/admin/dasboardUser",
    component: DasboardUser,
  },
  {
    exact: false,
    path: "/admin/dasboardMovie",
    component: DashboardMovie,
  },
  {
    exact: false,
    path: "/admin/sign-in",
    component: LogIn,
  },
];

export { routesHome, routesAdmin };
