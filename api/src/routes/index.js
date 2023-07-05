const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { detailRecipeById } = require("../Controllers/detailRecipeById");
const {searchRecipeByName} = require("../Controllers/searchRecipeByName");
const { createRecipe } = require("../Controllers/createRecipe");
const { getAllRecipes } = require("../Controllers/getAllRecipes");
const { typeDiets } = require("../Controllers/typeDiets");
const {getDiets} = require("../Handlers/getDiets")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipes/:idRecipe", detailRecipeById ); 
router.get("/recipes", searchRecipeByName);
router.post("/recipes", createRecipe);
router.get("/all",getAllRecipes);
router.get("/diets", typeDiets);
router.get("/diets/all",getDiets)

module.exports = router;
