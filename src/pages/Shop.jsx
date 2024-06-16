import { useState, useEffect } from "react";
import { Box, Button, Image, Text, VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch products from backend (mocked here)
    setProducts([
      { id: 1, name: "Product 1", description: "Description for product 1", price: 10, image: "/path/to/image1.jpg" },
      { id: 2, name: "Product 2", description: "Description for product 2", price: 20, image: "/path/to/image2.jpg" },
      // Add more products as needed
    ]);
  }, []);

  const handlePurchase = (details, data) => {
    // Handle the purchase logic here
    console.log("Transaction completed by ", details.payer.name.given_name);
    console.log("Details: ", details);
    console.log("Data: ", data);
  };

  return (
    <Box p={5}>
      <Heading mb={6}>Shop</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src={product.image} alt={product.name} />
            <VStack align="start" mt={4}>
              <Heading size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
              <Text fontWeight="bold">${product.price}</Text>
              <Button onClick={() => setSelectedProduct(product)}>Buy Now</Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      {selectedProduct && (
        <Box mt={10}>
          <Heading size="lg">Checkout</Heading>
          <Text>Product: {selectedProduct.name}</Text>
          <Text>Price: ${selectedProduct.price}</Text>
          <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: selectedProduct.price,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  handlePurchase(details, data);
                });
              }}
            />
          </PayPalScriptProvider>
        </Box>
      )}
    </Box>
  );
};

export default Shop;