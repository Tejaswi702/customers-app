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
      navigate("/services");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Customer Login</h2>

        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-button" onClick={handleLogin}>
          Login
        </button>

        {/* 🔹 Forgot Password */}
        <p
          className="auth-link"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </p>

        {/* 🔹 Signup */}
        <p className="auth-link">
          New account?{" "}
          <span onClick={() => navigate("/signup")}>Signup</span>
        </p>

        {/* 🔹 Partner login */}
        <p
          className="auth-link"
          onClick={() => navigate("/partner-login")}
        >
          Login as Partner
        </p>
      </div>
    </div>
  );
}

export default Login;
