import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { Box, Select } from '@chakra-ui/react';

const MapView = ({ businesses }) => {
  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (filter) {
      setFilteredBusinesses(businesses.filter(business => business.category === filter));
    } else {
      setFilteredBusinesses(businesses);
    }
  }, [filter, businesses]);

  return (
    <Box>
      <Select placeholder="Filter by category" onChange={(e) => setFilter(e.target.value)} mb={4}>
        <option value="restaurant">Restaurant</option>
        <option value="shop">Shop</option>
        <option value="service">Service</option>
      </Select>
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
              <em>{business.category}</em>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default MapView;