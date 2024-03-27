import { Box } from "@chakra-ui/react";
import React from "react";
import { Bulb, ChevronDown } from "../../public/icons";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Plus } from "react-iconly";

function Header() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={5}
      borderRadius="10px"
      bg="#373F68"
      alignItems="center"
    >
      <Box display="flex" gap={4} alignItems="center">
        <Box display="flex" gap={2} alignItems="center">
          <Bulb />
          <Text fontWeight="bold" fontSize="18px" color="white">
            6 Suggestions
          </Text>
        </Box>
        <Box display="flex" gap={1} alignItems="center">
          <Text fontWeight="400" fontSize="14px" color="white">
            Sort by :
          </Text>
          <Text fontWeight="bold" fontSize="14px" color="white">
            Most Upvotes
          </Text>
          <ChevronDown width={10} />
        </Box>
      </Box>
      {/* <Plus /> */}
      <Button leftIcon="+" colorScheme="primary" size="sm">
        Add Feedback
      </Button>
    </Box>
  );
}

export default Header;
