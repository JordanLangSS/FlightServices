import { useEffect, useState } from 'react';
import axios from 'axios';
import { FlightInfoContainer } from '../components/FlightInfoContainer';

export const Home = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
        // YOU COULD PUT A .CATCH ERROR IN HERE ********
    }, []);

    return (
        <div>

            {/* Transform the flights array into an array of JSX elements */}
            {flights.map(flight => {
                // use the mongodb id as the unique key
                return (

                    <div key={flight._id}>
                        <FlightInfoContainer flight={flight} />
                    </div>
                );
            })}

        </div>
    );
}




// Props explanation is in video 30 @ 12:40
// Styled-components is in video 33 @ 40:00
// React-Router-Dom is in video 35 @58:00
// Redux is in video 35 @ 19:00
// Grids was on 6/15 in the afternoon

//{/* Destructure out the flight data*/}
