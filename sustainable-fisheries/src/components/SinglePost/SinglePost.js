import "./SinglePost.css"
import logo from '../images/Post2.jpg';
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
