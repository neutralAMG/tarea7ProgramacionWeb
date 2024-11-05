const {Sequelize, DataTypes } = require("sequelize");
const connection = require("../Context/appContext");
const Pokemons = require("../Models/pokemon")


const Regions = connection.define("Region",{
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
}, {tableName: "Regions"})

module.exports = Regions