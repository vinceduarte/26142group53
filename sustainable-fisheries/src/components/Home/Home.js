import React from 'react';
import Posts from '../posts/Posts'
import Sidebar from '../sidebar/Sidebar'
import Write from '../Write/Write'
import './Home.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


import AppBar from '@material-ui/core/AppBar'
import NavBar from '../NavBar/NavBar'
import Profile from '../Profile/Profile'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircle from '@material-ui/icons/AccountCircle'


export default function Home() {
    return (
        <div className="navbar">

    <NavBar/>

    
       
        
        <Posts/>
        <Sidebar/>
        
        

        </div>

        
    );
}