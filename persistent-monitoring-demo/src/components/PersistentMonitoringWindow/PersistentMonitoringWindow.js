import React, { useState } from 'react';
import {
    Box,
    Button,
    VStack,
    Input,
    Textarea,
    Image,
    Text,
    IconButton,
    useDisclosure,
    Flex,
    FormLabel,
    FormControl,
    Collapse
} from '@chakra-ui/react';
import { AddIcon, CloseIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { FiImage } from 'react-icons/fi';

const Indicator = ({ indicator, onDelete, index, isExpanded, onToggle }) => {
    const [images, setImages] = useState(indicator.images || []);
    const [description, setDescription] = useState(indicator.description);

    const handleAddImages = (e) => {
        const files = Array.from(e.target.files);
        files.forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages(prev => [...prev, reader.result]);
                indicator.images = [...(indicator.images || []), reader.result];
            };
            reader.readAsDataURL(file);
        });
    };

    const handleDeleteImage = (imageIndex) => {
        setImages(prev => prev.filter((_, i) => i !== imageIndex));
        indicator.images = indicator.images.filter((_, i) => i !== imageIndex);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        indicator.description = e.target.value;
    };

    const previewText = description ? description.slice(0, 30) + '...' : 'No description yet...';

    return (
        <Box p={4} mt={1} borderWidth="1px" borderRadius="lg" bg="gray.700" borderColor="gray.600" width="100%" shadow="md">
            <Flex justify="space-between" align="center" mb={isExpanded ? 2 : 0}>
                <Flex align="center" flex={1}>
                    <IconButton
                        icon={<CloseIcon />}
                        onClick={() => onDelete(index)}
                        colorScheme="whiteAlpha"
                        variant="ghost"
                        size="sm"
                        mr={2}
                    />
                    <Text color="white" fontSize="lg" fontWeight="bold">
                        {isExpanded ? `Indicator ${index + 1}` : `Indicator ${index + 1}: ${previewText}`}
                    </Text>
                </Flex>
                <IconButton
                    icon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    onClick={onToggle}
                    variant="ghost"
                    colorScheme="whiteAlpha"
                    size="sm"
                />
            </Flex>

            <Collapse in={isExpanded} animateOpacity>
                <VStack spacing={4} align="stretch" mt={2}>
                    <FormControl>
                        <FormLabel color="gray.200" mb={1}>Description</FormLabel>
                        <Text color="gray.400" fontSize="xs" mb={1}>
                            Describe what you want to monitor. Be specific about visual characteristics, locations, or changes you're interested in tracking.
                        </Text>
                        <Textarea
                            placeholder="Enter detailed description of what to monitor..."
                            value={description}
                            onChange={handleDescriptionChange}
                            bg="gray.600"
                            color="white"
                            minH="80px"
                            size="sm"
                            _placeholder={{ color: 'gray.400' }}
                            borderColor="gray.500"
                            _hover={{ borderColor: 'blue.300' }}
                            _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px #4299E1' }}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel color="gray.200" mb={1}>Reference Images</FormLabel>
                        <Text color="gray.400" fontSize="xs" mb={1}>
                            Add example images that show what you're looking for.
                        </Text>
                        <Flex wrap="wrap" gap={2}>
                            {images.map((image, imageIndex) => (
                                <Box
                                    key={imageIndex}
                                    position="relative"
                                    width="100px"
                                    height="100px"
                                >
                                    <Image
                                        src={image}
                                        alt={`Reference ${imageIndex + 1}`}
                                        objectFit="cover"
                                        width="100%"
                                        height="100%"
                                        borderRadius="md"
                                    />
                                    <IconButton
                                        icon={<CloseIcon />}
                                        size="xs"
                                        position="absolute"
                                        top={1}
                                        right={1}
                                        colorScheme="red"
                                        onClick={() => handleDeleteImage(imageIndex)}
                                    />
                                </Box>
                            ))}
                            <Box
                                borderWidth="2px"
                                borderStyle="dashed"
                                borderColor="gray.500"
                                borderRadius="md"
                                width="100px"
                                height="100px"
                                position="relative"
                                _hover={{ borderColor: 'blue.300' }}
                            >
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAddImages}
                                    display="none"
                                    id={`file-upload-${index}`}
                                    multiple
                                />
                                <Flex
                                    direction="column"
                                    align="center"
                                    justify="center"
                                    height="100%"
                                >
                                    <IconButton
                                        as="label"
                                        htmlFor={`file-upload-${index}`}
                                        icon={<FiImage size="20px" />}
                                        colorScheme="whiteAlpha"
                                        variant="ghost"
                                        size="md"
                                        aria-label="Add Image"
                                        cursor="pointer"
                                        mb={1}
                                    />
                                    <Text color="gray.300" fontSize="xs" textAlign="center">
                                        Add image
                                    </Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </FormControl>
                </VStack>
            </Collapse>
        </Box>
    );
};

const PersistentMonitoringWindow = ({ onClose }) => {
    const [indicators, setIndicators] = useState([{ description: '', images: [] }]);
    const [expandedIndex, setExpandedIndex] = useState(0);

    const addIndicator = () => {
        setIndicators([...indicators, { description: '', images: [] }]);
        setExpandedIndex(indicators.length);
    };

    const deleteIndicator = (indexToDelete) => {
        // Create new array without the deleted indicator
        const updatedIndicators = indicators.filter((_, index) => index !== indexToDelete);

        // Update state with new array
        setIndicators(updatedIndicators);

        if (indexToDelete === expandedIndex) {
            setExpandedIndex(Math.max(0, indexToDelete - 1));
        } else if (indexToDelete < expandedIndex) {
            setExpandedIndex(expandedIndex - 1);
        }
    };

    const handleSubmit = () => {
        console.log('Submitting indicators:', indicators);
        // TODO: Implement submission logic
    };

    return (
        <Box bg="gray.800" p={6} height="100%" display="flex" flexDirection="column">
            <IconButton
                icon={<CloseIcon />}
                onClick={onClose}
                position="absolute"
                right="4"
                top="4"
                size="sm"
                colorScheme="whiteAlpha"
                variant="ghost"
                aria-label="Close window"
                _hover={{ bg: 'whiteAlpha.200' }}
            />
            <VStack spacing={4} align="stretch" height="100%">
                <Text color="white" fontSize="xl" fontWeight="bold">Set Up Persistent Monitoring</Text>

                <Box flex="1" overflowY="auto" pr={2}>
                    {indicators.map((indicator, index) => (
                        <Indicator
                            key={`indicator-${index}-${indicators.length}`} // Added length to key
                            indicator={indicator}
                            onDelete={() => deleteIndicator(index)}
                            index={index}
                            isExpanded={index === expandedIndex}
                            onToggle={() => setExpandedIndex(index === expandedIndex ? -1 : index)}
                        />
                    ))}
                </Box>

                <Box mt="auto" pt={4}>
                    <Button
                        leftIcon={<AddIcon />}
                        onClick={addIndicator}
                        colorScheme="whiteAlpha"
                        variant="outline"
                        size="md"
                        width="100%"
                        mb={2}
                    >
                        Add Another Indicator
                    </Button>

                    <Button
                        onClick={handleSubmit}
                        colorScheme="blue"
                        size="md"
                        width="100%"
                    >
                        Submit Indicators
                    </Button>
                </Box>
            </VStack>
        </Box>
    );
};

export default PersistentMonitoringWindow;
