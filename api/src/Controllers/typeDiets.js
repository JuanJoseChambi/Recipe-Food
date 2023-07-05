const {getApi} = require("../Handlers/getApi");
const {Diet} = require("../db")

const typeDiets = async(req, res) => {
    const allDiets = await Diet.findAll();
    res.status(200).json(allDiets);
    
}
module.exports = {typeDiets};