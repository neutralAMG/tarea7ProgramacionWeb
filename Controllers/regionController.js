
const regionModel = require("../Models/region")

const RegionMatainenceRoute = "/region/region-mant"

exports.GetAllRegionMant = (req,res,next) =>{
    regionModel.findAll()
    .then((result) => {

        const regions = result.map((p) => p.dataValues);
       return res.render("regionViews/region-mant", {
            regions: regions,
            IsEmpty: regions.length === 0
        })
    }).catch((err) => {
        console.log(err)
    });

}

exports.GetAddRegion = (req,res,next) =>{
  return  res.render("regionViews/region-add")
}

exports.PostAddRegion = (req,res,next) =>{
    const {Name} = req.body

    regionModel.create({
        Name
    }).then((result) => {
        return res.redirect(RegionMatainenceRoute);
    }).catch((err) => {
        console.log(err);
        
    });
}


exports.GetEditRegion = (req,res,next) =>{
    const id = req.params.id
    regionModel.findByPk(id)
    .then((result) => {

      const region = result.dataValues;
      return res.render("regionViews/region-edit",{
        region: region,
      })  
    }).catch((err) => {
        console.log(err);
        
    });
}


exports.PostEditRegion = (req,res,next) =>{
    const {id, Name} = req.body
    regionModel.update({
        Name
    },
    {where:{id:id}})
    .then((result) => {
        return res.redirect(RegionMatainenceRoute)
    }).catch((err) => {
        console.log(err); 
    });
}

exports.PostDeleteRegion = (req,res,next) =>{
    const id = req.body.id

    regionModel.destroy({where:{id:id}})
    .then((result) => {
      return res.redirect(RegionMatainenceRoute)    
    }).catch((err) => {
        console.log(err);
    });
}