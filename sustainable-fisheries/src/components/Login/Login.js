import React from 'react';
import logo from '../images/fish.jpg';
import './Login.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import { orange, blue } from '@material-ui/core/colors'


import Typography from '@material-ui/core/Typography'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


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

export default function Login() {
    return (
        <ThemeProvider theme={theme}>
        
        
        
        <div className="login-wrapper center">
            <img src={logo} alt="Logo" width="200" />
            <form>
                <header id="main-header">
                    <div class="container">
                        <h1>Sustainable Fisheries</h1>
                    </div>
                </header>
                <h2>Welcome Back!</h2>
                <div className="input">
                <TextField
                varaint="filled"
                color="secondary"
                type="username"
                label="Username:"

                
                />


                <TextField
                varaint="filled"
                color="secondary"
                type="password"
                label="Password:"

                
                />
                </div>
                <a href="./forgotpassword">Forgot Password?</a>


                <div className="button">
                    <Button color="primary" type="submit" variant = "contained" size = "small" padding="8px">
                Submit
                </Button>
                </div>
            </form>
            <div className="route">
                Don't have an account?
                <a className="route-link" href="./signup">Sign Up</a>
            </div>
            <footer id="main-footer">
                <p>Copyright &copy; 2021 Sustainable Fisheries</p>
            </footer>
        </div>
        </ThemeProvider>

    );
}