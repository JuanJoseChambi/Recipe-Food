import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Detail.module.css";
import { NavLink } from "react-router-dom";

export default function Deatil() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const recipe = async () => {
      const response = await axios.get(`http://localhost:3001/recipes/${id}`);

      const wanted = await response.data;
      if (wanted.length > 0) {
          const infoRecipe = wanted[0];
          const {id,name,summary,healthScore,stepByStep,image,diets} = infoRecipe;
          const allrecipe = {
            id,
            name,
            summary: summary.replace(/<[^>]+>/g, ''),
            healthScore,
            stepByStep,
            image,
            diets: diets.map((ele) => <h4 className={style.dietas}>{ele.name}</h4>),
          };
          // return {
          //   id: ele.id,
          //   name: ele.name,
          //   summary: ele.summary,
          //   healthScore: ele.healthScore,
          //   stepByStep: ele.stepByStep,
          //   image: ele.image,
          //   diets: ele.diets,
          // };

        setRecipe(allrecipe);
      } else {
        window.alert("La receta no existe");
      }
    };
    recipe();
  }, [id]);

  return (
      <div className={style.detailPage}>
      <NavLink to="/Home">
        <button className={style.buton}>Home</button>
      </NavLink>
      <div>
        <div className={style.conteinerHead}>
          <div className={style.contImg}>
            <img src={recipe.image} alt={recipe.name} className={style.img} />
          </div>

          <div className={style.contName}>
            <h3 className={style.id}># {recipe.id}</h3>
            <h1 className={style.name}>{recipe.name}</h1>
            <div className={style.dietHealt}>
              <h4>Health Score: {recipe.healthScore}</h4>
              <div className={style.containerDiets}>
                <h4>Diets:</h4>
                <h4 className={style.miniBlockDiets}>{recipe.diets}</h4>
              </div>
            </div>
          </div>
        </div>

        <div className={style.contSumStep}>
          <div className={style.containerAll}>
            <h3 className={style.steSum}>Summary: </h3>
            <h4 className={style.steSum}>{recipe.summary}</h4>
          </div>

          <div className={style.containerAll}>
            <h3 className={style.steSum}>Step: </h3>
            <h4 className={style.steSum}>{recipe.stepByStep}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
