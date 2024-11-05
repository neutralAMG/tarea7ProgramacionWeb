const express = require("express");
const path = require("path")
const app = express()
const {engine} = require("express-handlebars")
const pokemonRoutes = require("./routes/pokemonRoutes")
const regionRoutes = require("./routes/regionRoutes")
const typeRoutes = require("./routes/typeRoutes")
const connection = require("./Context/appContext")
const modelRelationshipConfig = require("./Utils/modelRelentionshipConfig")



app.engine("hbs",engine({
layoutsDir: "views/layouts",
defaultLayout:"main-layout",
extname:"hbs"

}))
app.set("view engine", "hbs")
app.set("views", "views")

app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended: false}))

app.use("/pokemon", pokemonRoutes)
app.use("/region", regionRoutes)
app.use("/type", typeRoutes)


app.use(function(req,res,next){
   res.redirect("/pokemon/pokemon-index")
})

modelRelationshipConfig.config()
connection.sync(/*{alter: true}*/).then((result) =>{
    app.listen(8001);
}).catch((err)=>{
    console.log(err)
})
