import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cards from "./pages/Cards";
import Marketplace from "./pages/Marketplace";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
import PaymentMethods from "./pages/PaymentMethods";
import PrivacyPolicy from "./pages/PrivacyPolicy";
