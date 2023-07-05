const { Recipe, Diet } = require("../db");

const createRecipe = async (req, res) => {
  const { name, image, summary, instructions, healthScore, createInDB, diet} = req.body;

  if (name && image && summary && instructions && healthScore) {

    let recipeCreatedInDB = await Recipe.create({
      name,
      image,
      summary,
      instructions,
      healthScore,
      createInDB,
    });
    
    let aplicateDiet = await Diet.findOne({ where: {name: diet} });
    await recipeCreatedInDB.addDiet(aplicateDiet);
    res.status(200).json(recipeCreatedInDB)
    // res.status(200).send("Receta creada!");
  } else {
    res.status(400).send("Faltan datos");
  }
};
module.exports = { createRecipe };
