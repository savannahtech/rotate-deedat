import { Box } from "@chakra-ui/react";
import React from "react";
import { Data } from "./DataSection";
import { Text } from "@chakra-ui/react";
import { ChevronUp, CommentIcon } from "../../public/icons";
import Chip from "./Chip";
import { Comme } from "next/font/google";

function DataCard({ data }: { data: Data }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      bg="white"
      borderRadius="10px"
      p={8}
    >
      <Box display="flex" alignItems="start" gap={4}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="end"
          px={2}
          pt={4}
          pb={2}
          borderRadius="10px"
          bg="#F2F4FE"
        >
          <ChevronUp height={10} width={10} />
          <Text fontWeight="bold" fontSize="13px">
            99
          </Text>
        </Box>

        <Box display="flex" flexDirection="column" gap={2}>
          <Text fontWeight="bold" fontSize="18px" color="#3A4374">
            {data.title}
          </Text>
          <Text color="#647196" fontSize="14px">
            {data.description}
          </Text>
          <Chip text={data.tag} />
        </Box>
      </Box>

      <Box display="flex" alignItems="center" gap={4}>
        <CommentIcon />
        <Text fontWeight="bold" fontSize="14px" color="#647196">
          {data.comments}
        </Text>
      </Box>
    </Box>
  );
}

export default DataCard;
