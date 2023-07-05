const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");
const URL = "https://api.spoonacular.com/recipes/";

const detailRecipeById = async (req, res) => {
  const { idRecipe } = req.params;
  try {
    const response = await axios.get(
      URL + `${idRecipe}/information?apiKey=${API_KEY}`
    );
   
    const recipeDB = await Recipe.findOne({where: {id: idRecipe, createInDB: true}},{
      include:{
        model: Diet,
        attributes:["name"],
        through:{
          attributes:[]}
      }});

    if (recipeDB) {
      const { id, title, image, summary, diets, instructions, healthScore } =
        recipeDB;
      const detailDB = {
        id,
        name :title,
        image:image,
        summary:summary,
        diet :diets,
        stepByStep:instructions,
        healthScore:healthScore,
      };
      res.status(200).json(detailDB);
    } else if (response) {
      const { id, title, image, summary, diets, analyzedInstructions, healthScore } =
        response.data;
      const detailsAPI = {
        id: id,
        name: title,
        image: image,
        summary: summary,
        diet: diets,
        stepByStep: analyzedInstructions[0]?.steps.map((ele => {
          return `Paso:${ele.number}:  ${ele.step}  `;
        })),
        healthScore: healthScore,
      };
      return res.status(200).json(detailsAPI);
    } else {
      res.status(404).send("No existe esa receta");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { detailRecipeById };
