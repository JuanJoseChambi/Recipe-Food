import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: [],
    diets: [],
    filtered: [],
    page: 1,
    favorites:[]
};
/*-------------------------------------------------------------------------------------------|
| En filter recipe y origin recipe no se puede usar desde el state.filtered por que          |
| ocurriria lo que pasa con recipe, que es que se borran los anteriores datos.               |
| sin embargo en order y healty si se puede ya que este no crea nuevos arrays y solo ordenan |
|-------------------------------------------------------------------------------------------*/
export const recipeSlice = createSlice ({
    name: 'recipes',
    initialState: initialState,
    reducers: {
        //Info de Back-----------------------------------------------------------------------
        setRecipes: (state, action) => {
            state.recipes = action.payload;
            state.filtered = action.payload;
        },
        //------------------------------------------------------------------------------------
        //Filtros-----------------------------------------------------------------------------
        filterRecipe: (state, action) => {      
            let dietsType = action.payload;     
            if (dietsType === "allDiets") {     
                state.filtered = state.recipes;
            }else{
                state.filtered = state.recipes.filter(recipes => recipes.diets.find(diet => diet === dietsType));
            
            }
        },
        originRecipe: (state, action) => {
            let origin = action.payload;
            if (origin === "allRecipes") {              
                state.filtered = state.recipes;
            }else if (origin === "createInDB"){
                state.filtered = state.recipes.filter(ele => ele.createInDB === true);
            }else if (origin === "api"){
                state.filtered = state.recipes.filter(ele => ele.createInDB === undefined);
            }
        },
        orderRecipes: (state, action) => {
            let order = action.payload;
            if (order === "original") {
                state.filtered = state.recipes;
            }else if(order === "Ascendente") {
                state.filtered = state.filtered.sort((a,b) => a.name.localeCompare(b.name));
            }else if (order === "Descendente") {
                state.filtered = state.filtered.sort((a,b) => b.name.localeCompare(a.name));
            }
        },
        healthyFoodLevel: (state, action) => {
            let level = action.payload;
            if (level === "original") {
                state.filtered = state.recipes
            }else if (level === "Ascendente") {
                state.filtered = state.filtered.sort((a, b) => a.healthScore - b.healthScore)
            }else if (level === "Descendente") {
                state.filtered = state.filtered.sort((a, b) => b.healthScore - a.healthScore)
            }
        },
        resteAll: (state, action) => {
            state.filtered = state.recipes;
        },
        //------------------------------------------------------------------------------------
        //Paginacion--------------------------------------------------------------------------
        numPage: (state, action) => {
            const numPage = action.payload
            state.page = numPage
        },
        nextPage: ( state, action) => {
            state.page++
        },
        prevPage: ( state, action) => {
            state.page--
        },
        //------------------------------------------------------------------------------------
        //Diets-------------------------------------------------------------------------------
        setDiets: (state, action) => {
            state.diets = action.payload;
        },
        //------------------------------------------------------------------------------------
        //Extra: Favoritos--------------------------------------------------------------------
        addFav: (state, action) => {
            state.favorites = [...state.favorites, action.payload];
        },
        removeFav: ( state, action) => {
            const id = action.payload;
            state.favorites = state.favorites.filter(ele => ele.id !== id); //hacer el filter y borrarlo
        }
        //------------------------------------------------------------------------------------
    }
})

export const {setRecipes, filterRecipe, originRecipe, orderRecipes, healthyFoodLevel, resteAll, numPage, nextPage, prevPage, addFav, removeFav, setDiets } = recipeSlice.actions;

export default recipeSlice.reducer;