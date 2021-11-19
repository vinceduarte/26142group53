import React from 'react';
import './SignUp.css'
import logo from '../images/fish.jpg';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import { orange, blue } from '@material-ui/core/colors'


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
            <form>
                <header id="main-header">
                    <div class="container">
                        <h1>Sustainable Fisheries</h1>
                    </div>
                </header>
                <h2>Create an Account</h2>
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
                <TextField
                varaint="filled"
                color="secondary"
                type="password"
                label="Confirm Password:"        
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