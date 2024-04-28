import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useLanguageContext } from '../contexts/language/LanguageContext';

export const Navigation = () => {
    const { setLang } = useLanguageContext();
    const getStyles = ({ isActive }) => {
        return isActive ? { textDecoration: 'underline' } : undefined
    }

    const handlePlClick = () => {
        setLang('pl');
    }

    const handleEnClick = () => {
        setLang('en');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
                        First App
                    </Typography>
                    <Button color="inherit" component={NavLink} to="/" style={getStyles}>Home</Button>
                    <Button color="inherit" component={NavLink} to="/about-me" style={getStyles}>About me</Button>
                    <Button color="inherit" component={NavLink} to="/game" style={getStyles}>Game</Button>
                    <Button color="inherit" component={NavLink} to="/form" style={getStyles}>Form</Button>
                    <Button color="inherit" component={NavLink} to="/users" style={getStyles}>Users</Button>
                    <Button color="inherit" component={NavLink} to="/sign" style={getStyles}>Sign</Button>

                    <Typography component="div" sx={{ flexGrow: 1 }} />

                    <Button color="inherit" onClick={handlePlClick}>PL</Button>
                    <Button color="inherit" onClick={handleEnClick}>EN</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}