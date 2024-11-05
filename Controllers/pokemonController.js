const Pokemons = require("../Models/pokemon");
const pokemonModel = require("../Models/pokemon");
const Regions = require("../Models/region");
const Types = require("../Models/type");
const PokemonMantainenceRout = "/pokemon/pokemon-mant";

exports.GetAllPokemonIndex = (req,res,next) =>{
   pokemonModel.findAll({include:[{model: Regions, model:Types}]})
    .then((result) => {
       const pokemons = result.map((p) => p.dataValues)
       return res.render("pokemonViews/pokemon-index", {
            pokemons: pokemons,
            IsEmpty: pokemons.length === 0
        })
    }).catch((err) => {
        console.log(err)
    });

}

exports.GetAllPokemonMant = (req,res,next) =>{
    pokemonModel.findAll({include:[{model: Regions, model:Types}]})
    .then((result) => {
       const pokemons = result.map((p) => p.dataValues)
       return res.render("pokemonViews/pokemon-mant", {
            pokemons: pokemons,
            hasPokemon: pokemons.length > 0
        })
    }).catch((err) => {
        console.log(err)
    });

};

exports.GetAddPokemon = (req,res,next) =>{
  return  res.render("pokemonViews/pokemon-add", {})
};

exports.PostAddPokemon = (req,res,next) =>{
    const {Name, ImageUrl ,RegionId, TypeId} = res.body

    pokemonModel.create({
        Name,
        ImageUrl,
        RegionId,
        TypeId
    }).then((result) => {

      return  res.redirect(PokemonMantainenceRout)
        
    }).catch((err) => {
        console.log(err)
    });
};


exports.GetEditPokemon = (req,res,next) =>{
    const id = res.params.id;
    Pokemons.findByPk(id)
    .then((result) => {
        if(!result)
     return res.redirect("/pokemon/pokemon-mant")

    const pokemon = result.dataValues;

      return res.render("pokemonViews/pokemon-edit",{
            pokemon: pokemon
        })

    }).catch((err) => {
        console.log(err)
    });
};


exports.PostEditPokemon = (req,res,next) =>{
    const {Name, id, ImageUrl ,RegionId, TypeId} = res.body

    pokemonModel.Updare({
        Name,
        ImageUrl,
        RegionId,
        TypeId
    },{where:{id: id}}).then((result) => {

      return  res.redirect(PokemonMantainenceRout)
        
    }).catch((err) => {
        console.log(err)
    });
};

exports.PostDeletePokemon = (req,res,next) =>{
    const id = res.body.id;

    pokemonModel.destroy({where: {id: id}})
    .then((result) => {
        return res.redirect(PokemonMantainenceRout)
    }).catch((err) => {
        console.log(err);
        
    });
};