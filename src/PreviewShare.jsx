import {
  Box,
  Button,
  Input,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PreviewShare() {
  const [keyword, setKeyword] = useState("");
  const [articleLength, setArticleLength] = useState("500 words");
  const [email, setEmail] = useState("");
  const [codeSnippet, setCodeSnippet] = useState(
    '<iframe src="https://example.com/widget" width="600" height="400"></iframe>'
  );
  const [activeTab, setActiveTab] = useState(3);
  const navigate = useNavigate();

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    alert("Code copied to clipboard!");
  };

  const handleSaveAndPublish = () => {
    // Add your save and publish logic here
    navigate("/Library");
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} p={4}>
      {/* Column 1: Preview of Completed Widget */}
      <Box flex={1} p={4} borderWidth={1} borderRadius="lg" mr={{ md: 4 }}>
        <VStack spacing={4}>
          <Box textAlign="center">
            <FaLightbulb className="mx-auto text-2xl mb-2" />
            <Text fontSize="2xl" fontWeight="bold">
              CONTENT IDEAS GENERATOR
            </Text>
          </Box>
          <Box>
            <Text fontSize="sm" fontWeight="medium">
              What's your main target keyword?
            </Text>
            <Input
              placeholder="Type here"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              mt={1}
            />
          </Box>
          <Box>
            <Text fontSize="sm" fontWeight="medium">
              How long should the article be?
            </Text>
            <Select
              value={articleLength}
              onChange={(e) => setArticleLength(e.target.value)}
              mt={1}
            >
              <option>500 words</option>
              <option>1000 words</option>
              <option>1500 words</option>
            </Select>
          </Box>
          <Box>
            <Text fontSize="sm" fontWeight="medium">
              Your email address
            </Text>
            <Input
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mt={1}
            />
          </Box>
          <Button colorScheme="blue" alignSelf="center">
            GENERATE
          </Button>
        </VStack>
      </Box>

      {/* Column 2: Share Code */}
      <Box flex={1} p={4} borderWidth={1} borderRadius="lg">
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Content ideas generator
          </Text>
          <Tabs
            variant="unstyled"
            index={activeTab}
            onChange={(index) => setActiveTab(index)}
          >
            <TabList>
              <Tab
                _selected={{
                  fontWeight: "bold",
                  borderBottom: "2px solid",
                  borderColor: "blue.500",
                }}
              >
                BUILDER
              </Tab>
              <Tab
                _selected={{
                  fontWeight: "bold",
                  borderBottom: "2px solid",
                  borderColor: "blue.500",
                }}
              >
                DESIGN
              </Tab>
              <Tab
                _selected={{
                  fontWeight: "bold",
                  borderBottom: "2px solid",
                  borderColor: "blue.500",
                }}
              >
                INTEGRATIONS
              </Tab>
              <Tab
                _selected={{
                  fontWeight: "bold",
                  borderBottom: "2px solid",
                  borderColor: "blue.500",
                }}
              >
                SHARE
              </Tab>
              <Tab
                _selected={{
                  fontWeight: "bold",
                  borderBottom: "2px solid",
                  borderColor: "blue.500",
                }}
              >
                RESULTS
              </Tab>
            </TabList>
          </Tabs>
        </Flex>
        <Box mb={4}>
          <Text fontWeight="bold">Copy & Paste HTML on your website</Text>
          <Text>Embed the code anywhere you want to display.</Text>
        </Box>
        <VStack spacing={4} align="stretch">
          <Button onClick={handleCopyCode} colorScheme="blue">
            COPY CODE
          </Button>
          <Textarea readOnly value={codeSnippet} size="sm" resize="none" h="32" />
          <Button colorScheme="green" alignSelf="flex-end" onClick={handleSaveAndPublish}>
            SAVE & PUBLISH
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}
