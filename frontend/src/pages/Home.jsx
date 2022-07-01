import { useEffect, useState } from 'react';
import axios from 'axios';
import { EditFlight } from '../components/EditFlight';
import { DeleteFlight } from "../components/DeleteFlight";
import { Table, tableCellClasses, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import SearchBar from "material-ui-search-bar";
import { UpdateFlight } from './UpdateFlight';

export const Home = () => {

    const StyledSearchBar = styled(SearchBar)`
        margin: 0 auto;
        max-width: 25%;
        max-height: 2rem;
    `;

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
        // YOU COULD PUT A .CATCH ERROR IN HERE ********
    }, []);


    // Search
    const [copyList, setCopyList] = useState(flights);
    const [searched, setSearched] = useState("");

    const requestSearch = (searchedVal) => {
        const filteredRows = flights.filter((row) => {
            return row.flights.flightNumber.includes(searchedVal);
        });
        setCopyList(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    return (
        <>
            <StyledSearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />

            <TableContainer sx={{ height: '165rem', overflowY: "scroll" }}>
                <Table aria-label='simple table' stickyHeader sx={{ maxWidth: '80%', margin: 'auto', borderRadius: 10, borderColor: '#FFFFFF' }}>
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
                                        <DeleteFlight flight={flight} />
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
