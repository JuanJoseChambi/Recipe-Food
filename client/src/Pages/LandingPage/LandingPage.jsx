import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.landing}>
      <h1 className={style.h1}>Landing Page</h1>
      <NavLink to="/Home">
        <button className={style.buton}>El Familiar</button>
      </NavLink>
    </div>
  );
}
