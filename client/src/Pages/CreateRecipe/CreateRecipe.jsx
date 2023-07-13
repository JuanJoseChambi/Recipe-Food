import { NavLink } from "react-router-dom";
import { useState } from "react";
import style from "./CreateRecipe.module.css";
import validation from "./validation";

export default function CreateRecipe({ createRecipe }) {
  const [recipeNew, setRecipeNew] = useState({
    name: "",
    image: "",
    summary: "",
    diets: [],
    stepByStep: "",
    healthScore: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    summary: "",
    diets: [],
    stepByStep: "",
    healthScore: "",
  });

  function handlerChange(event) {
    setRecipeNew({
      ...recipeNew,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...recipeNew,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSelectChange(event) {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    const uniqueOptions = Array.from(new Set([...recipeNew.diets, ...selectedOptions]));
    setRecipeNew(({
      ...recipeNew,
      diets: uniqueOptions,
    }));
  }

  function handlerSubmit(event) {
    event.preventDefault();
    setRecipeNew({
      name: "",
      image: "",
      summary: "",
      diets: [],
      stepByStep: "",
      healthScore: "",
    })
    createRecipe(recipeNew);
  }

  return (
    <div className={style.CreatePage}>
      <NavLink to="/Home">
        <button className={style.buton}><i class='bx bx-left-arrow-alt'></i></button>
      </NavLink>
      <div className={style.image}>
        <img src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Image-from-burguer" />
      </div>
      <form className={style.divForm}>
        <div className={style.block}>
          <div className={style.blockIzq}>
            <label className={style.labels}> Nombre</label>
            <input
              type="text"
              value={recipeNew.name}
              name="name"
              onChange={handlerChange}
              placeholder="Nombre"
              className={style.inputs}
              autoComplete="off"
              required
            />
            <p className={style.error}>{errors.name}</p>
          </div>

          <div className={style.blockDer}>
            <label className={style.labels}>Imagen</label>
            <input
              type="text"
              value={recipeNew.image}
              name="image"
              onChange={handlerChange}
              placeholder="Url Image"
              className={style.inputs}
              autoComplete="off"
              required
            />
            <p className={style.error}>{errors.image}</p>
          </div>

        </div>


        <div className={style.block}>
          <div className={style.blockIzq}>
            <label className={style.labels}>Resumen</label>
            <textarea
              type="textarea"
              value={recipeNew.summary}
              name="summary"
              onChange={handlerChange}
              placeholder="Resumen"
              className={style.areatext}
              autoComplete="off"
              required
            />
            <p className={style.error}>{errors.summary}</p>
          </div>

          <div className={style.blockDer}>
            <label className={style.labels}>Pasos</label>
            <textarea
              type="textarea"
              value={recipeNew.stepByStep}
              name="stepByStep"
              onChange={handlerChange}
              placeholder="Pasos"
              className={style.areatext}
              autoComplete="off"
              required
            />
            <p className={style.error}>{errors.stepByStep}</p>
          </div>
        </div>


        <div className={style.block}>
          <div className={style.blockIzqSal}>
            <label className={style.labels}>Saludable</label>
            <input
              type="number"
              value={recipeNew.healthScore}
              onChange={handlerChange}
              name="healthScore"
              min="0"
              max="100"
              className={style.inputs}
              autoComplete="off"
              required
            />
            <p className={style.error}>{errors.healthScore}</p>
          </div>

        <select value={recipeNew.diets} name="Diets" required onChange={handleSelectChange} aria-multiselectable className={style.blockDerSelect}>
          <option value="" className={style.options}>
            Diet
          </option>
          <option value="1" className={style.options}>
            Gluten Free
          </option>
          <option value="2" className={style.options}>
            Dairy Free
          </option>
          <option value="3" className={style.options}>
            Lacto Ovo Vegetarian
          </option>
          <option value="4" className={style.options}>
            Vegan
          </option>
          <option value="5" className={style.options}>
            Paleolithic
          </option>
          <option value="6" className={style.options}>
            Primal
          </option>
          <option value="7" className={style.options}>
            Whole 30
          </option>
          <option value="8" className={style.options}>
            Pescatarian
          </option>
          <option value="9" className={style.options}>
            Ketogenic
          </option>
          <option value="10" className={style.options}>
            Fodmap Friendly
          </option>
        </select>

        </div>


        <div className={style.dietsDiv}>Dietas: {recipeNew.diets}</div>
        <p className={style.error}>{errors.diets}</p>
        <button type="submit" className={style.btn} onClick={handlerSubmit}> Crear Receta! </button>
      </form>
    </div>
  );
}
