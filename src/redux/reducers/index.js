import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducers from "./productListReducers"

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducers
});
export default rootReducer;
