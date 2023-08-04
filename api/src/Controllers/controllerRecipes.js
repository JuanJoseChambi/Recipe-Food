const { Router } = require('express');
const router = Router();
const { getApi } = require("../Handlers/getApi");
require("dotenv").config();
const { Recipe } = require("../db");



// Buscar por Name--------------------------------------------
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
          return res.status(200).json({ message: "La receta no se encontró" });
        }
      }
      return res.status(200).json(api)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  // --------------------------------------------------------------
  
  // Buscar por ID--------------------------------------------------

  router.get("/:idRecipe",async (req, res) => {
    const {idRecipe} = req.params;

    const allInfo = await getApi()
    const wanted = allInfo.filter(ele => ele.id == idRecipe);
    try {
      if (wanted.length > 0) {
        res.status(200).json(wanted)
      }else{
        res.status(400).send("La receta no fue encontrada")
      }
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  })

// --------------------------------------------------------------

// Crear Receta--------------------------------------------------
router.post("/" , async (req, res) => {
  const { name, image, summary, stepByStep, healthScore ,diets} = req.body;

  if (name && image && summary && stepByStep && healthScore) {

    const recipeCreatedInDB = await Recipe.create({
      name,
      image,
      summary,
      stepByStep,
      healthScore,
      createInDB:true,
    });

    await recipeCreatedInDB.addDiet(diets);
    res.status(200).json(recipeCreatedInDB);
    // res.status(200).send("Receta creada!");
  } else {
    res.status(400).send("Faltan datos");
  }
});

// --------------------------------------------------------------
// Eliminar Receta--------------------------------------------------

router.delete("/:id", async (req, res) => {
  const {id} = req.params;

  try {
    const recipeDel = await Recipe.findOne({where:{id:id}});
    if (recipeDel) {
      recipeDel.destroy();
      res.status(200).json({message:"La receta fue Eliminada"})
    }else{
      res.status(404).json({message:"La receta no se Encontro"})
    }
  } catch (error) {
    res.status(500).json({error:error.message})
  }
})
// --------------------------------------------------------------
module.exports = router;