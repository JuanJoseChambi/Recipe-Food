//Esta es una funcion la cual nos permite crear la Store
//Y dentro del reducer van todos los reducers

import { configureStore } from '@reduxjs/toolkit';

//Reducers 
import recipesReducer from "./Reducers/Recipes/recipeSlice"
import userReducer from "./Reducers/User/userSlice"


export default configureStore ({
    reducer: {
        recipes: recipesReducer,
        user: userReducer
    }
})