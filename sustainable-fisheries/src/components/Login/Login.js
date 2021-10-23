import React from 'react';
import './Login.css'

export default function Login() {
    return (
        <div className="login-wrapper center">
            <form>
                <div className="input">
                    <label for="username">Username</label>
                    <input id="username" type="text" />
                    <label for="password">Password</label>
                    <input id="password" type="password" />
                </div>
                <div className="button">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>

    );
}