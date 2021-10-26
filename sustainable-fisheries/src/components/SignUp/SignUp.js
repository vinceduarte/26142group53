import React from 'react';
import './SignUp.css'
import logo from '../fish.jpg';
console.log(logo);


export default function SignUp() {
    return (

        <div className="login-wrapper center">
            <img src={logo} alt="Logo" width="200" />
            <form>
                <header id="main-header">
                    <div class="container">
                        <h1>Sustainable Fisheries</h1>
                    </div>
                </header>
                <h2>Create an Account</h2>
                <div className="input">
                    <label for="username">Username</label>
                    <input id="username" type="text" />
                    <label for="username">Password</label>
                    <input id="password" type="text" />
                    <label for="password">Confirm Password</label>
                    <input id="confirmpassword" type="password" />
                </div>
                <div className="button">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div className="route">
                Already have an account? 
                <a className="route-link" href="./login">Login</a>
            </div>
            <footer id="main-footer">
                <p>Copyright &copy; 2021 Sustainable Fisheries</p>
            </footer>
        </div>

    );
}