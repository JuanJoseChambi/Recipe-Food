const { Recipe, Diet } = require("../db");

const createRecipe = async (req, res) => {
  const { name, image, summary, instructions, healthScore, createInDB, diet} = req.body;

  if (name && image && summary && instructions && healthScore) {

    const recipeCreatedInDB = await Recipe.create({
      name,
      image,
      summary,
      instructions,
      healthScore,
      createInDB,
    });
    await recipeCreatedInDB.addDiet(diet);
    res.status(200).json(recipeCreatedInDB);
    // res.status(200).send("Receta creada!");
  } else {
    res.status(400).send("Faltan datos");
  }
};
module.exports = { createRecipe };
