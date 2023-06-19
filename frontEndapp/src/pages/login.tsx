import * as React from "react";
import "../style/login.css";
import AuthService from "../services/auth";
import { useAuth } from "../App"; // Import AuthProvider from the App file
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const { signin } = useAuth();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = await AuthService.login(username, password);
      console.log("Logged in User:", user);
      signin(username, () => {
        // Handle successful login
      });
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <main className="login">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter email"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="submit">
          Sign in
        </button>
        <p className="signup-link">
          No account? <Link to="/signup">Register</Link>
        </p>
      </form>
    </main>
  );
}

export default Login;
