const {Sequelize, DataTypes } = require("sequelize");
const connection = require("../Context/appContext")
const Pokemons = require("../Models/pokemon")

const Types = connection.define("Types",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    Name:{
        type: DataTypes,String,
        allowNull: false,
    }
},{tableName:"Types"})


module.exports = Types