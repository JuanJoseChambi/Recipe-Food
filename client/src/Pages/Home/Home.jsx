import axios from "axios";
import Cards from "../../Components/Cards/Cards";
import style from "./Home.module.css";
import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";


export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const allInfo = async () => {
      const { data } = await axios.get("http://localhost:3001/recipes");
      console.log(data);
      
      const info = data.map((ele) => {
        return {
          id: ele.id,
          name: ele.name,
          image: ele.image,
          dieta: ele.diets.map(ele => ele.name),
        };
      });
      setRecipes(info);
    };
    allInfo();
  }, []);

  return (
    // crarr la search bar en home
    <div > 
      <div className={style.nav}>
        <Nav className={style.nav}/>
      </div>
      <div className={style.home}>
        <div className={style.block}>
          <Cards recipes={recipes} className={style.cards}/>
        </div>
      </div>
    </div>
  );
}
