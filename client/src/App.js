import style from "./App.css"
import Home from "./Pages/Home/Home";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CreateRecipe from "./Pages/CreateRecipe/CreateRecipe";
import Error from "./Pages/Error/Error";
import Detail from "./Pages/Detail/Detail";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch,  } from "react-redux"
import { setRecipes } from "./Redux/Reducers/Recipes/recipeSlice";


export default function App() {
  const dispatch = useDispatch();
  const recipes   = useSelector(state => state.recipes.filtered);

  // Renderizar Recetas-------------------------------------------------------
  useEffect(() => {
    const allInfo = async () => {
      const { data } = await axios.get("http://localhost:3001/recipes");
      if (data) {
        const info = data.map((ele) => {
          return {
            id: ele.id,
            name: ele.name,
            image: ele.image,
            diets: ele.diets.map((ele) => ele.name),
            // diets: ele.diets.map((ele) => <li key={ele.name}>{ele.name}</li>),
            createInDB: ele.createInDB,
            healthScore: ele.healthScore
          };
        });
        dispatch(setRecipes(info))
      }
    };
    allInfo();
  }, [dispatch]);
  //---------------------------------------------------------------------------

  //Buscar por Name------------------------------------------------------------
  async function searchRecipe(name) {
    const { data } = await axios.get(`http://localhost:3001/recipes?name=${name}`);
    if (data.length > 0) {
      const info = data.map((ele) => {
        return {
          id: ele.id,
          name: ele.name,
          image: ele.image,
          diets: ele.diets.map((ele) => ele.name),
          // diets: ele.diets.map((ele) => <li key={ele.name}>{ele.name}</li>),
          createInDB: ele.createInDB,
          healthScore: ele.healthScore
        };
      });
      dispatch(setRecipes(info))
    }else{
      alert("La receta no existe")
    }
  }

  //---------------------------------------------------------------------------

  //Crear Receta --------------------------------------------------------------

  async function createRecipe(newRecipe) {
    const {name,image,summary,healthScore,stepByStep,diets} = newRecipe;
      if (name &&image && summary && healthScore && stepByStep && diets ) {
        await axios.post("http://localhost:3001/recipes/",newRecipe)
        alert("Receta Creada!!")
      }else{
        alert("Datos Incorectos....")
      }
  };

  //---------------------------------------------------------------------------


  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home recipes={recipes} searchRecipe={searchRecipe}/>} />
        <Route path="/Create" element={<CreateRecipe createRecipe={createRecipe} recipes={recipes}/>} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
