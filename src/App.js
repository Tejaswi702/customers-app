import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

import Login from "./components/Login";
import Signup from "./components/SignUp";
import CustomerDetails from "./components/CustomersDetails";
import ForgotPassword from "./components/ForgotPassword";
import Services from "./components/Services";
import ResetPassword from "./components/ResetPassword";

function AppRoutes() {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(() => {
      setChecking(false);
    });
  }, []);

  if (checking) return <p>Loading...</p>;

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/customer-details" element={<CustomerDetails />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
