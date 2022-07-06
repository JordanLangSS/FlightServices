import { useEffect, useState } from 'react';
import axios from 'axios';
import { EditFlight } from '../components/buttons';
import { DeleteFlight } from '../components/buttons';
import { Table, tableCellClasses, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';


export const Home = () => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            fontSize: '1.6rem',
            textAlign: 'center'
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: '1.5rem',
            textAlign: 'center',
            color: theme.palette.common.white,
        },
    }));

    // create style for each row
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
            color: theme.palette.common.white,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
        // Possibly put a catch in here?
    }, []);

    return (
        <>
            <TableContainer sx={{ maxHeight: '90vh', overflow: "auto" }}>
                <Table aria-label='simple table' stickyHeader sx={{ maxWidth: '85%', maxHeight: '5%', margin: 'auto', borderRadius: 10, borderColor: '#FFFFFF' }}>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Flight Number</StyledTableCell>
                            <StyledTableCell>Departure Date</StyledTableCell>
                            <StyledTableCell>Arrival Date</StyledTableCell>
                            <StyledTableCell>Departure Time</StyledTableCell>
                            <StyledTableCell>Arrival Time</StyledTableCell>
                            <StyledTableCell>Departure Airport</StyledTableCell>
                            <StyledTableCell>Arrival Airport</StyledTableCell>
                            <StyledTableCell>Current Passengers</StyledTableCell>
                            <StyledTableCell>Passenger Limit</StyledTableCell>
                            <StyledTableCell> Actions</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>

                        {/* Transform the flights array into an array of JSX elements */}
                        {flights.map(flight => {
                            // use the mongodb id as the unique key
                            return (

                                <StyledTableRow
                                    key={flight._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <StyledTableCell>{flight.flightNumber}</StyledTableCell>
                                    <StyledTableCell>{flight.departureDate}</StyledTableCell>
                                    <StyledTableCell>{flight.arrivalDate}</StyledTableCell>
                                    <StyledTableCell>{flight.departureTime}</StyledTableCell>
                                    <StyledTableCell>{flight.arrivalTime}</StyledTableCell>
                                    <StyledTableCell>{flight.departureAirport}</StyledTableCell>
                                    <StyledTableCell>{flight.arrivalAirport}</StyledTableCell>
                                    <StyledTableCell>{flight.currentNumOfPassengers}</StyledTableCell>
                                    <StyledTableCell>{flight.passengerLimit}</StyledTableCell>
                                    <StyledTableCell >
                                        <EditFlight flight={flight} />
                                        <DeleteFlight flight={flight} handler={setFlights} />
                                    </StyledTableCell>
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>

                </Table>


            </TableContainer>

        </>


    );
}




// Props explanation is in video 30 @ 12:40
// Styled-components is in video 33 @ 40:00
// React-Router-Dom is in video 35 @58:00
// Redux is in video 35 @ 19:00
// Grids was on 6/15 in the afternoon

//{/* Destructure out the flight data*/}
