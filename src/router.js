import { MainPage, SearchPage } from "components/pages";

const routes = [
  {
    path: "/dashboard",
    exact: true,
    component: MainPage
  },
  {
    path: "/search",
    exact: true,
    component: SearchPage
  }
];

export default routes;
