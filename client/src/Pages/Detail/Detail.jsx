import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Detail.module.css";
import { NavLink } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

export default function Deatil() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const recipe = async () => {
      const response = await axios.get(`http://localhost:3001/recipes/${id}`);

      const wanted = await response.data;
      if (wanted.length > 0) {
        const infoRecipe = wanted[0];
        const { id, name, summary, healthScore, stepByStep, image, diets } = infoRecipe;
        const allrecipe = {
          id,
          name,
          summary: summary.replace(/<[^>]+>/g, ""),
          healthScore,
          stepByStep: stepByStep?Array.isArray(stepByStep)? stepByStep.map((paso) => (<li key={paso.number}>Step: {paso.number} - {paso.step}</li>))
          : stepByStep.split("\n").map((step, index) => <li key={index}>{step}</li>):"No Step",
          //lo que se hace en el codigo de step es que si es un string se lo pasa a un array y se lo spera en donde encuentre saltos de linea osea que  si da un enter, y luego mapea estos elementos del array y los mapea cada uno en un li para que tenga formato de lista
          image,
          diets: diets.map((ele) => (<h4 className={style.dietas}>{ele.name}</h4>)),
        };
        setRecipe(allrecipe);
      } else {
        window.alert("La receta no existe");
      }
    };
    recipe();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NavLink to="/Home">
        <button className={style.buton}>
          <i class="bx bx-left-arrow-alt"></i>
        </button>
      </NavLink>
      {!recipe.id ? (<Loading />) : (<div className={style.detailPage}>
          <div className={style.block1}>
            <div className={style.contName}>
              <h3 className={style.id}># {recipe.id}</h3>
              <h1 className={style.name}>{recipe.name}</h1>
            </div>

            <div className={style.contImg}>
              <img src={recipe.image} alt={recipe.name} className={style.img} />
            </div>

            <div className={style.dietHealt}>
              <h4>Health Score: {recipe.healthScore}</h4>
              <div className={style.containerDiets}>
                <h4>Diets:</h4>
                <h4 className={style.miniBlockDiets}>{recipe.diets}</h4>
              </div>
            </div>
          </div>

          <div className={style.block2}>
            <div className={style.containerAll}>
              <h3 className={style.namesumStep}>Summary: </h3>
              <h4 className={style.steSum}>{recipe.summary}</h4>
            </div>

            <div className={style.containerAll}>
              <h3 className={style.namesumStep}>Step: </h3>
              <h4 className={style.steSum}>{recipe.stepByStep}</h4>
            </div>
          </div>
          <div className={style.svg}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,256L48,256C96,256,192,256,288,218.7C384,181,480,107,576,112C672,117,768,203,864,218.7C960,235,1056,181,1152,176C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </div>
        </div>
      )} 
    </div>
  );
}
