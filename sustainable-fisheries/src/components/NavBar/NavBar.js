import './NavBar.css'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircle from '@material-ui/icons/AccountCircle'
import CreateIcon from '@material-ui/icons/Create'
import ExitToApp from '@material-ui/icons/ExitToApp'


export default function NavBar(){
    return(
        <AppBar position="static">
        <ToolBar>
            <IconButton  href="./login" color="inherit">
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
                    <IconButton classname="icons"  edge="end" size="large" color="inherit" edge="end">
                        <ExitToApp />
                    </IconButton>
        </ToolBar>
    </AppBar>




    )



}