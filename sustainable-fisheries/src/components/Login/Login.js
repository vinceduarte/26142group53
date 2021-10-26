import React from 'react';
import logo from '../fish.jpg';
import './Login.css'

console.log(logo);

export default function Login() {
    return (

        <div className="login-wrapper center">
            <img src={logo} alt="Logo" width="200" />
            <form>
                <header id="main-header">
                    <div class="container">
                        <h1>Sustainable Fisheries</h1>
                    </div>
                </header>
                <h2>Welcome back!</h2>
                <div className="input">
                    <label for="username">Username</label>
                    <input id="username" type="text" />
                    <label for="password">Password</label>
                    <input id="password" type="password" />
                </div>
                <a href="./forgotpassword">Forgot Password?</a>
                <div className="button">
                    <button type="submit">Submit</button>
                </div>
            </form>
            Don't have an account?
            <a href="./signup">Sign Up</a>
            <footer id="main-footer">
                <p>Copyright &copy; 2021 Sustainable Fisheries</p>
            </footer>
        </div>

    );
}