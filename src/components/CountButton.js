import CountButtonClass from '../App.css';
import { Button, Typography } from "@mui/material"; 
import { useState } from 'react';
import countapi from 'countapi-js';

const {REACT_APP_COUNT_API_KEY} = process.env

export const CountButton = () => {
    const [hits, setHits] = useState('');

    const handleClick = () => {
        countapi.hit(REACT_APP_COUNT_API_KEY).then((result) => {setHits(result.value)});
    };

    return (
        <div>
            <Button
                className={CountButtonClass}
                variant='contained'
                style={{
                    margin: '50px 0',
                    backgroundColor: '#5c3977',
                    fontWeight: '600',
                    borderRadius: '0',
                }}
                onClick={() => {
                    handleClick();
                }}
            >
                Click to hit
            </Button>{ hits !== '' ? <Typography>
                Number of Hits: {hits}
            </Typography> : <Typography><br /></Typography>
            }
        </div>
    )
}
