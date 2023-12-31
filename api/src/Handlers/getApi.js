const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const {Recipe, Diet} = require("../db")
const URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=";

const getApi = async () => {
  const { data } = await axios.get(`${URL}${API_KEY}&addRecipeInformation=true&number=100`);
      const allApi = data.results.map((ele) => {
        return {
          id: ele.id,
          name: ele.title,
          image: ele.image,
          summary: ele.summary,
          healthScore: ele.healthScore,
          diets: ele.diets.map((diet)=> {return{name:diet}}),
          stepByStep: ele.analyzedInstructions[0]?.steps,
        };
      });;
      const allDB = await Recipe.findAll({
        include: {
          model: Diet,
          atrributes: ["name"],
          through: {
            atrributes: ["id", "name"],
          },
        },
      });
      allApi.unshift(...allDB);
      // console.log(allApi);
    return allApi
};
// getApi()
module.exports = {getApi}