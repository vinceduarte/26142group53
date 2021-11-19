import './Profile.css'
import Sidebar from '../sidebar/Sidebar'
import NavBar from '../NavBar/NavBar'
import logo from '../fish.jpg';
console.log(logo);

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
