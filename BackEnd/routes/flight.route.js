const router = require('express').Router()
const { createFlight, findFlightById, findAllFlights } = require('../controllers/flight.controller');


// GET /flights
router.get('/', async (req, res) => {
    const flights = await findAllFlights();
    res.json(flights);
});

router.get('/:id', async (req, res) => {
    try {
        const flight = await findFlightById(req.params.id);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);

    }
});

router.post('/', (req, res) => {
    res.send('POST to create a new flight!');
});

module.exports = router;

// How to delete and update a flight video 26 @ 17:20
// use .put() to update a flight
// use .delete() to delete a flight
// possible have an airport router???
// list out the different airports and what flights they have
