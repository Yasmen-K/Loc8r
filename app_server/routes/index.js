const express = require('express');
const router = express.Router();

const ctrlLocations = require("../controllers/locations")
const ctrlOthers = require("../controllers/others")

const ctrlMain = require('../controllers/others')


// Locations pages
router.get('/',ctrlLocations.homelist)
router.get('/location',ctrlLocations.locationInfo)
router.get('/location/review/new',ctrlLocations.addReview)

/* Other Pages*/
router.get('/about',ctrlOthers.about)

// const homepageController = (req, res) => {
//   res.render('index', { title: 'Express' });
//  };

// /* GET home page. */
// router.get('/', ctrlMain.index)

module.exports = router;
