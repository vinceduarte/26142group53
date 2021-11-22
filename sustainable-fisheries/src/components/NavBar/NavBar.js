import './NavBar.css'
import React, { Redirect } from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircle from '@material-ui/icons/AccountCircle'
import CreateIcon from '@material-ui/icons/Create'
import ExitToApp from '@material-ui/icons/ExitToApp'

async function logoutUser() {
    localStorage.removeItem('token');
    sessionStorage.clear();
}

export default function NavBar() {
    return (
        <AppBar position="static">
            <ToolBar>
                <IconButton href="./" color="inherit">
                    <MenuIcon />

                </IconButton>
                <h2 className="NavBar">
                    Sustainable Fisheries
                </h2>
                <IconButton classname="icons" href="../home" edge="end" size="large" color="inherit">
                    <HomeIcon />
                </IconButton>
                <IconButton classname="icons" href="../profile" edge="end" size="large" color="inherit" edge="end">
                    <AccountCircle />
                </IconButton>
                <IconButton classname="icons" href="../write" edge="end" size="large" color="inherit" edge="end">
                    <CreateIcon />
                </IconButton>
                <IconButton classname="icons" href="../" edge="end" size="large" color="inherit" edge="end" onClick={(e) => logoutUser()}>
                    <ExitToApp />
                </IconButton>
            </ToolBar>
        </AppBar>




    )



}