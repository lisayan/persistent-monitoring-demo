import React from 'react';
import { Box, Text, VStack, Badge } from '@chakra-ui/react';

export default function DatasetsCard({ title, author, itemCount, sliceCount, isPrivate }) {
    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            p={4}
            boxShadow="md"
            w="100%"
        >
            <VStack align="start" spacing={2}>
                <Box h="150px" bg="gray.200" w="100%" borderRadius="md" mb={2}></Box>
                <Text fontWeight="bold" fontSize="lg">
                    {title}
                </Text>
                <Text color="gray.500">
                    by {author}
                </Text>
                <Text fontSize="sm" color="gray.500">
                    {itemCount} items 
                </Text>
                {isPrivate && (
                    <Badge
                        borderColor="black"
                        borderWidth="1px"
                        colorScheme="gray"
                        borderRadius="full"
                        px={2}
                        py={1}
                    >
                        Private
                    </Badge>
                )}
            </VStack>
        </Box>
    );
}
