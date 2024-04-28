import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getAuth, signOut } from 'firebase/auth'
import { useUserContext } from '../contexts/user';

export const Navigation = () => {
    const user = useUserContext();

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component={Link} to="/" sx={{ marginRight: 2, textDecoration: 'none', color: 'inherit' }}>
                Burgers App
              </Typography>

              <Button color="inherit" component={Link} to="/menu">Menu</Button>  
              {user && <Button color="inherit" component={Link} to="/admin">Admin</Button>}

              <div style={{ flexGrow: 1 }} />

              {user 
                ? <Button color="inherit" onClick={handleSignOut}>Log out</Button>
                : <Button color="inherit" component={Link} to="/sign-in">Login</Button>
              }
            </Toolbar>
          </AppBar>
        </Box>
      );
}