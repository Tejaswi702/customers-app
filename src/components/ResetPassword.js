import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        alert("Invalid or expired reset link");
        navigate("/");
        return;
      }

      setLoading(false);
    };

    init();
  }, [navigate]);

  const handleUpdatePassword = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      alert(error.message);
    } else {
      alert("Password updated successfully");
      await supabase.auth.signOut();
      navigate("/");
    }
  };

  if (loading) {
    return <p>Verifying reset link...</p>;
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Reset Password</h2>

        <input
          className="auth-input"
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="auth-button" onClick={handleUpdatePassword}>
          Update Password
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
