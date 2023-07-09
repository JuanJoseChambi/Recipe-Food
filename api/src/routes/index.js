const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { typeDiets } = require("../Controllers/typeDiets");
const allRecipes = require("../Controllers/controllerRecipes");

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipes", allRecipes);
router.get("/diets", typeDiets);


module.exports = router;
