import * as React from 'react';
import { useRef } from "react";
import axios from 'axios';
import { Center } from "../components/styles";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';

const helperTextStyles = makeStyles(theme => ({
    root: {
        margin: 4,
        '&$error': {
            color: 'red'
        }
    },
    error: {} //<--this is required to make it work
}));

const schema = yup.object().shape({
    flightNum: yup.number().typeError('Please enter a valid Flight Number.').min(1, "The Flight Number must be greater than 0").max(999999, 'Flight Numbers can only be between 0 and 1,000,000').required(),
    depDate: yup.date().typeError('Please select a Departure Date.').required(),
    arrDate: yup.date().typeError('Please enter an Arrival Date.').required(),
    depTime: yup.string().required('Please enter a valid Departure Time.'),
    arrTime: yup.string().required('Please enter a valid Arrival Time.'),
    depAirport: yup.string().matches(/^[a-zA-Z]{0,3}$/, "Airport Code must be three letters").required('Please enter a valid Departure Airport.'),
    arrAirport: yup.string().matches(/^[a-zA-Z]{0,3}$/, "Airport Code must be three letters").required('Please enter a valid Arrival Airport.'),
    numPass: yup.number().typeError('Please enter a valid Number of Passengers.').min(0, "The Number of passengers must be a positive number").max(400, 'The number of passengers cannot exceed 400').required(),
    passLimit: yup.number().typeError("Please enter a valid Passenger Limit").min(1, "The Passenger limit must be greater than 0").max(400, "The Passenger Limit cannot exceed 400").required()
});
//The Passenger limit must be greater than 0

