import { Box, Text, Link, Image } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <Box display="flex" pos="fixed" top={0} w="100%" h="80px">
      <Box ml={2} display="flex" alignItems="center">
        <Box boxSize="s">
          <Image src="../favicon.ico" alt="logo" width={50} height={50} />
        </Box>
        <Box boxSize="s" ml={2}>
          <Link as={NextLink} alignSelf="center" color="yellow.50" href="/">
            <Text fontSize="2xl">Weather App</Text>
          </Link>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}
