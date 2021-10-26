import React from 'react';
import './Forgot.css'
import logo from '../fish.jpg';
console.log(logo);


export default function Forgot() {
    return (

        <div className="login-wrapper center">
            <img src={logo} alt="Logo" width="200" />
            <form>
                <header id="main-header">
                    <div class="container">
                        <h1>Sustainable Fisheries</h1>
                    </div>

                </header>
                <h2>Forgot password?</h2>
                <div className="input">
                    <label for="username">Username</label>
                    <input id="username" type="text" />
                </div>
                <div className="button">
                    <button type="submit">Submit</button>
                </div>
            </form>
            Don't have an account?
            <a href="./signup">Sign Up</a>
            Return to
            <a href="./login">Login</a>
            <footer id="main-footer">
                <p>Copyright &copy; 2021 Sustainable Fisheries</p>
            </footer>
        </div>
        
    );
}