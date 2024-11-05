const router = require("express").Router()
const  regionController = require("../Controllers/regionController")

router.get("/region-mant", regionController.GetAllRegionMant)
router.get("/region-add", regionController.GetAddRegion)
router.post("/region-add", regionController.PostAddRegion)
router.get("/region-edit/:id", regionController.GetEditRegion)
router.post("/region-edit", regionController.PostEditRegion)
router.post("/region-delete", regionController.PostDeleteRegion)


module.exports = router;