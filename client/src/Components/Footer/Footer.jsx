
import style from "./Footer.module.css"

export default function Footer () {
    return( 
        <div className={style.footer}>
            <div className={style.svg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#272727" fill-opacity="1" d="M0,224L34.3,229.3C68.6,235,137,245,206,218.7C274.3,192,343,128,411,128C480,128,549,192,617,229.3C685.7,267,754,277,823,272C891.4,267,960,245,1029,208C1097.1,171,1166,117,1234,106.7C1302.9,96,1371,128,1406,144L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            </div>
            <div className={style.block1}>
                <a href="https://github.com/JuanJoseChambi" className={style.logos} target="_black"><i class='bx bxl-github'></i></a>
                <a href="https://www.linkedin.com/in/juan-jose-chambi/" className={style.logos} target="_black"><i class='bx bxl-linkedin-square'></i></a>
                <a href="mailto:chambijuanjose05@gmail.com" className={style.logos} target="_black"><i class='bx bxl-gmail'></i></a>
            </div>

        </div>
    )
}