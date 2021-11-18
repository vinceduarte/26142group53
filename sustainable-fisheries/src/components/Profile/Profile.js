import './Profile.css'
import Sidebar from '../sidebar/Sidebar'
import NavBar from '../NavBar/NavBar'
import logo from '../fish.jpg';
console.log(logo);




export default function Profile() {
    return (

        
        
        <div className="profile">
       
        
            <div className="profileWrapper">
            <div className = "bar">
            <NavBar/>
            </div>
                <div className="profileTitle">
                    <span className="profileUpdateTitle">Update your profile</span>
                    <span className="profileDeleteTitle">Delete your profile</span>
                </div>
                <form className="profileForm">
                    <label>Profile Picture</label>
                    <div className="profilePicture">
                    <img 
                    src={logo} 
                    />
                    <label htmlFor="fileInput">
                        <i className="profilePictureIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}></input>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Jason"></input>
                    <label>Email</label>
                    <input type="email" placeholder="Jason@gmail.com"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button className="profileSubmit">Update</button>


                </form>


                </div>
            <Sidebar/>
            
     
   
        


        </div>
        



       
    );
}