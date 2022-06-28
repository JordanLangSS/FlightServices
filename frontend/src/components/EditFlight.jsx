import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

import axios from 'axios';

export const EditFlight = ({ flight }) => {

    // use to refresh just the component when deleted instead of the entire page
    const navigate = useNavigate();

    // Function to delete the specific flight number onClick
    const handleEdit = async (event) => {
        navigate('/UpdateFlight', { replace: true });

    }

    return (
        <>
            <EditIcon sx={{ margin: 1 }} onClick={handleEdit} />
        </>
    );
}