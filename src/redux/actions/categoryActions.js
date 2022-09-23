import * as actionTypes from "./actionTypes"
//Bir kategoriye tıkladığımzda çalışacak event (function changeCategory)
export function changeCategory(category){
    return{type:actionTypes.CHANGE_CATEGORY,payload:category}
}

export function getCategoriesSuccess(categories){
    return{type:actionTypes.GET_CATEGORIES_SUCCESS,payload:categories}
}

export function getCategories(){
   //reduxthunk yapısı  
   return function(dispach){
    debugger;
    let url ="https://northwind.vercel.app/api/categories"
    return fetch(url).then(response=>response.json())
    .then(result=>dispach(getCategoriesSuccess(result)));
   };
}