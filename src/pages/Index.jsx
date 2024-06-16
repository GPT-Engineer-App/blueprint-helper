import { Container, Text, VStack, Box, Heading, SimpleGrid, Flex, Spacer, Button, Image, Input, Textarea, Select, Checkbox } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [businesses, setBusinesses] = useState([]);
  const [newBusiness, setNewBusiness] = useState({
    logo: "",
    image: "",
    name: "",
    description: "",
    contact: "",
    category: ""
  });

  const [filters, setFilters] = useState({
    category: "",
    price: "",
    ratings: "",
    distance: "",
    specialOffers: false,
    openNow: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBusiness({ ...newBusiness, [name]: value });
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleAddBusiness = () => {
    setBusinesses([...businesses, newBusiness]);
    setNewBusiness({
      logo: "",
      image: "",
      name: "",
      description: "",
      contact: "",
      category: ""
    });
  };

  const filterBusinesses = (businesses) => {
    return businesses.filter(business => {
      return (
        (filters.category ? business.category === filters.category : true) &&
        (filters.price ? business.price === filters.price : true) &&
        (filters.ratings ? business.ratings >= filters.ratings : true) &&
        (filters.distance ? business.distance <= filters.distance : true) &&
        (filters.specialOffers ? business.specialOffers === filters.specialOffers : true) &&
        (filters.openNow ? business.openNow === filters.openNow : true)
      );
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
          <Button onClick={handleAddBusiness} mt={4}>Add Business</Button>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Filters</Heading>
          <Select placeholder="Select Category" name="category" value={filters.category} onChange={handleFilterChange} mt={4}>
            <option value="restaurant">Restaurant</option>
            <option value="shop">Shop</option>
            <option value="service">Service</option>
          </Select>
          <Input placeholder="Price" name="price" value={filters.price} onChange={handleFilterChange} mt={4} />
          <Input placeholder="Ratings" name="ratings" value={filters.ratings} onChange={handleFilterChange} mt={4} />
          <Input placeholder="Distance" name="distance" value={filters.distance} onChange={handleFilterChange} mt={4} />
          <Checkbox name="specialOffers" isChecked={filters.specialOffers} onChange={handleFilterChange} mt={4}>Special Offers</Checkbox>
          <Checkbox name="openNow" isChecked={filters.openNow} onChange={handleFilterChange} mt={4}>Open Now</Checkbox>
        </Box>

        {filterBusinesses(businesses).map((business, index) => (
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