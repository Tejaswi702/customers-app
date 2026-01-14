import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

function CustomerDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const userId = state?.userId;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    const { error } = await supabase.from("customers").insert({
      id: userId,
      first_name: firstName,
      last_name: lastName,
      address,
      phone,
    });

    if (error) {
      alert(error.message);
    } else {
      navigate("/services"); // ✅ REDIRECT
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Customer Details</h2>

        <input className="auth-input" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
        <input className="auth-input" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
        <input className="auth-input" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
        <input className="auth-input" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />

        <button className="auth-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CustomerDetails;
