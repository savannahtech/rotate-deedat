"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import Chip from "./Chip";

const filters = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
function FiltersCard() {
  const [active, setActive] = React.useState<string>("All");
  return (
    <Box borderRadius="10px" bg="white" p={5}>
      <Box display="flex" flexWrap="wrap" gap={4}>
        {filters.map((filter) => (
          <Chip
            active={active === filter}
            onClick={() => setActive(filter)}
            text={filter}
            key={filter}
          />
        ))}
      </Box>
    </Box>
  );
}

export default FiltersCard;
