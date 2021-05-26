// import HomePage from "./containers/HomeTemplate/HomePage";
// import AboutPage from "./containers/HomeTemplate/AboutPage";
// import ListMovie from "./containers/HomeTemplate/ListMoviePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import { routesHome, routesAdmin } from "./routes";
import HomeTemplate from "./containers/HomeTemplate";
import AdminTemplate from "./containers/AdminTemplate";
// import AuthPage from "./containers/AdminTemplate/AuthPage";
import AuthPage2 from "./containers/AdminTemplate/AuthPage2";
import LoginPage from "containers/HomeTemplate/LoginPage";
import SignupPage from "containers/HomeTemplate/SignUpPage";

function App() {
  const renderRoutesHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const renderRoutesAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome(routesHome)}
        {renderRoutesAdmin(routesAdmin)}
        {/* Trang chủ - localhost:3000 */}
        {/* <Route exact path="/" component={HomePage} /> */}

        {/* Trang about - localhost:3000/about */}
        {/* <Route path="/about" component={AboutPage} /> */}

        {/* Trang list movie - localhost:3000/list-movie */}
        {/* <Route path="/list-movie" component={ListMovie} /> */}

        {/* <Route path="/auth" component={AuthPage} /> */}
        <Route path="/auth2" component={AuthPage2} />
        <Route path="/log-in" component={LoginPage} />
        <Route path="/sign-up" component={SignupPage} />

        {/* Trang PageNotFound */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
