import React, { useState } from 'react';
import logo from '../fish.jpg';
import './Login.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import { orange, blue } from '@material-ui/core/colors'
import PropTypes from 'prop-types';


console.log(logo);


const useStyles = makeStyles({
    root: {
        border: 0,
        background: 'linear-gradient(45deg, #ec7a28, #6d97b4)',
        borderRadius: 15,
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

function ButtonStyled() {
    const classes = useStyles();
    return <Button className={classes.root}>Submit</Button>
}

async function loginUser(credentials) {
    return fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .catch(error => {
            console.error("Error fetching data: ", error)
        })
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        if (token) {
            setToken(token);
            //sessionStorage.setItem("token", token);
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <div className="login-wrapper center">
                <img src={logo} alt="Logo" width="200" />
                <form onSubmit={handleSubmit}>
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
                            onChange={e => setUserName(e.target.value)}
                        />


                        <TextField
                            varaint="filled"
                            color="secondary"
                            type="password"
                            label="Password:"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <a href="./forgotpassword">Forgot Password?</a>


                    <div className="button">
                        <Button color="primary" type="submit" variant="contained" size="small" padding="8px">
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}