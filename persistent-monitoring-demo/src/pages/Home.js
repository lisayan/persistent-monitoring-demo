import React, { useState, useRef } from 'react';
import { ChakraProvider, Box, Flex, Heading, IconButton, css, VStack, Button, Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import CesiumMap from "../components/CesiumMap";
import ChatWindow from "../components/ChatWindow";
import ToolMenu from "../components/ToolMenu";
import ImageSearch from "../components/ImageSearch";
import HomeNavigationBar from "../components/HomeNavigationBar";
import SingleImage from "../components/SingleImage";
import PersistentMonitoringWindow from "../components/PersistentMonitoringWindow";

export default function Home() {
    const [view, setView] = useState('map');
    const [chatMessages, setChatMessages] = useState([]);
    const isFirstMessageRef = useRef(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [userMessageCount, setUserMessageCount] = useState(0);
    const [isMonitoringOpen, setIsMonitoringOpen] = useState(false);
    const [boundingBoxDrawn, setBoundingBoxDrawn] = useState(false);

    const addChatMessage = (message) => {
        setChatMessages(prevMessages => [...prevMessages, message]);
        if (message.sender === 'user') {
            console.log("user message count: ", userMessageCount);
            if (isFirstMessageRef.current) {
                isFirstMessageRef.current = false;
                setUserMessageCount(1);
                //setTimeout(() => setView('images'), 0);
            } else {
                setUserMessageCount(prevCount => prevCount + 1);
            }
            if (userMessageCount === 2) {
                handleThirdMessage();
            }
        }
    };

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setView('single');
    };

    const handleBackToSearch = () => {
        setSelectedImage(null);
        setView('images');
    };

    const handleThirdMessage = () => {
        //setSelectedImage('./images/annotated.png'); // Set a default image
        setView('single');
    }
        
    return (
        <ChakraProvider>
            <Flex direction="column" height="100vh">
                <HomeNavigationBar onViewChange={setView} />
                <Flex flex={1} overflow="hidden">
                    <Box width="300px" bg="gray.800" overflow="hidden" display="flex" flexDirection="column">
                        {view === 'single' ? (
                            <ChatWindow messages={chatMessages} onSendMessage={addChatMessage} addMessage={addChatMessage} userMessageCount={userMessageCount} />
                        ) : (
                            <>
                                <Box flex={1} overflowY="auto">
                                    <ImageSearch onImageClick={handleImageClick} userMessageCount={userMessageCount} boundingBoxDrawn={boundingBoxDrawn}/>
                                </Box>
                                <Button colorScheme="blue" m={2} onClick={() => setIsMonitoringOpen(true)}>
                                    Set Up Persistent Monitoring
                                </Button>
                            </>
                        )}
                    </Box>
                    <Flex direction="column" flex={1}>
                        <Flex
                            alignItems="center"
                            p={2}
                            bg="gray.800"
                            width="100%"
                            height="48px"
                            borderBottom="1px solid"
                            borderColor="gray.700"
                        >
                            {view !== 'menu' && (
                                <IconButton
                                    icon={<ArrowBackIcon />}
                                    onClick={() => setView('menu')}
                                    aria-label="Go back"
                                    mr={2}
                                    size="sm"
                                    variant="ghost"
                                    color="gray.300"
                                />
                            )}
                            <Heading size="sm" color="gray.100">
                                {view === 'menu' ? 'Artifacts' : view === 'map' ? 'Map View' : view === 'single' ? 'Image' : 'Found Images'}
                            </Heading>
                        </Flex>
                        <Box flex={1} position="relative" width="100%" height="100%" overflow="hidden">
                            {view === 'menu' && <ToolMenu onSelectView={setView} />}
                            {view === 'map' && <CesiumMap 
                            boundingBoxDrawn={boundingBoxDrawn}
                            setBoundingBoxDrawn={setBoundingBoxDrawn}
                            />}
                            {view === 'single' && (
                                <SingleImage imageSrc={selectedImage} imageSrc2="./images/airfield_2.png" onBack={handleBackToSearch} userMessageCount={userMessageCount}/>
                            )}
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

            <Modal isOpen={isMonitoringOpen} onClose={() => setIsMonitoringOpen(false)} size="4xl" isCentered>
                <ModalOverlay />
                <ModalContent maxH="70vh" overflowY="auto">
                    <PersistentMonitoringWindow onClose={() => setIsMonitoringOpen(false)} />
                </ModalContent>
            </Modal>
        </ChakraProvider>
    );
}