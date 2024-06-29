import { CheckIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

const LeadMagnetCard = (props) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" mb="4">
      <Box display="flex" alignItems="center" mb="2">
        <Icon as={SettingsIcon} w={6} h={6} mr="2" />
        <Box fontWeight="bold" as="h4" lineHeight="tight">
          CONTENT IDEAS GENERATOR
        </Box>
      </Box>
      <Box mb="2">This will write you an article about any topic</Box>
      <Box display="flex" alignItems="center" mb="2">
        <Icon as={CheckIcon} color="green.500" w={4} h={4} mr="2" />
        <Box as="span" color="green.500" fontWeight="semibold">
          activated
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Menu>
          <MenuButton as={Button} rightIcon={<SettingsIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem> {/* Corrected closing tag */}
          </MenuList>
        </Menu>
        <Button colorScheme="teal" variant="outline">
          Show Leads (1)
        </Button>
      </Box>
    </Box>
  );
};

export default LeadMagnetCard;
