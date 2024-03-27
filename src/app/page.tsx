import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import RoleCard from "../components/RoleCard";
import Header from "@/components/Header";
import DataSection from "@/components/DataSection";
import FiltersCard from "@/components/FiltersCard";
import RoadMapCard from "@/components/RoadMapCard";
export default function Home() {
  return (
    <Box bg="#F7F8FD" height="100%">
      <Box maxW="1100px" mx="auto" w="100%" py="80px">
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <GridItem colSpan={4} w="100%">
            <Box display="flex" flexDirection="column" gap={5}>
              <RoleCard />
              <FiltersCard />
              <RoadMapCard />
            </Box>
          </GridItem>
          <GridItem colSpan={8} w="100%">
            <Box display="flex" flexDirection="column" gap={5}>
              <Header />
              <DataSection />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
