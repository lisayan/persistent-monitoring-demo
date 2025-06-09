import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

export default function HomeNavigationBar() {
    return (
        <Box bg="#131316" px={4} py={2}>
            <Text 
                fontSize="xl" 
                fontWeight="bold" 
                color="white"
                fontFamily="Montserrat, sans-serif"
            >
                ARGUS SYSTEMS
            </Text>
        </Box>
    );
}