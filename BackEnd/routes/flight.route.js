const router = require('express').Router()
const { createFlight, findFlightById, findAllFlights } = require('../controllers/Flight.controller');

// Create a new flight 
router.post('/', async (req, res) => {
    try {
        const flightId = await createFlight(req.body);
        res.status(201).json({ _id: flightId });

    } catch (err) {
        res.status(err?.status || 500).json(err);
    }

});

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



module.exports = router;

// How to delete and update a flight video 26 @ 17:20
// use .put() to update a flight
// use .delete() to delete a flight
// possible have an airport router???
// list out the different airports and what flights they have
