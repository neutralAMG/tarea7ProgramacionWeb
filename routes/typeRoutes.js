const router = require("express").Router()
const  typeController = require("../Controllers/typeController")

router.get("/type-mant", typeController.GetAllTypeMant)
router.get("/type-add", typeController.GetAddType)
router.post("/type-add", typeController.PostAddType)
router.get("/type-edit/:id", typeController.GetEditType)
router.post("/type-edit", typeController.PostEditType)
router.post("/type-delete", typeController.PostDeleteType)



module.exports = router;