import React from 'react';
import { Box, VStack, Image, Button, Text, HStack } from '@chakra-ui/react';

export default function ImageLine({ images, onImageClick }) {
  return (
    <VStack spacing={1} width="100%">
      {images.map((src, index) => (
        <Box 
          key={index} 
          width="100%" 
          bg="gray.800" 
          borderRadius="md"
          border="1px solid"
          borderColor="gray.600"
        >
          <Button
            width="100%"
            height="auto"
            p={2}
            variant="unstyled"
            onClick={() => onImageClick(src)}
            _hover={{ bg: "gray.600" }}
          >
            <HStack spacing={2} align="start" width="100%">
              <Image 
                src={src} 
                alt={`Image ${index + 1}`} 
                objectFit="cover"
                height="80px"
                width="80px"
                borderRadius="md"
              />
              <Box flex="1" textAlign="left">
                <Text color="gray.200" fontSize="sm" mb={1}>Day Image</Text>
                <Text color="gray.300" fontSize="xs">Source: Maxar</Text>
                <Text color="gray.400" fontSize="xs" mt={1}>Date Added: 2024-01-20</Text>
                <Text color="gray.400" fontSize="xs">Resolution: 99cm</Text>
                <Text color="gray.400" fontSize="xs">Cloud Coverage: 14%</Text>
              </Box>
            </HStack>
          </Button>
        </Box>
      ))}
    </VStack>
  );
}