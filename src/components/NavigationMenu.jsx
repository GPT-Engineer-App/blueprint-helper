import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <Box bg="gray.800" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <NavLink to="/" exact>
            <Button variant="ghost" colorScheme="teal">
              Home
            </Button>
          </NavLink>
          <NavLink to="/shop">
            <Button variant="ghost" colorScheme="teal">
              Shop
            </Button>
          </NavLink>
          {/* Add more navigation links as needed */}
        </Box>
      </Flex>
    </Box>
  );
};

export default NavigationMenu;