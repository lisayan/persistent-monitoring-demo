import React from 'react';
import { IconButton } from '@mui/material';
import LastPageIcon from '@mui/icons-material/LastPage';

export default function LastPage({ onClick }) {
    return(
        <IconButton onClick = {onClick}>
            <LastPageIcon style={{ width: '23px', height: '23px' }}/>
        </IconButton>
    );
}