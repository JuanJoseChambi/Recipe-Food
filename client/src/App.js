import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CreateRecipe from "./Pages/CreateRecipe/CreateRecipe";
import Error from "./Pages/Error/Error";
import Detail from "./Pages/Detail/Detail";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  //Renderizar Recetas-------------------------------------------------------
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
          };
        });
        setRecipes(info);
      }
    };
    allInfo();
  }, []);
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
        };
      });
      setRecipes(info)
    }else{
      return alert("El Receta no se encontro")
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
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home recipes={recipes} searchRecipe={searchRecipe}/>} />
        <Route path="/Create" element={<CreateRecipe createRecipe={createRecipe}/>} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
