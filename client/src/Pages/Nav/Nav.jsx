import style from "./Nav.module.css"
import Lupa from "../../Assets/search.png"
import Logo from "../../Assets/logo.png"
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav ({searchRecipe}) {

    const [name, setName] = useState("");

    function handlerChange(evento){
        let name = evento.target.value;
        setName(name);
        searchRecipe(name);
    }

    return(
        <div className={style.nav}>
            <img src={Logo} alt="logo" className={style.logo}/>


            <input type="search" value={name} onChange={handlerChange} className={style.search} placeholder="Buscar Receta"/>
            <button onClick={() => searchRecipe(name)} className={style.butonSearch}><img src={Lupa} alt="Lupa" /></button>
           
        <NavLink to="/Create">
            <button className={style.botonCreate}>Create Recipe</button>
        </NavLink>

        </div>
    )
}