import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";

const roadMap = [
  {
    status: "Planned",
    count: 5,
  },
  {
    status: "In-Progress",
    count: 10,
  },
  {
    status: "Live",
    count: 3,
  },
];

function RoadMapCard() {
  const returnStatusColor = (status: string) => {
    if (status === "Planned") {
      return "#F49F85";
    } else if (status === "In-Progress") {
      return "#AD1FEA";
    } else {
      return "#62BCFA";
    }
  };

  return (
    <Box borderRadius="10px" bg="white" p={5}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold" fontSize="18px" color="#3A4374">
          Roadmap
        </Text>
        <Text fontWeight="600" fontSize="13px" color="#4661E6">
          View
        </Text>
      </Box>

      <Box>
        {roadMap.map((item) => (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={4}
          >
            <Box display="flex" gap={3} alignItems="center">
              <Box
                w="8px"
                h="8px"
                borderRadius="50%"
                bg={returnStatusColor(item.status)}
              />
              <Text fontWeight="400" fontSize="16px" color="#647196">
                {item.status}
              </Text>
            </Box>
            <Text fontWeight="700" fontSize="16px" color="#647196">
              {item.count}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default RoadMapCard;
