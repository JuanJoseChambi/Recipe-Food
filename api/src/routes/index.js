const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { detailRecipeById } = require("../Controllers/detailRecipeById");
const { createRecipe } = require("../Controllers/createRecipe");
const { typeDiets } = require("../Controllers/typeDiets");
const nameYall = require("../Controllers/searchRecipeByName");
const { getDiets } = require("../Handlers/getDiets");



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipes", nameYall);
router.get("/recipes/:idRecipe", detailRecipeById ); 
router.post("/recipes", createRecipe);
router.get("/diets", typeDiets);
router.get("/test",getDiets)

module.exports = router;
