import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from '@mui/material';

export default function LeftButton({ onClick }) {
    return(
        <IconButton onClick={onClick}>
            <ArrowBackIosIcon style={{ width: '15px', height: '15px' }}/>
        </IconButton>
    );
}