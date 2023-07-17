import style from "./Null.module.css"
import svg from "../../Assets/carne3.svg"

export default function Null () {
    return (
        <div className={style.container}>
            <div className={style.svg}>
                <img src={svg} alt="food" />
            </div>
            <div className={style.text}></div>
        </div>
    )
}