const Regions = require("../Models/region")
const Types = require("../Models/type")
const Pokemons = require("../Models/pokemon")

exports.config =()=>{
Regions.hasMany(Pokemons,{foreignKey: "RegionId", onDelete: "CASCADE", hooks:true})
Pokemons.belongsTo(Regions,{as: "region", foreignKey: "RegionId"})
Types.hasMany(Pokemons,{foreignKey: "TypeId", onDelete: "CASCADE",  hooks:true})
Pokemons.belongsTo(Types,{as: "type", foreignKey: "TypeId"})
}


