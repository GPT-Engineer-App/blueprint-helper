import { Container, Text, VStack, Box, Heading, SimpleGrid, Flex, Spacer, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Business Profiles</Heading>
          <Text mt={4}>Placeholder for business profiles with logos, images, and relevant information.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Map View</Heading>
          <Text mt={4}>Placeholder for map view displaying businesses, events, and special offers.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Filters</Heading>
          <Text mt={4}>Placeholder for filters by category, price, ratings, distance, and more.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">E-Commerce</Heading>
          <Text mt={4}>Placeholder for e-commerce functionality for selling products, services, event tickets, and special offers.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">POS System</Heading>
          <Text mt={4}>Placeholder for POS system for in-person sales, warehouse management, and stock control.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Membership Tiers</Heading>
          <Text mt={4}>Placeholder for membership tiers with different features and benefits.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Notifications</Heading>
          <Text mt={4}>Placeholder for push notifications for store owners and users.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Free Classifieds Section</Heading>
          <Text mt={4}>Placeholder for free classifieds section for non-members to advertise second-hand goods.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Messaging</Heading>
          <Text mt={4}>Placeholder for messaging system for communication between sellers and buyers.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Analytics and Insights</Heading>
          <Text mt={4}>Placeholder for analytics and insights on business performance, customer behavior, and sales trends.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;