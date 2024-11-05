
const typeModel = require("../Models/type")
const typesMantainceRoute ="/type/type-mant"


exports.GetAllTypeMant = (req,res,next) =>{
    typeModel.findAll()
    .then((result) => {
        const types = result.map((t) => t.dataValues);
        res.render("typeViews/type-mant",{
           types: types,
           IsEmpty: types.length ===0
        })
    }).catch((err) => {
        console.log(err);
    });
}

exports.GetAddType = (req,res,next) =>{
   return res.render("typeViews/type-add")
}

exports.PostAddType = (req,res,next) =>{
    const {Name} = req.body

    typeModel.create({
        Name
    }).then((result) => {
        return res.redirect(typesMantainceRoute);
    }).catch((err) => {
        console.log(err);
    });
}


exports.GetEditType = (req,res,next) =>{
    const id = req.params.id
    typeModel.findByPk(id)
    .then((result) => {

      const type = result.dataValues;
      return res.render("typeViews/type-edit",{
        type: type,
      })  
    }).catch((err) => {
        console.log(err);
    });
}


exports.PostEditType= (req,res,next) =>{
    const {id, Name} = req.body
    typeModel.update({
        Name
    },{where:{id}})
    .then((result) => {
        return res.redirect(typesMantainceRoute)
    }).catch((err) => {
        console.log(err); 
    });
}

exports.PostDeleteType = (req,res,next) =>{
    const id = req.body.id

    typeModel.destroy({where:{id:id}})
    .then((result) => {
      return res.redirect(typesMantainceRoute)    
    }).catch((err) => {
        console.log(err);
    });
}

