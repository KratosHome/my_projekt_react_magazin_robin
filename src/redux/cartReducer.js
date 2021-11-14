import { omit } from "lodash";

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        [action.id]: (state[action.id] || 0) + action.count,
      };
    case "CHENGE_PRODUCT_QUANTITTY":
      return {
        ...state,
        [action.id]: action.count,
      };
    case "REMOVE_PRODUCT_FROM_CART":
      return omit(state, [action.id]);
    default:
      return state;
  }
};

export default cartReducer;
