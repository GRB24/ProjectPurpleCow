import { Typography } from "@mui/material";
import logo from '../../src/purplecowlogo.svg';

export const Header = () => {
    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography 
                variant='h1'
                style={{
                    color: '#5c3977',
                    fontSize: '52px',
                    fontWeight: '800',
                }}
            >
                Project <br /> Purple Cow
            </Typography>
        </header>
    )
}