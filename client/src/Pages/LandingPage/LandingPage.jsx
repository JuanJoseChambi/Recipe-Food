import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css";
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "../../Redux/Reducers/User/userSlice";
import { useState } from "react";

export default function LandingPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user)
  const [name, setName] = useState("");

  function handleNameChange (event){
    setName(event.target.value);
  };

  function handlerSend() {
    dispatch(setUser(name));
    setName("")
  }

  const misEstilos = {
    backgroundColor: "black"
  }

  return (
    <div style={misEstilos}>
      <div className={style.all}>
        <div className={style.landing}>
        <h1 className={style.h1}>Food Recipes</h1>
        <div className={style.NameX}>
          <input type="text" value={name} placeholder="Name ( Optional )"  onChange={handleNameChange} className={style.inputName}/>
          <button className={style.btn} onClick={handlerSend}><i class='bx bxs-send' ></i></button>
        </div>
        <div className={style.mesage}>
          <h3>Hi! {user}</h3>
          <h3>Welcome to this website of recipes and meals, with information on preparations and others...</h3>
        </div>
        <NavLink to="/Home">
          <button className={style.button}>Home</button>
        </NavLink>
        </div>
        <div className={style.image1}>
          <img src="https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>
  );
}
