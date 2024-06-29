import {
  Box,
  Button,
  HStack,
  Input,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LeadMagnet() {
  const [emailCapture, setEmailCapture] = useState(false);
  const [buttonColor, setButtonColor] = useState("#000000");
  const [fontColor, setFontColor] = useState("#000000");
  const navigate = useNavigate();

  return (
    <Box display="flex" p={4}>
      {/* Left Column: Form Preview */}
      <Box flex={1} p={4} borderWidth={1} borderRadius="lg">
        <Text fontSize="xl" mb={4}>
          CONTENT IDEAS GENERATOR
        </Text>
        <Input
          placeholder="What topic do you want to generate an idea about?"
          mb={4}
        />
        <Button colorScheme="blue">GENERATE</Button>
      </Box>

      {/* Middle Column: Customization Options */}
      <Box flex={1} p={4} borderWidth={1} borderRadius="lg" mx={4}>
        <Text fontSize="xl" mb={4}>
          Customize Your Lead Magnet
        </Text>
        <VStack align="start" spacing={4}>
          <HStack>
            <Text>Email Capture</Text>
            <Switch
              isChecked={emailCapture}
              onChange={() => setEmailCapture(!emailCapture)}
            />
          </HStack>
          <Box>
            <Text>Button Color</Text>
            <Input
              type="color"
              value={buttonColor}
              onChange={(e) => setButtonColor(e.target.value)}
            />
          </Box>
          <Box>
            <Text>Font Color</Text>
            <Input
              type="color"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
            />
          </Box>
        </VStack>
      </Box>

      {/* Right Column: Setup Button */}
      <Box flex={1} p={4} borderWidth={1} borderRadius="lg">
        <Button
          colorScheme="green"
          size="lg"
          onClick={() => navigate("/PreviewShare")}
        >
          SET UP LEAD MAGNET
        </Button>
      </Box>
    </Box>
  );
}
