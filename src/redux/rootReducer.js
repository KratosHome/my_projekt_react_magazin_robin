import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsLikeReducer from "./productsLikeReducer";

const rootReducer = combineReducers({
  productsInCard: cartReducer,
  productsLikeState: productsLikeReducer,
});

export default rootReducer;
