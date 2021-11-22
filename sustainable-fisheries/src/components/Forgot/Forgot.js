import React from 'react';
import './Forgot.css'
import logo from '../images/fish.jpg';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
console.log(logo);

// const useStyles = makeStyles({
//     root: {
//         border:0,
//         background: 'linear-gradient(45deg, #ec7a28, #6d97b4)',
//         borderRadius:15,
//         color: 'black',
//         padding: '5px 5px',
//         marginTop: 15,
//         marginBottom: 15

//     }
// })

const theme = createTheme({
    palette: {
        primary: {
            main: blue[200],
        }
    }
})

// function ButtonStyled(){
//     const classes = useStyles();
//     return <Button className={classes.root}>Submit</Button>
// }


export default function Forgot() {
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
                <h2>Forgot Password?</h2>
                <div className="input">
                <TextField
                varaint="filled"
                color="secondary"
                type="username"
                label="Username:"        
                />
                </div>
                <div className="button">
                <Button color="primary" type="submit" variant = "contained" size = "small">
                Submit
                </Button>
                </div>
            </form>
            <div className="route">
                Don't have an account?
                <a className="route-link" href="./signup">Sign Up</a>
            </div>
            <div className="route">
                Return to
                <a className="route-link" href="./">Login</a>
            </div>
            <footer id="main-footer">
                <p>Copyright &copy; 2021 Sustainable Fisheries</p>
            </footer>
        </div>
        </ThemeProvider>

    );
}