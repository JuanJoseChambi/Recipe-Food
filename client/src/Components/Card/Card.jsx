import style from "./Card.module.css";
export default function Card({ recipe }) {
  return (
    <div className={style.card}>
      <div className={style.info}>
        <h3>ID:{recipe.id}</h3>
        <h1>{recipe.name}</h1>
        <h2>{recipe.dieta}</h2>
      </div>
      <div className={style.img}>
        <img src={recipe.image} alt={recipe.name} />
      </div>
    </div>
  );
}
