import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
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
        <h2 className="auth-title">Customer Login</h2>

        <input className="auth-input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="auth-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <button className="auth-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
