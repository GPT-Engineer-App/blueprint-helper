import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Shop from "./pages/Shop.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
