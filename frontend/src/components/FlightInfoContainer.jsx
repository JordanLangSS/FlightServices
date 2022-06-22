
import { GridContainer, FlightNumberGrid, DepDateGrid, ArrDateGrid, ArrAirport, FillerGrid, DepAirport } from "./styles/FlightInfoGrid";
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
                        <Center> <GiAirplaneDeparture /> </Center>

                        <Center>

                            {flight.departureDate}
                        </Center>
                    </DepDateGrid>

                    <ArrDateGrid>
                        <Center> <GiAirplaneArrival /> </Center>
                        <Center>
                            {flight.arrivalDate}
                        </Center>
                    </ArrDateGrid>

                    <FlightNumberGrid>
                        <Center>  Flight Number: </Center>
                        <Center> {flight.flightNumber} </Center>
                    </FlightNumberGrid>

                    <FillerGrid>
                        <Center> <HiOutlineArrowNarrowRight size='1.5em' /> <BiTimer /> <HiOutlineArrowNarrowRight size='1.5em' /> </Center>

                    </FillerGrid>
                    <DepAirport>
                        <Center> {flight.departureAirport} </Center>
                    </DepAirport>

                    <ArrAirport>
                        <Center> {flight.arrivalAirport} </Center>
                    </ArrAirport>

                </GridContainer>
            </Center>

        </>
    );
}