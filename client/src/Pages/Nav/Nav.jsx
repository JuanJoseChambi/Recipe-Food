import style from "./Nav.module.css"
import Lupa from "../../Assets/search.png"
import Logo from "../../Assets/logo.png"


export default function Nav () {
    return(
        <div className={style.nav}>
            <img src={Logo} alt="logo" className={style.logo}/>
            <input type="search"className={style.search} placeholder="Buscar Receta"/>
            <button className={style.butonSearch}><img src={Lupa} alt="Lupa" /></button>
           
            <button className={style.botonCreate}>Create Recipe</button>
        </div>
    )
}