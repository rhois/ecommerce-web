import { ADD_PURCHASE } from "../actionType";

export const purchaseHistory = (state = [], action) => {
  switch (action.type) {
    case ADD_PURCHASE:
      return action.payload.purchase_history;
    default:
      return state;
  }
};
