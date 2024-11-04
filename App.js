const express = require("express");

const app = express()

app.use(function(req,res,next){
    res.status(200).send(`
        <h1> Hello whorld</h1>
        `)
})


app.listen(8001)