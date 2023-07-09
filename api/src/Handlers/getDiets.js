// const axios = require("axios");
// require("dotenv").config();
// const { API_KEY } = process.env;
// const {Diet} = require("../db")
// const URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=";
// const {getApi} = require("./getApi")

// const getDiets = async () => {
//     const dietDB = await Diet.findByPk(1);
//     const dietDBFull = await Diet.findAll()
//   if (!dietDB) {
//     const { data } = await axios.get(`${URL}${API_KEY}&addRecipeInformation=true&number=50`);
//     console.log(data);

//       const allDiets = data.results.flatMap((ele) => ele.diets);
//       const setDiets = [...new Set(allDiets)];
//       const OrderDiet = setDiets.map(ele => ({name:ele}))
//       const upDiets = Diet.bulkCreate(OrderDiet)
//       console.log(OrderDiet);
//     return upDiets
//     }else{
//       return dietDBFull;
//     }
// };
// getDiets()

// module.exports = {getDiets}

require("dotenv").config();
const {Diet} = require("../db")
const {getApi} = require("./getApi")

const getDiets = async () => {
    const dietDB = await Diet.findByPk(1);
    const dietDBFull = await Diet.findAll()
  if (!dietDB) {
    const dietAll = await getApi();
    const allDiets = dietAll.flatMap(ele => ele.diets.map(nameObj => nameObj.name));
    const uniqueDiets = [...new Set(allDiets)].map(name => ({ name }));
    const upDiets = Diet.bulkCreate(uniqueDiets)
    // console.log(uniqueDiets);
    return upDiets
    }else{
      return dietDBFull;
    }
};
// getDiets()

module.exports = {getDiets}
