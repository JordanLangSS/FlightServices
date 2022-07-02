import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@material-ui/core/IconButton';

export const EditFlight = ({ flight }) => {

    // use to refresh just the component when deleted instead of the entire page
    const navigate = useNavigate();

    // Function to edit the specific flight number onClick
    const handleEdit = async () => {
        navigate('/UpdateFlight', { state: { flight } });
    }

    return (
        <IconButton style={{
            color: '#17EAF9',
        }}>
            <EditIcon fontSize="large" sx={{ margin: 1 }} onClick={handleEdit} />
        </IconButton>
    );
}