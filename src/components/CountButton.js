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
                variant='contained'
                onClick={() => {
                    handleClick();
                }}
            >
                Click to add
            </Button>
            <Typography>
                Number of clicks {hits}
            </Typography>
        </div>
    )
}
