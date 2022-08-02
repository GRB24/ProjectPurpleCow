import { Button, Typography } from "@mui/material";
import { useState } from 'react';
import countapi from 'countapi-js';

export const CountButton = () => {
    const [hits, setHits] = useState('');

    const handleClick = () => {
        countapi.hit('key').then((result) => {setHits(result.value)});//result.json()).then(data=>setHits(data.value);
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
