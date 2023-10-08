var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Search food trucks by name or address location
router.get('/foodtrucks', async (req, res) => {
    const { name, location } = req.query;

try {
    let query = {};

    if (name) {
        query.Applicant = { $regex: name, $options: 'i' };
    }

    if (location) {
        query.Address = { $regex: location, $options: 'i' };
    }

    const foodtrucks = await Foodtruck.find(query);
    res.json(foodtrucks);
} catch (error) {
    res.status(500).json({ error: 'Internal server error' });
}
});

module.exports = router;


