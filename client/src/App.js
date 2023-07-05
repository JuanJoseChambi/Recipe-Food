import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CreateRecipe from "./Pages/CreateRecipe/CreateRecipe";
import Error from "./Pages/Error/Error";
// import axios from "axios";


export default function App () {
  // const url = "http://localhost:3001/recipes";

  return (

    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Create" element={<CreateRecipe />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>

  );
}
