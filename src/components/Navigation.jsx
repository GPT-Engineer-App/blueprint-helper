import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.800" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }} _activeLink={{ bg: "gray.700" }}>
            Home
          </Link>
          <Link as={NavLink} to="/shop" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }} _activeLink={{ bg: "gray.700" }}>
            Shop
          </Link>
        </Box>
        <Flex alignItems="center">
          <Button as={NavLink} to="/login" variant="solid" colorScheme="teal" size="sm" mr={4}>
            Login
          </Button>
          <Button as={NavLink} to="/signup" variant="outline" colorScheme="teal" size="sm">
            Sign Up
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;