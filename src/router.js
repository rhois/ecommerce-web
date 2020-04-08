import {
  HomePage,
  SearchPage,
  DetailProductPage,
  PurchasePage
} from "components/pages";

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
  },
  {
    path: "/product-detail",
    exact: true,
    component: DetailProductPage
  }
];

export default routes;
