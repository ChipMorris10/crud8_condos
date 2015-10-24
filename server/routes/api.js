var express = require('express');
var router = express.Router();
var Condo = require('../models/condo.js');


// POST ALL
router.post('/condos', function (req, res, next) {
    new Condo ( {
        bedRms: req.body.bdRms,
        price: req.body.price,
        location: req.body.location,
        garage: req.body.garage
})

    .saveQ()
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();
});

// GET ALL




// GET SINGLE




// PUT SINGLE



// DELETE SINGLE



module.exports = router