import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Sign = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
            <TextField label="Email" type="email" />
            <TextField label="Passowrd" type="password" />
            <Button type="submit">Send</Button>
        </form>
    );
}