import HomePage from "./../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import MovieDetailPage from "../containers/HomeTemplate/MovieDetail";
import DasboardUser from "containers/AdminTemplate/DashboardPage/DashboardUser";
import DashboardMovie from "containers/AdminTemplate/DashboardPage/DashboardMovie"

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
    exact: true,
    path: "/admin/dasboardUser",
    component: DasboardUser,
  },
  {
    exact: true,
    path: "/admin/dasboardMovie",
    component: DashboardMovie,
  },
];

export { routesHome, routesAdmin };
