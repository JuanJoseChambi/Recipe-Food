const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const {Diet} = require("../db")
const URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=";

const getDiets = async () => {
    const dietDB = await Diet.findByPk(1);
    const dietDBFull = await Diet.findAll()
  if (!dietDB) {
    const { data } = await axios.get(`${URL}${API_KEY}&addRecipeInformation=true&number=50`);

      const allDiets = data.results.flatMap((ele) => ele.diets);
      const setDiets = [...new Set(allDiets)];
      const OrderDiet = setDiets.map(ele => ({name:ele}))
      const upDiets = Diet.bulkCreate(OrderDiet)
      // console.log(OrderDiet);
    return upDiets
    }else{
      return dietDBFull;
    }
};
// getDiets()

module.exports = {getDiets}
