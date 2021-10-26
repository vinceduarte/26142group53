import React from 'react';
import './Forgot.css'
import logo from '../fish.jpg';
console.log(logo);


export default function Forgot() {
    return (
       
        <div className="login-wrapper center">
        <img src={logo} alt="Logo" width="200"/>
            
      
            <form>
            <header id="main-header">
            <div class="container">
            <h1>Sustainable Fisheries</h1>
            </div>
            
            </header>
            <h1 id="forgot-password">Forgot Password? </h1>
                <div className="input">
                    <label for="username">Username:</label>
                    <input id="username" type="text" />
                </div>
                <div className="button">
                    <button type="submit">Submit</button>
                </div>
                Don't have an account? Sign Up:
                <div className="button">
                    <button type="submit">Sign Up</button>
                </div>
                Log In
                <div className="button">
                    <button type="submit">Log In</button>
                </div>
            </form>

            
        </div>
        
       

    );
}