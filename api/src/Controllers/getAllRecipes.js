const { getApi } = require("../Handlers/getApi");

const getAllRecipes = async (req, res) => {
  try {
    const data = await getApi();
  res.status(200).json(data);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
};
module.exports = { getAllRecipes };
