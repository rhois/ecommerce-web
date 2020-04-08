import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { popupFeedback } from "./notification";
import { purchaseHistory } from "./purchase";

export default combineReducers({
  routing: routerReducer,
  popupFeedback,
  purchaseHistory
});
