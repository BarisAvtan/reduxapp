import * as actionTypes from "./actionTypes"
//Bir kategoriye tıkladığımzda çalışacak event (function changeCategory)
export function changeCategory(category){
    return{type:actionTypes.CHANGE_CATEGORY,payload:category}
}