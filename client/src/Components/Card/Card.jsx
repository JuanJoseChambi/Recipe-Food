import style from "./Card.module.css";
import { NavLink } from "react-router-dom";


export default function Card({ recipe }) {
  return (
    <div className={style.card}>
      <NavLink to={`/Detail/${recipe.id}`} className={style.nav}>
        <div className={style.img}>
          <img src={recipe.image} alt={recipe.name} />
        </div>

        <h2 className={style.name}>{recipe.name}</h2>

        <div className={style.diets}>
          <p>{recipe.diets}</p>
        </div>
      </NavLink>
    </div>
  );
}
