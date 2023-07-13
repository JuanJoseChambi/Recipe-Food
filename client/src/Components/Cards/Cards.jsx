import style from "./Cards.module.css"
import Card from "../Card/Card";
// import { useSelector } from "react-redux";

export default function Cards({recipesinPage}) {//
 
  return (
  <div className={style.cards}>
    {recipesinPage.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
    ))}
  </div>
 ) ;
}
