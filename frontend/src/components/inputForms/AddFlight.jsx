export const AddFlight = () => {

    return (
        <form>
            <label htmlFor="flightNumber"> Flight Number: </label>
            <div>
                <input id="flightNumber" type="text" placeholder="First Name" />
            </div>

            <label htmlFor="departureDate"> Departure Date: </label>
            <div>
                <input id="departureDate" placeholder="Departure Date" />
            </div>

            <label htmlFor="arrivalDate"> Arrival Date: </label>
            <div>
                <input id="arrivalDate" placeholder="Arrival Date" />
            </div>

            <label htmlFor="departureTime"> DepartureTime: </label>
            <div>
                <input id="departureTime" placeholder="Departure Time" />
            </div>

            <label htmlFor="arrivalTime"> Arrival Time: </label>
            <div>
                <input id="arrivalTime" placeholder="Arrival Time" />
            </div>

            <label htmlFor="departureAirport"> Departure Airport: </label>
            <div>
                <input id="departureAirport" placeholder="Departure Airport" />
            </div>

            <label htmlFor="arrivalAirport"> Arrival Airport: </label>
            <div>
                <input id="arrivalAirport" placeholder="Arrival Airport" />
            </div>

            <label htmlFor="numPassengers"> Current Number of Passengers: </label>
            <div>
                <input id="numPassengers" placeholder="Current Number of Passengers" />
            </div>

            <label htmlFor="passengerLimit"> Passenger Limit: </label>
            <div>
                <input id="passengerLimit" placeholder="Passenger Limit" />
            </div>

        </form>
    );

}