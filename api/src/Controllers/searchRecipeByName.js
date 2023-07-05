

const { getApi } = require("../Handlers/getApi");

const searchRecipeByName = async (req, res) => {
  const { name } = req.query;
  const api = await getApi();

  try {
    if (name.length > 0) {
      const recipesFiltered = await api.filter((obj) =>
        obj.name.toLowerCase().includes(name.toString().toLowerCase())
      );
      if (recipesFiltered.length > 0) {
        res.status(200).json(recipesFiltered);
      } else {
        res.status(404).send("La receta no se encontro");
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { searchRecipeByName };
