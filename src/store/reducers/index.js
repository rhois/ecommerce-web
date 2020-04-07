import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { popupFeedback } from "./notification";

export default combineReducers({
  routing: routerReducer,
  popupFeedback
});
