import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Shop from "./pages/Shop.jsx";
import Navigation from "./components/Navigation.jsx"; // Import the Navigation component

function App() {
  return (
    <Router>
      <Navigation /> {/* Add the Navigation component here */}
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
