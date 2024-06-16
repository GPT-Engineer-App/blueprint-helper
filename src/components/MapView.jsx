import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import { Box, Select, VStack, Heading, Checkbox, Input, Button } from '@chakra-ui/react';

const MapView = ({ businesses }) => {
  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);
  const [filter, setFilter] = useState({
    category: '',
    price: '',
    ratings: '',
    distance: '',
    specialOffers: false,
    openNow: false
  });

  useEffect(() => {
    let filtered = businesses;

    if (filter.category) {
      filtered = filtered.filter(business => business.category === filter.category);
    }

    if (filter.price) {
      filtered = filtered.filter(business => business.price === filter.price);
    }

    if (filter.ratings) {
      filtered = filtered.filter(business => business.ratings >= filter.ratings);
    }

    if (filter.distance) {
      filtered = filtered.filter(business => business.distance <= filter.distance);
    }

    if (filter.specialOffers) {
      filtered = filtered.filter(business => business.specialOffers);
    }

    if (filter.openNow) {
      filtered = filtered.filter(business => business.openNow);
    }

    setFilteredBusinesses(filtered);
  }, [filter, businesses]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilter({
      ...filter,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleResetFilters = () => {
    setFilter({
      category: '',
      price: '',
      ratings: '',
      distance: '',
      specialOffers: false,
      openNow: false
    });
  };

  return (
    <Box>
      <Heading mb={4}>Map View</Heading>
      <VStack spacing={4} mb={4}>
        <Select placeholder="Filter by Category" name="category" onChange={handleFilterChange}>
          <option value="restaurant">Restaurant</option>
          <option value="shop">Shop</option>
          <option value="service">Service</option>
        </Select>
        <Select placeholder="Filter by Price" name="price" onChange={handleFilterChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
        <Select placeholder="Filter by Ratings" name="ratings" onChange={handleFilterChange}>
          <option value="1">1 Star & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="4">4 Stars & Up</option>
          <option value="5">5 Stars</option>
        </Select>
        <Input placeholder="Filter by Distance (km)" name="distance" type="number" onChange={handleFilterChange} />
        <Checkbox name="specialOffers" onChange={handleFilterChange}>Special Offers</Checkbox>
        <Checkbox name="openNow" onChange={handleFilterChange}>Open Now</Checkbox>
        <Button onClick={handleResetFilters}>Reset Filters</Button>
      </VStack>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredBusinesses.map((business, index) => (
          <Marker key={index} position={[business.latitude, business.longitude]}>
            <Popup>
              <strong>{business.name}</strong><br />
              {business.description}<br />
              <a href={`mailto:${business.contact}`}>{business.contact}</a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default MapView;