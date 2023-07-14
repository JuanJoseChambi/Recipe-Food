// import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/Reducers/Recipes/recipeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Card({ recipe }) {//
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false)

  const favorites = useSelector(state => state.recipes.favorites)

  //Vuelve a setear los id con fav a fav para que no se quite el fav en home
  useEffect(() => {
    favorites.forEach((fav) => {
       if (fav.id === recipe.id) {
          setIsFav(true);
       }
    });
 }, [favorites]);
//si ya era fav osea true se lo setea a false ya que se lo volvio a selecionar y hacer click sobre algo que ya era fav es quitarla de fav.
  function handlerFavorite () {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(recipe.id));
    }
//y si esta card no era fav se la setea a true, y se agrega la receta a la que se le apreto al estado global de favs.
    if (!isFav) {
      setIsFav(true);
      dispatch(addFav(recipe));
    }
  }

  return (
    <div className={style.card}>
        <div className={style.img}>
          {isFav?
          <h2 onClick={handlerFavorite} className={style.guardar}><i className='bx bxs-bookmark-star'></i></h2>:
          <h2 onClick={handlerFavorite} className={style.guardar}><i className='bx bx-bookmark' ></i></h2>}
          <img src={recipe.image} alt={recipe.name} />
        </div>
      <NavLink to={`/Detail/${recipe.id}`} className={style.nav}>
        <h2 className={style.name}>{recipe.name}</h2>
        <div className={style.diets}>
          <p>{recipe.diets}</p>
        </div>
      </NavLink>
    </div>
  );
}
