import Cards from "../../Components/Cards/Cards";
import style from "./Home.module.css";
import Nav from "../Nav/Nav";


export default function Home({recipes, searchRecipe}) {
  return (
    <div > 
      <div className={style.nav}>
        <Nav className={style.nav} searchRecipe={searchRecipe}/>
      </div>
      <div className={style.home}>
        <div className={style.block}>
          <Cards recipes={recipes} className={style.cards}/>
        </div>
      </div>
    </div>
  );
}
