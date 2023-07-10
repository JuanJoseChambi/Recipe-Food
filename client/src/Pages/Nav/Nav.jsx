import style from "./Nav.module.css"
import Lupa from "../../Assets/search.png"
import Logo from "../../Assets/logo.png"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { filterRecipe } from "../../Redux/Reducers/Recipes/recipeSlice";
import { useDispatch } from "react-redux"
 
export default function Nav ({searchRecipe}) {
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    function handlerChange(evento){
        let name = evento.target.value;
        setName(name);
        searchRecipe(name);
    }

    function handlerFilter (evento) {
        const dietType = evento.target.value;
        dispatch(filterRecipe(dietType))
    };

    return(
        <div className={style.nav}>
            <NavLink to="/">
                <img src={Logo} alt="logo" className={style.logo}/>
            </NavLink>


            <input type="search" value={name} onChange={handlerChange} className={style.search} placeholder="Buscar Receta"/>
            <button onClick={() => searchRecipe(name)} className={style.butonSearch}><img src={Lupa} alt="Lupa" /></button>
            
            <div>
                <select onChange={handlerFilter} aria-multiselectable /* Filtrar */>
                    <option value="none">AllDietas</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="dairy free">Dairy Free</option>
                    <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="primal">Primal</option>
                    <option value="whole 30">Whole 30</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="fodmap friendly">Fodmap Friendly</option>
                </select>
                <select>
                    <option value="">Origin</option>
                    <option value="createInDB">Created</option>
                    <option value="">Api</option>
                </select>
            </div>
            <div>
                <select /* Ordenar */>
                    <option value="">Orden Alfabetico</option>
                    <option value="">Ascendente</option>
                    <option value="">Descendente</option>
                </select>
                <select> 
                    <option value="">Health Score</option>
                    <option value="">Ascendente</option>
                    <option value="">Descendente</option>
                </select>
            </div>

           
        <NavLink to="/Create">
            <button className={style.botonCreate}>Create Recipe</button>
        </NavLink>

        </div>
    )
}

/*
"gluten free"
"dairy free"
"lacto ovo vegetarian"
"vegan"
"paleolithic"
"primal"
"whole 30"
"pescatarian"
"ketogenic"
"fodmap friendly"
 
 */