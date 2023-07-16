import style from "./Favorites.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../Components/Card/Card";
import NoFavorites from "../../Components/Null/Null";

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
        <div className={style.svgBottom}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#333333" fill-opacity="1" d="M0,192L21.8,197.3C43.6,203,87,213,131,192C174.5,171,218,117,262,112C305.5,107,349,149,393,181.3C436.4,213,480,235,524,245.3C567.3,256,611,256,655,245.3C698.2,235,742,213,785,213.3C829.1,213,873,235,916,234.7C960,235,1004,213,1047,176C1090.9,139,1135,85,1178,106.7C1221.8,128,1265,224,1309,234.7C1352.7,245,1396,171,1418,133.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
        </div>
      </div>
        
    </div>
  );
}
