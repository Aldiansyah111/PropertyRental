// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Register from './pages/register';
import PropertyRental from "./pages/PropertyRental";
import CreateProperty from "./pages/CreateProperty";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rental/:id" element={<PropertyRental />} />
        <Route path="/create" element={<CreateProperty />} />
      </Routes>
    </Layout>
  );
}
