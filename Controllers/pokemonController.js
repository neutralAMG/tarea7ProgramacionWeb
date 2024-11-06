const Pokemons = require("../Models/pokemon");
const pokemonModel = require("../Models/pokemon");
const RegionsModel = require("../Models/region");
const TypesModel = require("../Models/type");
const PokemonMantainenceRout = "/pokemon/pokemon-mant";

exports.GetAllPokemonIndex = (req,res,next) =>{
    
    RegionsModel.findAll().then((r) =>{
            
      TypesModel.findAll().then((t) =>{
       pokemonModel.findAll({include:[{model: RegionsModel, as:"region"}, {model:TypesModel, as:"type"}]})
       .then((result) => {

       const pokemons = result.map((p) => p.dataValues)

       console.log(pokemons)
       return res.render("pokemonViews/pokemon-index", {
            pokemons: pokemons,
            regions: r.map((r) => r.dataValues),
            types:  t.map((t) => t.dataValues),
            IsEmpty: pokemons.length === 0
          })
       }).catch((err) => {
        console.log(err)
           });
         })
    })


}

exports.GetAllPokemonMant = (req,res,next) =>{
    pokemonModel.findAll({include:[{model: RegionsModel, as:"region"}, {model:TypesModel, as:"type"}]})
    .then((result) => {
       const pokemons = result.map((p) => p.dataValues)
       return res.render("pokemonViews/pokemon-mant", {
            pokemons: pokemons,
            IsEmpty: pokemons.length === 0
        })
    }).catch((err) => {
        console.log(err)
    });

};

exports.GetAddPokemon = (req,res,next) =>{
    RegionsModel.findAll().then((r) =>{       
        TypesModel.findAll().then((t) =>{
         return  res.render("pokemonViews/pokemon-add", {
            regions: r.map((r) => r.dataValues),
            types:  t.map((t) => t.dataValues),
         })

    }).catch((err) =>{
        console.log(err);
    })
   })
};

exports.PostAddPokemon = (req,res,next) =>{
    const {Name, ImgUrl ,RegionId, TypeId} = req.body

    pokemonModel.create({
        Name,
        ImgUrl,
        RegionId,
        TypeId
    }).then((result) => {

      return  res.redirect(PokemonMantainenceRout)
        
    }).catch((err) => {
        console.log(err)
    });
};


exports.GetEditPokemon = (req,res,next) =>{
    const id = req.params.id;
    RegionsModel.findAll().then((r) =>{       
      TypesModel.findAll().then((t) =>{
         Pokemons.findByPk(id)
          .then((result) => {
             if(!result)
               return res.redirect("/pokemon/pokemon-mant")
        
       const pokemon = result.dataValues;
        return res.render("pokemonViews/pokemon-edit",{
            pokemon: pokemon,
            regions: r.map((r) => r.dataValues),
            types:  t.map((t) => t.dataValues),
        })
    }).catch((err) => {
        console.log(err)
    });
  })
  })
};


exports.PostEditPokemon = (req,res,next) =>{
    const {Name, id, ImgUrl ,RegionId, TypeId} = req.body

    pokemonModel.update({
        Name,
        ImgUrl,
        RegionId,
        TypeId
    },{where:{id: id}}).then((result) => {

      return  res.redirect(PokemonMantainenceRout)
        
    }).catch((err) => {
        console.log(err)
    });
};

exports.PostDeletePokemon = (req,res,next) =>{
    const id = req.body.id;

    pokemonModel.destroy({where: {id: id}})
    .then((result) => {
        return res.redirect(PokemonMantainenceRout)
    }).catch((err) => {
        console.log(err);
        
    });
};