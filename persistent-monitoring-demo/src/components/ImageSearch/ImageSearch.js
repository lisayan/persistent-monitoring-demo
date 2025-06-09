import React, { useState } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import ImageGrid from './ImageGrid';

export default function ImageSearch({ onImageClick, userMessageCount, boundingBoxDrawn }) {
  // rotating through the same images manually for now, will definitely change in later stages to better process data
  const images = [
    [
      './images/airfield_1.png', './images/airfield_2.png', './images/demo3.png', './images/demo4.png',
      './images/demo5.png', './images/demo6.png', './images/demo7.png', './images/demo8.png',
      './images/image9.png', './images/image10.png', './images/image11.png', './images/image12.png',
      './images/image13.png', './images/image14.png', './images/image15.png', './images/image16.png'
    ],
    [
      './images/image13.png', './images/image14.png', './images/image15.png', './images/image16.png',
      './images/image9.png', './images/image10.png', './images/image11.png', './images/image12.png',
      './images/image5.png', './images/image6.png', './images/image7.png', './images/image8.png',
      './images/image1.png', './images/image2.png', './images/image3.png', './images/image4.png'
    ],
    [
      './images/image5.png', './images/image6.png', './images/image7.png', './images/image8.png',
      './images/image13.png', './images/image14.png', './images/image15.png', './images/image16.png',
      './images/image1.png', './images/image2.png', './images/image3.png', './images/image4.png',
      './images/image9.png', './images/image10.png', './images/image11.png', './images/image12.png'
    ],
    [
      './images/image9.png', './images/image10.png', './images/image11.png', './images/image12.png',
      './images/image5.png', './images/image6.png', './images/image7.png', './images/image8.png',
      './images/image13.png', './images/image14.png', './images/image15.png', './images/image16.png',
      './images/image1.png', './images/image2.png', './images/image3.png', './images/image4.png'
    ],
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSetupAlerts = () => {
    // TODO: Implement alert setup functionality
    console.log('Setting up persistent monitoring alerts');
  };

  return (
    <Flex direction="column" height="100%" overflow="hidden" bg="gray.800" p={2}>
      <Box flex={1} overflowY="auto">
        <ImageGrid
          currentImages={boundingBoxDrawn ? images[0] : []}
          searchQuery={searchQuery}
          onImageClick={onImageClick}
          userMessageCount={userMessageCount}
        />
      </Box>
    </Flex>
  );
}