import React, { useState } from 'react';
import { InputGroup, InputLeftElement, Input, Box } from '@chakra-ui/react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleInputChange = (event) => setInput(event.target.value);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(input);
        }
    };

    return (
        <Box width="98%" mx="auto" my={4}>
            <InputGroup>
                <InputLeftElement pointerEvents="none" pl="40px">
                    <SearchIcon color="gray.300"/>
                </InputLeftElement>
                <Input
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    bg="white"
                    placeholder="Query your images..."
                    _placeholder={{ opacity: 1, color: 'gray.500' }}
                    pl="60px"
                    borderRadius="full"
                />
            </InputGroup>
        </Box>
    );
}
