const Regions = require("../Models/region")
const Types = require("../Models/type")
const Pokemons = require("../Models/pokemon")

exports.config =()=>{
Regions.hasMany(Pokemons,{foreignKey: "RegionId"})
Pokemons.belongsTo(Regions,{foreignKey: "RegionId"})
Types.hasMany(Pokemons,{foreignKey: "TypesId"})
Pokemons.belongsTo(Types,{foreignKey: "TypesId"})
}


