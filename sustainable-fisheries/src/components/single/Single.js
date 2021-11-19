import Sidebar from "../sidebar/Sidebar"
import SinglePost from "../SinglePost/SinglePost"
import NavBar from '../NavBar/NavBar'
import "./Single.css"

export default function Single(){
    return(
        
        <div>
        
        <NavBar/>

        <div className="single">
        <SinglePost/>
        <Sidebar/>




        </div>
        
        

        </div>




    )


}