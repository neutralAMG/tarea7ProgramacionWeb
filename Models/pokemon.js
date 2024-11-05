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
    references:{
        model: "Types",
        key: "id"
    }
},
RegionId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
        model: "Regions",
        key: "id"
    }
}
},{tableName:"Pokemons"})


module.exports = Pokemons