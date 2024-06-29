import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const initialElements = [
  { id: "paragraph", content: "Paragraph" },
  { id: "separator", content: "Separator" },
  { id: "textField", content: "Text Field" },
  { id: "textareaField", content: "Textarea Field" },
  { id: "emailAddress", content: "Email Address" },
  { id: "selectOption", content: "Select Option" },
  { id: "numberField", content: "Number Field" },
  { id: "websiteURL", content: "Website URL" },
];

export default function FormBuilder() {
  const navigate = useNavigate();
  const [elements, setElements] = React.useState(initialElements);
  const [formLayout, setFormLayout] = React.useState([]);
  const [variables, setVariables] = React.useState("");
  const [aiPrompt, setAiPrompt] = React.useState("");
  const [systemPrompt, setSystemPrompt] = React.useState("");
  const [outputType, setOutputType] = React.useState("");
  const [formColor, setFormColor] = React.useState("#ffffff");
  const [formFont, setFormFont] = React.useState("Arial");

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    if (
      source.droppableId === "elements" &&
      destination.droppableId === "formLayout"
    ) {
      const newElement = elements.find((element) => element.id === draggableId);
      setFormLayout([...formLayout, newElement]);
    } else if (
      source.droppableId === "formLayout" &&
      destination.droppableId === "formLayout"
    ) {
      const newFormLayout = Array.from(formLayout);
      const [movedElement] = newFormLayout.splice(source.index, 1);
      newFormLayout.splice(destination.index, 0, movedElement);
      setFormLayout(newFormLayout);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Flex direction="column" p="4">
        <Flex direction="row" gap="4">
          {/* Column 1: Drag and drop blocks to build a form */}
          <Droppable droppableId="elements">
            {(provided) => (
              <Box
                flex="1"
                bg={useColorModeValue("gray.100", "gray.700")}
                p="4"
                borderRadius="md"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Heading as="h2" size="md" mb="4">
                  Form Elements
                </Heading>
                {elements.map((element, index) => (
                  <Draggable
                    key={element.id}
                    draggableId={element.id}
                    index={index}
                  >
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        mb="2"
                        p="2"
                        border="1px solid"
                        borderColor={useColorModeValue("gray.300", "gray.600")}
                        borderRadius="md"
                      >
                        {element.content}
                      </Box>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>

          {/* Column 2: Canvas to drag the blocks onto to make a form */}
          <Droppable droppableId="formLayout">
            {(provided) => (
              <Box
                flex="1"
                bg={useColorModeValue("white", "gray.800")}
                p="4"
                borderRadius="md"
                border="1px solid"
                borderColor={useColorModeValue("gray.300", "gray.600")}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Heading as="h2" size="md" mb="4">
                  Form Preview
                </Heading>
                {formLayout.map((element, index) => (
                  <Box
                    key={index}
                    mb="2"
                    p="2"
                    border="1px solid"
                    borderColor={useColorModeValue("gray.300", "gray.600")}
                    borderRadius="md"
                  >
                    {element.content}
                  </Box>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>

          {/* Column 3: Customization section */}
          <Box flex="1" bg={useColorModeValue("white", "gray.800")} p="4" borderRadius="md" border="1px solid" borderColor={useColorModeValue("gray.300", "gray.600")}>
            <Heading as="h2" size="md" mb="4">Customization</Heading>
            <VStack spacing="4" align="stretch">
              <Box>
                <label>Form Colors</label>
                <Input
                  type="color"
                  value={formColor}
                  onChange={(e) => setFormColor(e.target.value)}
                />
              </Box>
              <Box>
                <label>Form Fonts</label>
                <Select
                  value={formFont}
                  onChange={(e) => setFormFont(e.target.value)}
                >
                  <option>Arial</option>
                  <option>Helvetica</option>
                  <option>Times New Roman</option>
                  <option>Courier New</option>
                </Select>
              </Box>
            </VStack>
          </Box>

          {/* Column 4: Section for user input */}
          <Box flex="1" bg={useColorModeValue("gray.100", "gray.700")} p="4" borderRadius="md">
            <Heading as="h2" size="md" mb="4">Configuration</Heading>
            <VStack spacing="4" align="stretch">
              <Box>
                <label>Available Variables</label>
                <Input
                  value={variables}
                  onChange={(e) => setVariables(e.target.value)}
                />
              </Box>
              <Box>
                <label>AI Prompt</label>
                <Textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                />
              </Box>
              <Box>
                <label>System Prompt</label>
                <Textarea
                  value={systemPrompt}
                  onChange={(e) => setSystemPrompt(e.target.value)}
                />
              </Box>
              <Box>
                <label>Output Type</label>
                <Input
                  value={outputType}
                  onChange={(e) => setOutputType(e.target.value)}
                />
              </Box>
              <Button colorScheme="teal" mt="4" onClick={() => console.log("Test clicked")}>
                TEST
              </Button>
              <Button colorScheme="blue" mt="4" onClick={() => navigate("/LeadMagnet")}>
                SAVE + NEXT
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </DragDropContext>
  );
}
