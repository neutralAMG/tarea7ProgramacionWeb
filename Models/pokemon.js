const {DataTypes} = require("sequelize");
const connection = require("../Context/appContext")
const Pokemons = connection.define("pokemon",{
id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
Name:{
    type: DataTypes.STRING,
    allowNull: false
},
ImgUrl:{
    type: DataTypes.STRING,
    allowNull: false
},
TypeId:{
    type: DataTypes.INTEGER,
    allowNull: false,

},
RegionId:{
    type: DataTypes.INTEGER,
    allowNull: false,
 
}
},{tableName:"Pokemons"})


module.exports = Pokemons