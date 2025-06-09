import React from 'react';
import { VStack, HStack, Text, IconButton } from '@chakra-ui/react';
import { MdTune } from "react-icons/md"; 
import ImageLine from './ImageLine';

const ImageGrid = ({ currentImages, onImageClick, userMessageCount }) => {
  // Assuming currentImages is an array of image URLs
  const imageLines = [];
  for (let i = 0; i < currentImages.length; i += 4) {
    imageLines.push(currentImages.slice(i, i + 4));
  }

  // Limit the number of rows based on userMessageCount
  const displayedLines = userMessageCount === 2 ? imageLines.slice(0, 2) : imageLines;

  return (
    <VStack spacing={1} align="stretch">
      <HStack justify="space-between" px={2} py={3} bg="gray.800" borderRadius="md">
        <Text color="gray.200" fontSize="sm" fontWeight="medium">
          Images Already Captured
        </Text>
        <IconButton
          icon={<MdTune />}
          variant="ghost"
          size="sm"
          color="gray.400"
          aria-label="Filter images"
          _hover={{ color: "white" }}
        />
      </HStack>
      {displayedLines.map((line, index) => (
        <ImageLine key={index} images={line} onImageClick={onImageClick} />
      ))}
    </VStack>
  );
};

export default ImageGrid;