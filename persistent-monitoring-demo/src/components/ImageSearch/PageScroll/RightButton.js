import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

export default function RightButton({ onClick }) {
    return (
        <IconButton onClick={onClick}>
            <ArrowForwardIosIcon style={{ width: '15px', height: '15px' }} />
        </IconButton>
    );
}
