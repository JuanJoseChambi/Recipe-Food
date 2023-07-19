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
      console.log(dietAll);
      return upDiets
    }else{
      return dietDBFull;
  }
};
getDiets()

module.exports = {getDiets}



