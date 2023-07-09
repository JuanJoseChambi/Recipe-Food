const { Router } = require('express');
const router = Router();
const { getApi } = require("../Handlers/getApi");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");


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

//   const URL = "https://api.spoonacular.com/recipes/";
  
//   router.get("/:idRecipe",async (req, res) => {
//     const { idRecipe } = req.params;

//     try {
//       const response = await axios.get(
//         URL + `${idRecipe}/information?apiKey=${API_KEY}`
//         );
   
//     const recipeDB = await Recipe.findOne({where: {id: idRecipe, createInDB: true}},{
//       include:{
//         model: Diet,
//         attributes:["name"],
//         through:{
//           attributes:[]}
//       }});

//     if (recipeDB) { // DETALLES DE LA BASE DE DATOS
//       const { id, name, image, summary, diets, instructions, healthScore } = recipeDB;
//       const detailDB = {
//         id:id,
//         name :name,
//         image:image,
//         summary:summary,
//         stepByStep:instructions,
//         healthScore:healthScore,
//       };

//       await detailDB.addDiet(diets);
      
//       res.status(200).json(detailDB);

//     } else if (response) { //DETALLES DE LA API
//       const { id, title, image, summary, diets, analyzedInstructions, healthScore } = response.data;
//       const detailsAPI = {
//         id: id,
//         name: title,
//         image: image,
//         summary: summary.replace(/<[^>]+>/g, ''),
//         diets: diets,
//         stepByStep: analyzedInstructions[0]?.steps.map((ele => {
//           return ` Paso ${ele.number}: ${ele.step}`;
//         })),
//         healthScore: healthScore,
//       };
      

//       return res.status(200).json(detailsAPI);
//     } else {
//       res.status(404).send("No existe esa receta");
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

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

module.exports = router;
