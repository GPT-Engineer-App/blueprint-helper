import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Shop from "./pages/Shop.jsx";
import NavigationMenu from "./components/NavigationMenu.jsx"; // Import the NavigationMenu component

function App() {
  return (
    <Router>
      <NavigationMenu /> {/* Add the NavigationMenu component here */}
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
