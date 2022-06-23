import { useRef } from "react";
import axios from 'axios';
export const AddFlight = () => {

    const flightNumberRef = useRef();
    const departureDateRef = useRef();
    const arrivalDateRef = useRef();
    const departureTimeRef = useRef();
    const arrivalTimeRef = useRef();
    const departureAirportRef = useRef();
    const arrivalAirportRef = useRef();
    const numPassengersRef = useRef();
    const passengerLimitRef = useRef();

    const handleSubmit = async (event) => {
        //event.preventDefault();
        try {
            await axios.post('http://localhost:8085/flights',
                {
                    flightNumber: flightNumberRef.current.value, departureDate: departureDateRef.current.value,
                    arrivalDate: arrivalDateRef.current.value, departureTime: departureTimeRef.current.value, arrivalTime: arrivalTimeRef.current.value,
                    departureAirport: departureAirportRef.current.value, arrivalAirport: arrivalAirportRef.current.value,
                    currentNumOfPassengers: numPassengersRef.current.value, passengerLimit: passengerLimitRef.current.value
                });
        } catch (err) {
            console.log('something went wrong');
            console.error(err);
        }

        event.target.reset();
    }

    return (
        <form className="myForm" onSubmit={handleSubmit}>
            <label htmlFor="flightNumber"> Flight Number: </label>
            <div>
                <input id="flightNumber" type="text" placeholder="Flight Number" ref={flightNumberRef} />
            </div>

            <label htmlFor="departureDate"> Departure Date: </label>
            <div>
                <input id="departureDate" type="text" placeholder="Departure Date" ref={departureDateRef} />
            </div>

            <label htmlFor="arrivalDate"> Arrival Date: </label>
            <div>
                <input id="arrivalDate" type="text" placeholder="Arrival Date" ref={arrivalDateRef} />
            </div>

            <label htmlFor="departureTime"> DepartureTime: </label>
            <div>
                <input id="departureTime" type="text" placeholder="Departure Time" ref={departureTimeRef} />
            </div>

            <label htmlFor="arrivalTime"> Arrival Time: </label>
            <div>
                <input id="arrivalTime" type="text" placeholder="Arrival Time" ref={arrivalTimeRef} />
            </div>

            <label htmlFor="departureAirport"> Departure Airport: </label>
            <div>
                <input id="departureAirport" type="text" placeholder="Departure Airport" ref={departureAirportRef} />
            </div>

            <label htmlFor="arrivalAirport"> Arrival Airport: </label>
            <div>
                <input id="arrivalAirport" type="text" placeholder="Arrival Airport" ref={arrivalAirportRef} />
            </div>

            <label htmlFor="numPassengers"> Current Number of Passengers: </label>
            <div>
                <input id="numPassengers" type="text" placeholder="Current Number of Passengers" ref={numPassengersRef} />
            </div>

            <label htmlFor="passengerLimit"> Passenger Limit: </label>
            <div>
                <input id="passengerLimit" type="text" placeholder="Passenger Limit" ref={passengerLimitRef} />
            </div>

            <input type="submit" value="Add Flight" />

        </form>
    );

}