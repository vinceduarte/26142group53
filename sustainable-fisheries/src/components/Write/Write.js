import './Write.css'
import logo from '../fish.jpg';
import NavBar from '../NavBar/NavBar'
import Sidebar from '../sidebar/Sidebar'
console.log(logo);

export default function Write(){
    return(

        <div className="write">
        <div className="bar">
        <NavBar/>
        </div>
        <img 
        className="writeImage"
        src={logo} 
        />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-folder-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}></input>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}></input>
            
                </div>
                <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                
                </div>
                <button className="writeSubmit">Post</button>

        
            </form>
            <Sidebar/>
        </div>



    )



}