import React from 'react';
import './SignUp.css'
import logo from '../fish.jpg';
console.log(logo);


export default function SignUp() {
    return (
       
        <div className="login-wrapper center">
        <img src={logo} alt="Logo" width="200"/>
        
      
            <form>
            <header id="main-header">
            <div class="container">
            <h1>Sustainable Fisheries</h1>
            </div>
            
            </header>
            <h1 id="sign-in">Sign Up: </h1>
                <div className="input">
                    <label for="username">Username:</label>
                    <input id="username" type="text" />
                    <label for="username">Confirm Username:</label>
                    <input id="username" type="text" />
                    <label for="password">Password:</label>
                    <input id="password" type="password" />
                </div>
                <div className="button">
                    <button type="submit">Submit</button>
                </div>
                Already have an account? Log in:
                <div className="button">
                    <button type="submit">Log In</button>
                </div>
                Forgot Password?
                <div className="button">
                    <button type="submit">Forgot Password</button>
                </div>
            </form>

            <footer id="main-footer">
            <p>Copyright &copy; 2021 Sustainable Fisheries</p>
            </footer>
        </div>
        
       

    );
}