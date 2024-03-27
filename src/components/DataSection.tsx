import { Box } from "@chakra-ui/react";
import React from "react";
import DataCard from "./DataCard";
export interface Data {
  title: string;
  description: string;
  upvotes: number;
  tag: string;
  comments?: number;
}
const data: Data[] = [
  {
    title: "Add tags for solutions",
    description: "Easier to search for solutions based on a specific stack.",
    upvotes: 112,
    tag: "Enhancement",
    comments: 2,
  },
  {
    title: "Add a dark theme option",
    description:
      "It would help people with light sensitivities and who prefer dark mode.",
    upvotes: 99,
    tag: "Feature",
    comments: 4,
  },
  {
    title: "Q&A within the challenge hubs",
    description: "Challenge specific Q&A would make for easy reference.",
    upvotes: 65,
    tag: "Feature",
    comments: 1,
  },
  {
    title: "Allow image/video upload to feedback",
    description: "Images and screencasts can better illustrate feedback.",
    upvotes: 51,
    tag: "Enhancement",
    comments: 2,
  },
];
function DataSection() {
  return (
    <Box display="flex" flexDirection="column" gap={5}>
      {data.map((item, index) => (
        <DataCard data={item} key={index} />
      ))}
    </Box>
  );
}

export default DataSection;
