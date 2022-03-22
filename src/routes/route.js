const express = require('express');
const router = express.Router();
const collegeControl  = require("../controller/collageController")
const internControl  = require("../controller/iternController")

router.post("/colleges", collegeControl.createCollege)

router.post("/interns", internControl.createIntern)

router.get("/collegeDetails", collegeControl.collegeDetails)


module.exports = router;