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
        <Select placeholder="Filter by Category" name="category" onChange={handleFilterChange} value={filter.category}>
          <option value="restaurant">Restaurant</option>
          <option value="shop">Shop</option>
          <option value="service">Service</option>
        </Select>
        <Select placeholder="Filter by Price" name="price" onChange={handleFilterChange} value={filter.price}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
        <Input placeholder="Filter by Ratings" name="ratings" type="number" onChange={handleFilterChange} value={filter.ratings} />
        <Input placeholder="Filter by Distance (km)" name="distance" type="number" onChange={handleFilterChange} value={filter.distance} />
        <Checkbox name="specialOffers" onChange={handleFilterChange} isChecked={filter.specialOffers}>Special Offers</Checkbox>
        <Checkbox name="openNow" onChange={handleFilterChange} isChecked={filter.openNow}>Open Now</Checkbox>
        <Button onClick={handleResetFilters}>Reset Filters</Button>
      </VStack>
      <MapContainer center={[-30.5595, 22.9375]} zoom={13} style={{ height: "500px", width: "100%" }}>
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