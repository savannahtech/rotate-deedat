import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";

function Chip({
  text,
  active,
  onClick,
}: {
  text: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Box
      onClick={onClick}
      bg={active ? "#4661E6" : "#F2F4FF"}
      borderRadius="10"
      px={4}
      py={2}
      w="fit-content"
      cursor="pointer"
    >
      <Text
        fontWeight="600"
        fontSize="14px"
        color={active ? "white" : "#4661E6"}
      >
        {text}
      </Text>
    </Box>
  );
}

export default Chip;
