import "./SinglePost.css"
import logo from '../images/Post2.jpg';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NavBar from '../NavBar/NavBar'
console.log(logo);


export default function SinglePost(){
    return(
        
        <div className="singlePost">
      
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={logo} />

                <h1 className="singlePostTitle">Summer Fishing Trip in the Atlantic
                
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    
                    </div>
                </h1>
                <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>pstaples12</b></span>
                <span className="singlePostDate">Summer 2021</span>
                
                
                </div>
                <p className="singlePostDescription"> 
                I caught this FISHNAME during my summer fishing trip this year. We were so far out but it was so worth it for this big one.
                I thought my rod was going to break, but I finally got it! This is definitely my biggest catch of all time, and it is going in the 
                books as a good one.
                </p>
                
        
            </div>


        </div>
    )

}
