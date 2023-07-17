import style from "./Error.module.css"
import SvgNotFound from "../../Assets/404PageNotFound.svg"

export default function Error (){
 return(
    <div className={style.error}>
        <div className={style.containerSvg}>
            <img src={SvgNotFound} alt="404 NotFound" />
        </div>
        <h2 className={style.h1Text}>{null}</h2>
    </div>
 )
}