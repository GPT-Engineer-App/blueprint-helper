import { Container, Text, VStack, Box, Heading, SimpleGrid, Flex, Spacer, Button, Image, Input, Textarea, Select } from "@chakra-ui/react";
import { useState } from "react";
import MapView from "../components/MapView.jsx";

const Index = () => {
  const [businesses, setBusinesses] = useState([]);
  const [newBusiness, setNewBusiness] = useState({
    logo: "",
    image: "",
    name: "",
    description: "",
    contact: "",
    category: "",
    latitude: "",
    longitude: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBusiness({ ...newBusiness, [name]: value });
  };

  const handleAddBusiness = () => {
    setBusinesses([...businesses, newBusiness]);
    setNewBusiness({
      logo: "",
      image: "",
      name: "",
      description: "",
      contact: "",
      category: "",
      latitude: "",
      longitude: ""
    });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Add New Business</Heading>
          <Input placeholder="Logo URL" name="logo" value={newBusiness.logo} onChange={handleInputChange} mt={4} />
          <Input placeholder="Image URL" name="image" value={newBusiness.image} onChange={handleInputChange} mt={4} />
          <Input placeholder="Business Name" name="name" value={newBusiness.name} onChange={handleInputChange} mt={4} />
          <Textarea placeholder="Description" name="description" value={newBusiness.description} onChange={handleInputChange} mt={4} />
          <Input placeholder="Contact Details" name="contact" value={newBusiness.contact} onChange={handleInputChange} mt={4} />
          <Select placeholder="Select Category" name="category" value={newBusiness.category} onChange={handleInputChange} mt={4}>
            <option value="restaurant">Restaurant</option>
            <option value="shop">Shop</option>
            <option value="service">Service</option>
          </Select>
          <Input placeholder="Latitude" name="latitude" value={newBusiness.latitude} onChange={handleInputChange} mt={4} />
          <Input placeholder="Longitude" name="longitude" value={newBusiness.longitude} onChange={handleInputChange} mt={4} />
          <Button onClick={handleAddBusiness} mt={4}>Add Business</Button>
        </Box>

        <MapView businesses={businesses} />

        {businesses.map((business, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Flex>
              <Image src={business.logo} alt={`${business.name} logo`} boxSize="50px" />
              <Spacer />
              <Image src={business.image} alt={`${business.name}`} boxSize="100px" />
            </Flex>
            <Heading fontSize="xl" mt={4}>{business.name}</Heading>
            <Text mt={4}>{business.description}</Text>
            <Text mt={4}><b>Contact:</b> {business.contact}</Text>
            <Text mt={4}><b>Category:</b> {business.category}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;