
import { GridContainer, FlightNumberGrid, DepDateGrid, ArrDateGrid, ArrAirportGrid, FlightTime, DepAirportGrid, NumPassGrid, PassLimitGrid } from "./styles/FlightInfoGrid";
import { Center } from './styles/';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';


import axios from 'axios';

export const FlightInfoContainer = ({ flight }) => {

    // use to refresh just the component when deleted instead of the entire page
    const navigate = useNavigate();

    // Function to delete the specific flight number onClick
    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            // use the flight number from the current clicked button to delete the flight
            await axios.delete('http://localhost:8085/flights/' + flight.flightNumber);
            navigate(0);

        } catch (err) {
            console.error(err);
        }
        //window.location.reload();  // reload the page when the button is pressed****** only temporary
    }

    return (
        <>
            <Center>
                <GridContainer>
                    <DepDateGrid>
                        <GiAirplaneDeparture />
                        <div> {flight.departureDate} </div>
                    </DepDateGrid>

                    <ArrDateGrid>
                        <GiAirplaneArrival />
                        <div> {flight.arrivalDate} </div>
                    </ArrDateGrid>

                    <NumPassGrid>
                        Number of Passengers:
                        <div> {flight.currentNumOfPassengers} </div>
                    </NumPassGrid>

                    <button onClick={handleDelete}>
                        Delete Flight
                    </button>

                    <FlightNumberGrid>
                        Flight Number: {flight.flightNumber}
                    </FlightNumberGrid>

                    <FlightTime>
                        <HiOutlineArrowNarrowRight size='1.2em' />
                        <BiTimer />
                        <HiOutlineArrowNarrowRight size='1.2em' />
                    </FlightTime>

                    <DepAirportGrid>
                        {flight.departureAirport}
                    </DepAirportGrid>

                    <ArrAirportGrid>
                        {flight.arrivalAirport}
                    </ArrAirportGrid>

                    <PassLimitGrid>
                        Passenger Limit:
                        <div> {flight.passengerLimit} </div>
                    </PassLimitGrid>

                </GridContainer>
            </Center>

        </>
    );
}