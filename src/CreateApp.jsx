import React from "react";
import { Box, Button, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CreateApp() { // Ensure the component name matches the file name
  const navigate = useNavigate();

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
        <Flex align="center" mr={5}>
          <Image src="/api/placeholder/150/50" alt="Logo" />
        </Flex>

        <Box>
          <Link mr={4}>Blog</Link>
          <Link mr={4}>Docs</Link>
          <Link mr={4}>Sign-in</Link>
          <Button colorScheme="teal" onClick={() => navigate("/FormBuilder")}>
            Create App
          </Button>
        </Box>
      </Flex>

      {/* Hero Section */}
      <Flex 
        as="section" 
        align="center" 
        justify="space-between" 
        wrap="wrap" 
        padding="4rem" 
        bg="gray.50"
      >
        <VStack align="flex-start" spacing={4} maxW="50%">
          <Heading as="h1" size="2xl">
            Lead Magnet Wizard
          </Heading>
          <Text fontSize="xl">
            This is where the subtitle goes
          </Text>
        </VStack>
        <Image src="/api/placeholder/400/300" alt="Hero image" />
      </Flex>
    </Box>
  );
}
