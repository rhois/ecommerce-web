import { ADD_PURCHASE } from "../actionType";

export const addPurchase = data => dispatch => {
  dispatch({
    type: ADD_PURCHASE,
    payload: {
      purchase_history: data
    }
  });
};
