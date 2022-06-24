import { useRef } from "react";
import axios from 'axios';
import { Center } from "../components/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
        } catch (err) {
            console.log('Something went wrong');
            console.error(err);
        }
        reset(); // Reset all the fields to empty once the submit button is pressed and accepted
    }

    return (

        <Center>
            <form className="myForm" onSubmit={handleSubmit(useSubmit)}>

                <label htmlFor="flightNumber"> Flight Number: </label>
                <div>
                    <input id="flightNumber" name="flightNum" type="text" placeholder="Flight Number" {...flightNumberReg} ref={(e) => { flightNumberReg.ref(e); flightNumberRef.current = e; }} />
                    <p> {errors.flightNum?.message}</p>
                </div>

                <label htmlFor="departureDate"> Departure Date: </label>
                <div>
                    <input id="departureDate" name="depDate" type="date" placeholder="Departure Date" {...depDateReg} ref={(e) => { depDateReg.ref(e); departureDateRef.current = e; }} />
                    <p> {errors.depDate?.message}</p>
                </div>

                <label htmlFor="arrivalDate"> Arrival Date: </label>
                <div>
                    <input id="arrivalDate" name="arrDate" type="date" placeholder="Arrival Date" {...arrDateReg} ref={(e) => { arrDateReg.ref(e); arrivalDateRef.current = e; }} />
                    <p> {errors.arrDate?.message}</p>
                </div>

                <label htmlFor="departureTime"> DepartureTime: </label>
                <div>
                    <input id="departureTime" name="depTime" type="text" placeholder="Departure Time" {...depTimeReg} ref={(e) => { depTimeReg.ref(e); departureTimeRef.current = e; }} />
                    <p> {errors.depTime?.message}</p>
                </div>

                <label htmlFor="arrivalTime"> Arrival Time: </label>
                <div>
                    <input id="arrivalTime" name="arrTime" type="text" placeholder="Arrival Time" {...arrTimeReg} ref={(e) => { arrTimeReg.ref(e); arrivalTimeRef.current = e; }} />
                    <p> {errors.arrTime?.message}</p>
                </div>

                <label htmlFor="departureAirport"> Departure Airport: </label>
                <div>
                    <input id="departureAirport" name="depAirport" type="text" placeholder="Departure Airport" {...depAirportReg} ref={(e) => { depAirportReg.ref(e); departureAirportRef.current = e; }} />
                    <p> {errors.depAirport?.message}</p>
                </div>

                <label htmlFor="arrivalAirport"> Arrival Airport: </label>
                <div>
                    <input id="arrivalAirport" name="arrAirport" type="text" placeholder="Arrival Airport" {...arrAirportReg} ref={(e) => { arrAirportReg.ref(e); arrivalAirportRef.current = e; }} />
                    <p> {errors.arrAirport?.message}</p>
                </div>

                <label htmlFor="numPassengers"> Current Number of Passengers: </label>
                <div>
                    <input id="numPassengers" name="numPass" type="text" placeholder="Current Number of Passengers" {...numPassReg} ref={(e) => { numPassReg.ref(e); numPassengersRef.current = e; }} />
                    <p> {errors.numPass?.message}</p>
                </div>

                <label htmlFor="passengerLimit"> Passenger Limit: </label>
                <div>
                    <input id="passengerLimit" name="passLimit" type="text" placeholder="Passenger Limit" {...passLimitReg} ref={(e) => { passLimitReg.ref(e); passengerLimitRef.current = e; }} />
                    <p> {errors.passLimit?.message}</p>
                </div>

                <input type="submit" value="Add Flight" />
            </form>
        </Center>
    );

}