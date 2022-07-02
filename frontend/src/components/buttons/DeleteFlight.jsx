import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@material-ui/core/IconButton';

import axios from 'axios';

export const DeleteFlight = ({ flight }) => {

    // use to refresh just the component when deleted instead of the entire page
    const navigate = useNavigate();

    // Function to delete the specific flight number onClick
    const handleDelete = async (event) => {
        //event.preventDefault();
        try {
            // use the flight number from the current clicked button to delete the flight
            await axios.delete('http://localhost:8085/flights/' + flight.flightNumber);
            navigate(0);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <IconButton color="secondary">
            <DeleteIcon fontSize="large" sx={{ margin: 1 }} onClick={handleDelete} />
        </IconButton>
    );
}