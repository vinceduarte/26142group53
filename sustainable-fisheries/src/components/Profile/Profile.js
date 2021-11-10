import React from 'react';
import './Profile.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

export default function Profile() {
    return (
        <div>
        <AppBar>
        <ToolBar>


        <IconButton>
        <MenuIcon />
        </IconButton>

            <h2>
            Sustainable Fisheries
            </h2>
            <Button href="./home">
            Home
            </Button>
            <Button href="./Profile">
            Edit Profile
            </Button>
        </ToolBar>



    </AppBar>
   
        


        </div>
        



       
    );
}