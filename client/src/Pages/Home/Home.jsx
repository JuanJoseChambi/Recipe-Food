import Cards from "../../Components/Cards/Cards";
import style from "./Home.module.css";
import Nav from "../Nav/Nav";
import Pagination from "../../Components/Pagination/Pagination";
import { useSelector } from "react-redux"
import Loading from "../../Components/Loading/Loading"
import Error from "../Error/Error";
import Footer from "../../Components/Footer/Footer";

export default function Home({recipes, searchRecipe, deleteRecipe, allInfo}) {

  //Paginacionii----------------------------------------------------------------
  
  const page = useSelector(state => state.recipes.page);

  let recipesinPage = [];
  const recipesForPage = 9;
  const totalRecipes = recipes.length;
  let indexEnd = recipesForPage * page;
  let indexStart = indexEnd - recipesForPage;
  recipesinPage = recipes.slice(indexStart, indexEnd);

  //--------------------------------------------------------------------------

  return (
    <div > 
      <div className={style.nav}>
        <Nav className={style.nav} searchRecipe={searchRecipe}/>
      </div>
        <div className={style.home}>
          <Pagination totalRecipes={totalRecipes} recipesForPage={recipesForPage} page={page}/>
        <div className={style.block}>
         {recipesinPage.length === 0? (<Loading/>) : recipesinPage.length === null ? (<Error/>) : 
         <Cards recipesinPage={recipesinPage} deleteRecipe={deleteRecipe} allInfo={allInfo} className={style.cards}/>}
        </div>
      </div>
      <Footer/>
    </div>
  );
}