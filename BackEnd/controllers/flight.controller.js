const Flight = require('../models/flight.model');

const createFlight = async () => {

}

const findFlightById = async id => {
    try {
        // If no movie is found, it will return null
        const flight = await Flight.findById(id);
        if (flight == null) {
            throw `No flight with the id of ${id} found.`;
        }
        return flight; // flight was found and we return it
    } catch (err) {
        console.error(err);
        // throw here to easily tell if something went wrong
        throw { status: 404, message: err };
    }
}

const findAllFlights = async () => {
    const flights = await Flight.find(); // GET all flights
    return flights;

}

module.exports = { createFlight, findFlightById, findAllFlights };