import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Inventory from "./screens/Inventory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  );
}

export default App;
