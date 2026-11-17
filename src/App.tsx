import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Product"
import Orders from "./pages/Orders"
import Customers from "./pages/Coustomers";
import Reviews from "./pages/Reviews";
import Settings from "./pages/Settings";
import AddProduct from "./pages/AddProduct";
import ProductDetails from './pages/ProductDetails';
import Posts from "./pages/Posts"
import Todos from "./pages/Todos";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/products/add" element={<AddProduct />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  );
}

export default App;
