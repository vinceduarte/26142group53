import React from 'react';
import './SignUp.css'
import logo from '../fish.jpg';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import { orange, blue } from '@material-ui/core/colors'
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography'
console.log(logo);

const useStyles = makeStyles({
    root: {
        border:0,
        background: 'linear-gradient(45deg, #ec7a28, #6d97b4)',
        borderRadius:15,
        color: 'black',
        padding: '5px 5px',
        marginTop: 15,
        marginBottom: 15

    }
})

const theme = createTheme({
    palette: {
        primary: {
            main: blue[200],
        }
    }
})

function ButtonStyled(){
    const classes = useStyles();
    return <Button className={classes.root}>Submit</Button>
}


export default function SignUp() {
    return (

        <ThemeProvider theme={theme}>
        <div className="login-wrapper center">
            <img src={logo} alt="Logo" width="200" />
            <form action="/user/signup" method="POST">
                <header id="main-header">
                    <div class="container">
                        <h1>Sustainable Fisheries</h1>
                    </div>
                </header>
                <h2>Create an Account</h2>
                <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control"
            placeholder="Enter Email"
            value="<%= typeof email != 'undefined' ? email : '' %>"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            placeholder="Create Password"
            value="<%= typeof password != 'undefined' ? password : '' %>"
          />
        </div>
        <div class="form-group">
          <label for="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            class="form-control"
            placeholder="Confirm Password"
            value="<%= typeof password2 != 'undefined' ? password2 : '' %>"
          />
                </div>
                <div className="button">
                <Button color="primary" type="submit" variant = "contained" size = "small">
                Submit
                </Button>
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

        
        
        
        
        </ThemeProvider>

        
    );
}