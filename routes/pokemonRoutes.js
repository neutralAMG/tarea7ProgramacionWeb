const router = require("express").Router()
const pokemonController = require("../Controllers/pokemonController")

router.get("/pokemon-index", pokemonController.GetAllPokemonIndex)
router.get("/pokemon-mant", pokemonController.GetAllPokemonMant)
router.get("/pokemon-add", pokemonController.GetAddPokemon)
router.post("/pokemon-add", pokemonController.PostAddPokemon)
router.get("/pokemon-edit/:id", pokemonController.GetEditPokemon)
router.post("/pokemon-edit", pokemonController.PostEditPokemon)
router.post("/pokemon-delete", pokemonController.PostDeletePokemon)

module.exports = router;