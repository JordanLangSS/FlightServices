
import { GridContainer, FlightNumberGrid, DepDateGrid, ArrDateGrid, ArrAirportGrid, FlightTime, DepAirportGrid, NumPassGrid, PassLimitGrid } from "./styles/FlightInfoGrid";
import { Center } from './styles/';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";

export const FlightInfoContainer = ({ flight }) => {

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