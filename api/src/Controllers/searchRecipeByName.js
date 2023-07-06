const { Router } = require('express');
const router = Router();
const { getApi } = require("../Handlers/getApi");


// Buscar por Name
router.get("/" , async (req, res) => {
  const { name } = req.query;
  const api = await getApi();
  try {
      if(name) {
        const recipesFiltered = await api.filter((obj) =>
        obj.name.toLowerCase().includes(name.toString().toLowerCase()))

        if (recipesFiltered.length > 0) {
          return res.status(200).json(recipesFiltered);
        } else {
          return res.status(404).send("La receta no se encontro");
        }
      }
      return res.status(200).json(api)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
module.exports = router;
