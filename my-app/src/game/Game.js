import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { useLanguageContext } from '../contexts/language/LanguageContext';

const Score = styled.span`
    color: ${props => props.isRed ? 'red' : 'inherit'}
`;

export const Game = ({ name }) => {
    const { lang } = useLanguageContext();
    const [points, setPoints] = useState(0);

    const increase = () => {
        setPoints(points + 5);
    }

    const decrease = () => {
        setPoints(points - 5);
    }

    useEffect(() => {
        if (points >= 50) {
            alert(`Gratulacje wygrałeś w grę ${name}!`)
        }
    }, [points, name]);

    return <>
        <Typography variant="h3">{
            lang === 'pl' 
                ? `Witamy w grze ${name}!`
                : `Welcome to game ${name}!`          
        }</Typography>
        <Typography variant="h4">{ 
            lang === 'pl' 
                ? "Twoja liczba punktów to:"
                : "Your points are:"
        }<Score isRed={points < 0}>{points}</Score></Typography>
        <div>
            <Button onClick={decrease} color="error" variant="contained">
                <Icon>remove</Icon>
            </Button>
            <Button onClick={increase} color="primary" variant="contained">
                <Icon>add</Icon>
            </Button>
        </div>
    </>
}