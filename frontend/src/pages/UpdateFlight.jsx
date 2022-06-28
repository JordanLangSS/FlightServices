import { useRef } from "react";
import axios from 'axios';
import { Center } from "../components/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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

export const UpdateFlight = () => {

    // Create the hook for react-hook-form
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

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
            await axios.put('http://localhost:8085/flights',
                {
                    flightNumber: flightNumberRef.current.value, departureDate: departureDateRef.current.value,
                    arrivalDate: arrivalDateRef.current.value, departureTime: departureTimeRef.current.value, arrivalTime: arrivalTimeRef.current.value,
                    departureAirport: departureAirportRef.current.value, arrivalAirport: arrivalAirportRef.current.value,
                    currentNumOfPassengers: numPassengersRef.current.value, passengerLimit: passengerLimitRef.current.value
                });
        } catch (err) {
            console.log('Something went wrong');
            console.error(err);
        }
        reset(); // Reset all the fields to empty once the submit button is pressed and accepted
    }
    // backgroundColor: '#F2F2F2  ',

    return (

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                '& > :not(style)': {
                    m: 1,
                    width: '20%',
                    borderRadius: 10,
                    margin: 5,
                    padding: 2,


                },
            }}
        >

            <Paper elevation={24} square={true}>
                <Center>

                    <form className="myForm" onSubmit={handleSubmit(useSubmit)}>

                        <div>
                            <TextField
                                id="flightNumber"
                                name="flightNum"
                                label="Flight Number"
                                variant="outlined"
                                color="primary"
                                margin="normal"
                                required
                                helperText={errors.flightNum?.message}
                                {...flightNumberReg}
                                inputRef={(e) => { flightNumberReg.ref(e); flightNumberRef.current = e; }}
                            >
                            </TextField>
                        </div>

                        <label htmlFor="departureDate"> Departure Date: </label>
                        <div>
                            <input id="departureDate" name="depDate" type="date" placeholder="Departure Date" {...depDateReg} ref={(e) => { depDateReg.ref(e); departureDateRef.current = e; }} />
                            <span> {errors.depDate?.message}</span>
                        </div>

                        <label htmlFor="arrivalDate"> Arrival Date: </label>
                        <div>
                            <input id="arrivalDate" name="arrDate" type="date" placeholder="Arrival Date" {...arrDateReg} ref={(e) => { arrDateReg.ref(e); arrivalDateRef.current = e; }} />
                            <span> {errors.arrDate?.message}</span>
                        </div>

                        <div>
                            <TextField
                                id="departureTime"
                                name="depTime"
                                label="Departure Time"
                                variant="outlined"
                                color="primary"
                                margin="normal"
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
                                helperText={errors.passLimit?.message}
                                {...passLimitReg}
                                inputRef={(e) => { passLimitReg.ref(e); passengerLimitRef.current = e; }}
                            >
                            </TextField>
                        </div>
                        <Center>
                            <Button type="submit" variant="contained">
                                Update Flight
                            </Button>
                        </Center>


                    </form>

                </Center>
            </Paper>
        </Box>
    );

}