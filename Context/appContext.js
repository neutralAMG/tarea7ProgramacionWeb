const Sequelize = require("sequelize");

const path = require("path")

const connection = new Sequelize({
    dialect: "sqlite",
    storage: path.join(path.dirname(require.main.filename), "Database", "Pokemon.sqlite")
})

module.exports = connection 