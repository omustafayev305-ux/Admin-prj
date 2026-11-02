import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Product"
import Orders from "./pages/Orders"
import Coustomers from "./pages/Coustomers";
import Reviews from "./pages/Reviews";
import Settings from "./pages/Settings";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/coustomers" element={<Coustomers/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
  );
}

export default App;