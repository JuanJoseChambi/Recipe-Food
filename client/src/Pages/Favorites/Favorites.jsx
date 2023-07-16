import style from "./Favorites.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../Components/Card/Card";
import NoFavorites from "../../Components/Null/Null";
import Footer from "../../Components/Footer/Footer";

export default function Favorites() {
    const favorites = useSelector(state => state.recipes.favorites)
    const { user } = useSelector(state => state.user)

  return (
    <div >
      <div className={style.containerFav}>
        <NavLink to="/Home">
          <button className={style.buton}>
            <i className="bx bx-left-arrow-alt"></i>
          </button>
        </NavLink>
        {user?<h1 className={style.blockH1}>Favorites of {user}</h1>:<h1 className={style.blockH1}>Favorites</h1>}
        <div className={style.containerCardsFavs}>
            <div className={style.blockCard}>
                {favorites.length === 0? <NoFavorites/> : favorites.map(recipe => (
                    <Card key={recipe.id} recipe={recipe}/>
                ))}
            </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
