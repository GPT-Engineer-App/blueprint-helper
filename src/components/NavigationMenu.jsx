import { Box, Flex, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <Box bg={useColorModeValue("gray.800", "gray.900")} px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <NavLink to="/" exact>
            <Button variant="ghost" colorScheme={useColorModeValue("teal", "orange")}>
              Home
            </Button>
          </NavLink>
          <NavLink to="/shop">
            <Button variant="ghost" colorScheme={useColorModeValue("teal", "orange")}>
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