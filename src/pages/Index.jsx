import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaMusic, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.900" color="white">
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" mt={10}>
          Welcome to [Band Name] Tour
        </Heading>
        <Text fontSize="xl">
          Join us on our journey across the globe. Experience the music, the energy, and the unforgettable moments.
        </Text>
        <Flex justify="center" wrap="wrap" spacing={4}>
          <Button leftIcon={<FaMusic />} colorScheme="teal" variant="solid" size="lg" m={2}>
            Listen Now
          </Button>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="outline" size="lg" m={2}>
            Tour Dates
          </Button>
          <Button leftIcon={<FaTicketAlt />} colorScheme="teal" variant="outline" size="lg" m={2}>
            Buy Tickets
          </Button>
        </Flex>
        <Box boxSize="lg" mt={10}>
          <Image src="/path-to-your-image.jpg" alt="Band Image" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;