export const AddFlight = () => {

    // Create the hook for react-hook-form
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    // use to navigate back to homepage on submit
    const navigate = useNavigate();

    const flightNumberRef = useRef();
    const departureDateRef = useRef();
    const arrivalDateRef = useRef();
    const departureTimeRef = useRef();
    const arrivalTimeRef = useRef();
    const departureAirportRef = useRef();
    const arrivalAirportRef = useRef();
    const numPassengersRef = useRef();
    const passengerLimitRef = useRef();

    // create ref but without using already assigned ref .
    const flightNumberReg = register("flightNum");
    const depDateReg = register("depDate");
    const arrDateReg = register("arrDate");
    const depTimeReg = register("depTime");
    const arrTimeReg = register("arrTime");
    const depAirportReg = register("depAirport");
    const arrAirportReg = register("arrAirport");
    const numPassReg = register("numPass");
    const passLimitReg = register("passLimit");


    const useSubmit = async () => {
        try {
            await axios.post('http://localhost:8085/flights',
                {
                    flightNumber: flightNumberRef.current.value, departureDate: departureDateRef.current.value,
                    arrivalDate: arrivalDateRef.current.value, departureTime: departureTimeRef.current.value, arrivalTime: arrivalTimeRef.current.value,
                    departureAirport: departureAirportRef.current.value, arrivalAirport: arrivalAirportRef.current.value,
                    currentNumOfPassengers: numPassengersRef.current.value, passengerLimit: passengerLimitRef.current.value
                });
            navigate('../', { replace: true });
        } catch (err) {
            console.log('Something went wrong');
            console.error(err);
        }
    }

    return (

        <Box sx={{ height: '165rem' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                    '& > :not(style)': {
                        borderRadius: 10,

                        paddingLeft: '5rem',
                        paddingRight: '5rem',
                        paddingBottom: '2rem',

                    },
                }}
            >

                <Paper elevation={24} >
                    <Center>

                        <form className="myForm" onSubmit={handleSubmit(useSubmit)}>
                            <Center><h1>Create Flight</h1></Center>
                            <div>
                                <TextField
                                    id="flightNumber"
                                    name="flightNum"
                                    label="Flight Number"
                                    variant="outlined"
                                    color="primary"
                                    margin="normal"
                                    error={errors.flightNum?.message}
                                    helperText={errors.flightNum?.message}

                                    {...flightNumberReg}
                                    inputRef={(e) => { flightNumberReg.ref(e); flightNumberRef.current = e; }}
                                >
                                </TextField>
                            </div>

                            <div>
                                <TextField
                                    id="date"
                                    label="Departure Date"
                                    type="date"
                                    name="depDate"
                                    margin="normal"
                                    error={errors.depDate?.message}
                                    helperText={errors.depDate?.message}
                                    sx={{ width: 220 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    {...depDateReg}
                                    inputRef={(e) => { depDateReg.ref(e); departureDateRef.current = e; }}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="date"
                                    label="Arrival Date"
                                    type="date"
                                    name="arrDate"
                                    margin="normal"
                                    error={errors.arrDate?.message}
                                    helperText={errors.arrDate?.message}
                                    sx={{ width: 220 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    {...arrDateReg}
                                    inputRef={(e) => { arrDateReg.ref(e); arrivalDateRef.current = e; }}
                                />
                            </div>

                            <div>
                                <TextField
                                    id="departureTime"
                                    name="depTime"
                                    label="Departure Time"
                                    variant="outlined"
                                    color="primary"
                                    margin="normal"
                                    error={errors.depTime?.message}
                                    helperText={errors.depTime?.message}
                                    {...depTimeReg}
                                    inputRef={(e) => { depTimeReg.ref(e); departureTimeRef.current = e; }}
                                >
                                </TextField>
                            </div>

                            <div>
                                <TextField
                                    id="arrivalTime"
                                    name="arrTime"
                                    label="Arrival Time"
                                    variant="outlined"
                                    color="primary"
                                    margin="normal"
                                    error={errors.arrTime?.message}
                                    helperText={errors.arrTime?.message}
                                    {...arrTimeReg}
                                    inputRef={(e) => { arrTimeReg.ref(e); arrivalTimeRef.current = e; }}
                                >
                                </TextField>
                            </div>

                            <div>
                                <TextField
                                    id="departureAirport"
                                    name="depAirport"
                                    label="Departure Airport"
                                    variant="outlined"
                                    color="primary"
                                    margin="normal"
                                    error={errors.depAirport?.message}
                                    helperText={errors.depAirport?.message}
                                    {...depAirportReg}
                                    inputRef={(e) => { depAirportReg.ref(e); departureAirportRef.current = e; }}
                                >
                                </TextField>
                            </div>

                            <div>
                                <TextField
                                    id="arrivalAirport"
                                    name="arrAirport"
                                    label="Arrival Airport"
                                    variant="outlined"
                                    color="primary"
                                    margin="normal"
                                    error={errors.arrAirport?.message}
                                    helperText={errors.arrAirport?.message}
                                    {...arrAirportReg}
                                    inputRef={(e) => { arrAirportReg.ref(e); arrivalAirportRef.current = e; }}
                                >
                                </TextField>
                            </div>

                            <div>
                                <TextField
                                    id="numPassengers"
                                    name="numPass"
                                    label="Number of Passengers"
                                    variant="outlined"
                                    color="primary"
                                    margin="normal"
                                    error={errors.numPass?.message}
                                    helperText={errors.numPass?.message}
                                    {...numPassReg}
                                    inputRef={(e) => { numPassReg.ref(e); numPassengersRef.current = e; }}
                                >
                                </TextField>
                            </div>

                            <div>
                                <TextField
                                    id="passengerLimit"
                                    name="passLimit"
                                    label="Passenger Limit"
                                    variant="outlined"
                                    color="primary"
                                    margin="normal"
                                    error={errors.passLimit?.message}
                                    helperText={errors.passLimit?.message}
                                    {...passLimitReg}
                                    inputRef={(e) => { passLimitReg.ref(e); passengerLimitRef.current = e; }}
                                >
                                </TextField>
                            </div>
                            <Center>
                                <Button type="submit" variant="contained">
                                    Create Flight
                                </Button>
                            </Center>


                        </form>

                    </Center>
                </Paper>
            </Box >
        </Box>

    );

}