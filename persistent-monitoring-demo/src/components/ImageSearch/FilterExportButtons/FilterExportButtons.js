import React from 'react';
import { Button, Box, Flex, Select } from '@chakra-ui/react';

export default function FilterExportButtons() {
  return (
    <Flex justify="space-between" align="center" my={4}>
      <Box width="50%" mx="auto">
        {/* Placeholder for alignment */}
      </Box>
      <Flex align="center">
        <Select placeholder="Export as..." size="sm" mr={2} width="auto" bg="white">
          <option value="csv">CSV</option>
          <option value="json">JSON</option>
          <option value="xml">XML</option>
        </Select>
        <Button colorScheme="blue" size="sm" mr={5}>
          Export
        </Button>
      </Flex>
    </Flex>
  );
}
