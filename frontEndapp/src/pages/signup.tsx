import React from "react";
//css
import "../style/login.css";
//components 

function Login () {
    // If user is logged in, redirect to home page.
    // If user is not logged in, display login form.
    // If user is not regged in, display register form.

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isRegistering, setIsRegistering] = React.useState(false);
    const [isLoggingIn, setIsLoggingIn] = React.useState(false);

    return (
    <>
        <form className="form">
            <p className="form-title">Create your account</p>
            <div className="input-container">
                <input type="text" placeholder="Enter Name"/>
                <span>
                </span>
            </div>
            <div className="input-container">
                <input type="email" placeholder="Enter email"/>
                <span>
                </span>
            </div>
            <div className="input-container">
                <input type="password" placeholder="Enter password"/>
            </div>
            <button type="submit" className="submit">
                Sign in
            </button>

            <p className="signup-link">
                Already have an account?
                <a href="">Sign in</a>
            </p>
        </form>
    </>
    );
}

export default Login;