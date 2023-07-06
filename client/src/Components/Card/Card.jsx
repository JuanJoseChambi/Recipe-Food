import style from "./Card.module.css";
export default function Card({ recipe }) {
  return (
    <div className={style.card}>
        
        <div className={style.img}>
          <img src={recipe.image} alt={recipe.name} />
        </div>

        <h2 className={style.name}>{recipe.name}</h2>

        <div className={style.diets}>
          <p>{recipe.dieta}</p>
        </div>

    </div>
  );
}
