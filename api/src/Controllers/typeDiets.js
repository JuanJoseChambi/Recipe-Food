const {Diet} = require("../db")
const {getDiets} = require("../Handlers/getDiets")

const typeDiets = async(req, res) => {
    const infoDB = Diet.findAll();
    try {
        if (!infoDB.length) {
            const infoDietsApi = await getDiets();
            res.status(200).json(infoDietsApi)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
// typeDiets()
module.exports = {typeDiets};