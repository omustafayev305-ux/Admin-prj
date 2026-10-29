import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Product"
import Orders from "./pages/Orders"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/orders" element={<Orders/>}/>
    </Routes>
  );
}

export default App;