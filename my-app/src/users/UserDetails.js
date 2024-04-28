import {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import { useParams } from 'react-router-dom';

export const UserDetails = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(r => r.json())
            .then(data => {
                setUser(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [params.id]);

    if (isLoading) {
        return <CircularProgress />
    }

    if (error || user == null || user.name == null) {
        return <Typography variant="h5">Taki uzytkownik nie istnieje!</Typography>
    }

    return <Typography variant="h5">Witaj {user.name}!</Typography>
}