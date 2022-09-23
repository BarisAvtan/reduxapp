import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

//reducurlar o anki state bilgisini döndürür
export default function changeCategoryReducer(state = initialState.currentCategory,action) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
