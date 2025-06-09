import React from 'react';
import { IconButton } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';

export default function FirstPage({ onClick }) {
    return(
        <IconButton onClick = {onClick}>
            <FirstPageIcon style={{ width: '23px', height: '23px' }}/>
        </IconButton>
    );
}