import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: [],
    pagination:{
        currentPage:1,
        pageSize:9,
        totalItems: 0
    }
};

export const recipeSlice = createSlice ({
    name: 'recipes',
    initialState: initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload
        },
        filterRecipe: (state, action) => {
            let dietsType = action.payload;
            state.recipes = state.recipes.filter(recipes => recipes.diets.find(diet => diet === dietsType));
        },
        setPage: (state, action) => {
            state.pagination.currentPage = action.payload;
        }
    }
})

export const {setRecipes, filterRecipe} = recipeSlice.actions;

export default recipeSlice.reducer;