import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Typography from '@mui/material/Typography';
import LeftButton from './LeftButton'; 
import RightButton from './RightButton';
import FirstPage from './FirstPage';
import LastPage from './LastPage';
import ImageNumber from './ImageNumber';

export default function PageScroll({ currentPage, handleNextPage, handlePreviousPage, handleFirstPage, handleLastPage }) {
    return (
      <Flex direction="column" justifyContent="center" alignItems="center" padding="10px" mt={4}>
        <Flex alignItems="center">
            <FirstPage onClick={handleFirstPage} /> 
            <LeftButton onClick={handlePreviousPage} />
            
            <Typography variant="caption" display="block" align="center" color="textSecondary" sx={{ fontSize: '12px' }} mx={1}>
              {currentPage + 1}
            </Typography>
            
            <RightButton onClick={handleNextPage} />
            <LastPage onClick={handleLastPage} /> 
        </Flex>

        <Box mt={0.1}>
            <ImageNumber />
        </Box>
      </Flex>
    );
}
