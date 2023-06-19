import * as React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth";
import { Link } from "react-router-dom";
//css
import "../style/login.css";
//components 

function SignUp () {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleNameChange = (event: { target: { value: any; }; }) => {
        setName(event.target.value);
      };
      
      const handleEmailChange = (event: { target: { value: any; }; }) => {
        setEmail(event.target.value);
      };
      
      const handlePasswordChange = (event: { target: { value: any; }; }) => {
        setPassword(event.target.value);
      };

        const history = useNavigate();
      const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
      
        try {
          const user = await AuthService.registerUser(name, email, password);
          console.log('Registered User:', user);
          history('/login'); // Redirect to the login page
          // Optionally, you can redirect to a different page after successful registration
        } catch (error) {
          console.error('Registration error:', error);
          history('/login'); // Redirect to the login page
          
          // Handle the registration error, such as displaying an error message
        }
      };
      
      return (
        <>
          <form className="form" onSubmit={handleSubmit}>
            <p className="form-title">Create your account</p>
            <div className="input-container">
              <input type="text" placeholder="Enter Name" value={name} onChange={handleNameChange} />
              <span></span>
            </div>
            <div className="input-container">
              <input type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
              <span></span>
            </div>
            <div className="input-container">
              <input type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit" className="submit">
              Sign in
            </button>
      
            <p className="signup-link">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </form>
        </>
      );
      
}

export default SignUp;