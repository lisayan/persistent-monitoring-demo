import React, { useState, useEffect, useRef } from 'react';
import { Flex, VStack, Input, Button, Text, Box, useColorModeValue, css } from '@chakra-ui/react';
// import { HfInference } from '@huggingface/inference';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ChatWindow({ messages, addMessage, userMessageCount }) {
  // const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  const [hfClient, setHfClient] = useState(null);
  // “Why were these images flagged?”
  const firstMessage = "Here is the before and after of a 9-day timelapse that shows significant construction activity at the Longtian Air Base in China."
  // “Label any storage bunkers in this image.”
  const secondMessage = "5 storage bunkers can be seen under construction. These units could most likely be used for munitions storage."
  // “Label any aircraft shelters in this image.”
  const thirdMessage = "4 hardened aircraft shelters can be seen in the image. These shelters are likely used to protect aircraft from ground attack. The units are also connected directly to the runway allowing for quick deployment."
  // “How does this fit into the broader context of China's military activity?”
  const fourthMessage = "China’s rapid upgrades suggest steps are being taken toward improving survivability and concealment of assets and operations, as well as expanding the capacity for surge operations. There have been no visible changes in the deployment of aircraft to these bases as of now, but, strategically, these improved facilities will allow for more operations aimed at intimidating Taipei or could be used in support of actual amphibious and airborne assault operations."

  // Color mode values
  const buttonColorScheme = "cyan";

  useEffect(() => {
    // const client = new HfInference('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'); 
    // setHfClient(client);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== '') {
      const userMessage = { text: `${inputMessage}`, sender: 'user' };
      addMessage(userMessage);
      setInputMessage('');

      // Determine which AI message to send based on userMessageCount
      const aiMessageText = userMessageCount === 0 ? firstMessage : userMessageCount === 1 ? secondMessage : userMessageCount === 2 ? thirdMessage : fourthMessage;
      const aiMessage = { text: aiMessageText, sender: 'ai' };

      // Simulate a delay before the AI responds
      setTimeout(() => {
        addMessage(aiMessage);
      }, 1000);

      try {
        // const response = await hfClient.textGeneration({
        //   model: 'meta-llama/Llama-2-7b-hf',
        //   inputs: inputMessage,
        //   parameters: {
        //     max_new_tokens: 50,
        //     temperature: 0.7,
        //   },
        // });
      } catch (error) {
        console.error('Error generating text:', error);
        const errorMessage = { text: `Pebbl AI: Sorry, I encountered an error: ${error.message}`, sender: 'ai' };
        addMessage(errorMessage);
      }

    }
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Flex direction="column" minHeight="100%" maxHeight="100%" bg="#131316">
      <VStack flex={1} spacing={4} p={4} overflowY="auto" width="100%">
        {messages.map((message, index) => (
          <Box
            key={index}
            alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
            bg={message.sender === 'user' ? '#262629' : '#3a3a3d'}
            color="white"
            p={2}
            borderRadius="md"
            maxWidth="90%"
            width="100%"
          >
            <Box
              maxHeight="300px"
              overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#555',
                  borderRadius: '24px',
                },
              }}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({ node, ...props }) => <Text margin="0.5em 0" {...props} />,
                  ul: ({ node, ...props }) => <Box as="ul" margin="0.5em 0" paddingLeft="1.5em" {...props} />,
                  ol: ({ node, ...props }) => <Box as="ol" margin="0.5em 0" paddingLeft="1.5em" {...props} />,
                  li: ({ node, ...props }) => <Box as="li" margin="0.25em 0" {...props} />,
                  h1: ({ node, ...props }) => <Text as="h1" fontSize="1.5em" fontWeight="bold" margin="0.5em 0" {...props} />,
                  h2: ({ node, ...props }) => <Text as="h2" fontSize="1.3em" fontWeight="bold" margin="0.5em 0" {...props} />,
                  h3: ({ node, ...props }) => <Text as="h3" fontSize="1.1em" fontWeight="bold" margin="0.5em 0" {...props} />,
                }}
              >
                {message.text}
              </ReactMarkdown>
            </Box>
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </VStack>
      <Flex p={4} borderTop="1px" borderColor="#3a3a3d">
        <Input
          placeholder="Type a message..."
          value={inputMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          mr={2}
          bg="#262629"
          color="white"
          _placeholder={{ color: '#505052' }}
        />
        <Button colorScheme={buttonColorScheme} onClick={handleSendMessage}>Send</Button>
      </Flex>
    </Flex>
  );
}