import React, { useState, useEffect } from 'react';
import { Box, Button, Image, Text, VStack, Heading, SimpleGrid, Flex, Spacer } from "@chakra-ui/react";
import axios from 'axios';
import { PayPalButton } from 'paypal-checkout-components';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch products from backend (mocked here)
    setProducts([
      { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
    ]);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handlePaymentSuccess = (details, data) => {
    console.log('Payment successful!', details, data);
    // Handle post-payment logic here (e.g., save order to database)
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Shop</Heading>
      <SimpleGrid columns={3} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} p={5} shadow="md" borderWidth="1px">
            <Image src={product.image} alt={product.name} />
            <Heading fontSize="xl">{product.name}</Heading>
            <Text mt={4}>${product.price}</Text>
            <Button mt={4} onClick={() => addToCart(product)}>Add to Cart</Button>
          </Box>
        ))}
      </SimpleGrid>
      <Heading mt={10} mb={4}>Cart</Heading>
      <VStack spacing={4}>
        {cart.map((item, index) => (
          <Flex key={index} w="100%" p={5} shadow="md" borderWidth="1px">
            <Image src={item.image} alt={item.name} boxSize="50px" />
            <Spacer />
            <Text>{item.name}</Text>
            <Spacer />
            <Text>${item.price}</Text>
          </Flex>
        ))}
      </VStack>
      {cart.length > 0 && (
        <Box mt={10}>
          <PayPalButton
            amount={cart.reduce((total, item) => total + item.price, 0)}
            onSuccess={handlePaymentSuccess}
            options={{
              clientId: 'YOUR_PAYPAL_CLIENT_ID'
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shop;