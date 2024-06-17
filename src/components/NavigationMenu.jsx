import { Box, Flex, Button, useColorMode } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
      </Flex>
    </Box>
  );
};

export default NavigationMenu;