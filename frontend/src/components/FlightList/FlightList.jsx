import { useEffect, useState } from 'react';
import axios from 'axios';

export const FlightList = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
        // YOU COULD PUT A .CATCH ERROR IN HERE ********
    }, []);
    return (
        <div>
            {/* Transform the flights array into an array of JSX elements */}
            {flights.map(flight => {
                // use the mongodb id as the unique key
                return (
                    <div key={flight._id}>
                        {/* Destructure out the flight data*/}
                        <span flight={flight} />
                        <span> {[flight.flightNumber, flight.departureDate]}</span>
                    </div>
                );
            })}

        </div>

    );

}