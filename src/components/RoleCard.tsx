import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";

function RoleCard() {
  return (
    <Box
      bgGradient="linear(to-r, #7928CA, #FF0080)"
      display="flex"
      justifyContent="end"
      flexDirection="column"
      px={5}
      pt={16}
      pb={5}

      borderRadius="10px"
    >
      <Box>
        <Text fontWeight="700" color="white" fontSize="20px">
          Frontend Mentor
        </Text>
        <Text color="white" fontSize="15px">Feedback Board</Text>
      </Box>
    </Box>
  );
}

export default RoleCard;
