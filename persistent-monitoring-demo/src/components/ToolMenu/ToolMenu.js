import React from 'react';
import { VStack, Button, Text, Flex } from '@chakra-ui/react';
import { ViewIcon, SearchIcon } from '@chakra-ui/icons';

export default function ToolMenu({ onSelectView }) {
  return (
    <VStack spacing={4} align="stretch" p={4} bg="gray.900" height="100%">
      <Button
        onClick={() => onSelectView('map')}
        variant="ghost"
        justifyContent="flex-start"
        height="auto"
        py={3}
        px={4}
        bg="gray.800"
        _hover={{ bg: 'gray.700' }}
        borderRadius="md"
      >
        <Flex align="center" width="100%">
          <Flex align="center" justify="center" bg="gray.700" width="40px" height="40px" borderRadius="md" mr={4}>
            <ViewIcon color="gray.400" boxSize={5} />
          </Flex>
          <Flex direction="column" align="flex-start">
            <Text color="gray.100" fontWeight="medium">Map View</Text>
            <Text color="gray.500" fontSize="sm">Click to open component</Text>
          </Flex>
        </Flex>
      </Button>
      <Button
        onClick={() => onSelectView('images')}
        variant="ghost"
        justifyContent="flex-start"
        height="auto"
        py={3}
        px={4}
        bg="gray.800"
        _hover={{ bg: 'gray.700' }}
        borderRadius="md"
      >
        <Flex align="center" width="100%">
          <Flex align="center" justify="center" bg="gray.700" width="40px" height="40px" borderRadius="md" mr={4}>
            <SearchIcon color="gray.400" boxSize={5} />
          </Flex>
          <Flex direction="column" align="flex-start">
            <Text color="gray.100" fontWeight="medium">Image Search</Text>
            <Text color="gray.500" fontSize="sm">Click to open component</Text>
          </Flex>
        </Flex>
      </Button>
      {/* Add more menu items as needed */}
    </VStack>
  );
}