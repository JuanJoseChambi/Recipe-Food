import style from "./Nav.module.css"
import Lupa from "../../Assets/search.png"
import Logo from "../../Assets/logo.png"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { filterRecipe, originRecipe, orderRecipes, healthyFoodLevel, resteAll} from "../../Redux/Reducers/Recipes/recipeSlice";
import { useDispatch } from "react-redux"
 
export default function Nav ({searchRecipe}) {
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    function handlerChange(evento){
        const name = evento.target.value;
        setName(name);
        searchRecipe(name);
    }

    function handlerFilter (evento) {
        const dietType = evento.target.value;
        dispatch(filterRecipe(dietType))
    };

    function handlerCreated (evento) {
        const origin = evento.target.value;
        dispatch(originRecipe(origin))
    }

    function handlerOrder (evento) {
        const order = evento.target.value;
        dispatch(orderRecipes(order))
    }

    function hanlderLevelHealth (evento) {
        const level = evento.target.value;
        dispatch(healthyFoodLevel(level))
    }

    function handlerReset () {
        dispatch(resteAll())
    }


    return(
        <div className={style.nav}>
            <div className={style.searchSector}>
                <NavLink to="/">
                    <img src={Logo} alt="logo" className={style.logo}/>
                </NavLink>
                <div className={style.searchTotal}>
                    <input type="search" value={name} onChange={handlerChange} className={style.search} placeholder="Buscar Receta"/>
                    <button onClick={() => searchRecipe(name)} className={style.butonSearch}><img src={Lupa} alt="Lupa" /></button>
                </div>
                <NavLink to="/Create">
                <button className={style.botonCreate}>Create Recipe</button>
                </NavLink>
            </div>
            
            <div className={style.blockSelectors}>
                <select onChange={handlerFilter} aria-multiselectable className={style.selector} /* Filtrar */> 
                    <option className={style.options} value="allDiets">All Diets</option>
                    <option className={style.options} value="gluten free">Gluten Free</option>
                    <option className={style.options} value="dairy free">Dairy Free</option>
                    <option className={style.options} value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
                    <option className={style.options} value="vegan">Vegan</option>
                    <option className={style.options} value="paleolithic">Paleolithic</option>
                    <option className={style.options} value="primal">Primal</option>
                    <option className={style.options} value="whole 30">Whole 30</option>
                    <option className={style.options} value="pescatarian">Pescatarian</option>
                    <option className={style.options} value="ketogenic">Ketogenic</option>
                    <option className={style.options} value="fodmap friendly">Fodmap Friendly</option>
                </select>
                <select onChange={handlerCreated} className={style.selector}>
                    <option className={style.options} value="allRecipes">All Origin</option>
                    <option className={style.options} value="createInDB">Created</option>
                    <option className={style.options} value="api">Api</option>
                </select>
                <select onChange={handlerOrder} className={style.selector} /* Ordenar */>
                    <option className={style.options} value="original">Original Order</option>
                    <option className={style.options} value="Ascendente">A - Z</option>
                    <option className={style.options} value="Descendente">Z - A</option>
                </select>
                <select onChange={hanlderLevelHealth} className={style.selector}> 
                    <option className={style.options} value="original">Health Score</option>
                    <option className={style.options} value="Ascendente">1-100</option>
                    <option className={style.options} value="Descendente">100-1</option>
                </select>
            <button onClick={handlerReset} className={style.btnReset}>Reset All</button>
            </div>


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