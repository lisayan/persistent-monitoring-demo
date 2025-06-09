import React, { useState } from 'react';
import { Box, Image, Button, IconButton, Flex } from '@chakra-ui/react';
import { ArrowBackIcon, CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export default function SingleImage({ imageSrc, imageSrc2, onBack, userMessageCount }) {
    const [showFirstImage, setShowFirstImage] = useState(true);

    return (
        <Box height="100vh" display="flex" flexDirection="column" bg="gray.700" position="relative">
            <Image 
                src={showFirstImage ? imageSrc : imageSrc2} 
                alt="Selected Image" 
                maxH="100%" 
                maxW="100%" 
                objectFit="contain" 
            />
            <Flex
                position="absolute"
                top={4}
                left={4}
                zIndex={10}
            >
                <IconButton
                    icon={<CloseIcon />}
                    onClick={onBack}
                    aria-label="Close image"
                    variant="ghost"
                    color="white"
                    _hover={{ bg: 'whiteAlpha.300' }}
                    size="lg"
                />
            </Flex>
            {imageSrc2 && (
                <Flex
                    position="absolute"
                    top="50%"
                    width="100%"
                    justify="space-between"
                    px={4}
                    transform="translateY(-50%)"
                >
                    <IconButton
                        icon={<ChevronLeftIcon boxSize={10} w={12} h={12} />}
                        onClick={() => setShowFirstImage(true)}
                        aria-label="Previous image"
                        variant="ghost"
                        color="white"
                        _hover={{ bg: 'whiteAlpha.300' }}
                        size="lg"
                        isDisabled={showFirstImage}
                    />
                    <IconButton
                        icon={<ChevronRightIcon boxSize={10} w={12} h={12} />}
                        onClick={() => setShowFirstImage(false)}
                        aria-label="Next image"
                        variant="ghost"
                        color="white"
                        _hover={{ bg: 'whiteAlpha.300' }}
                        size="lg"
                        isDisabled={!showFirstImage}
                    />
                </Flex>
            )}
        </Box>
    );
}