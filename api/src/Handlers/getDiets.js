const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const {Diet} = require("../db")
const URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=";

const getDiets = async () => {
  const { data } = await axios.get(`${URL}${API_KEY}&addRecipeInformation=true&number=10`);
      const allDiets = data.results.map((ele) =>{ return {diet: ele.diets}});

      const setDiets = {...new Set(allDiets)};
      
      
      console.log(setDiets);
      
    return allApi
};
getDiets()

module.exports = {getDiets}
