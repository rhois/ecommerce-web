import { HomePage, SearchPage, PurchasePage } from "components/pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/search",
    exact: true,
    component: SearchPage
  },
  {
    path: "/purchase",
    exact: true,
    component: PurchasePage
  }
];

export default routes;
