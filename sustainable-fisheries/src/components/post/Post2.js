import "./Post.css"
import logo from '../images/Post2.jpg';

console.log(logo);

export default function Post(){
    return(
        <div className="post">
        <img className="postImg" src={logo} alt="Logo" />

            <div className="postInfo">

                <div className="postCategories">
                <span className="postCategory">Caught Fish</span>
                </div>
                <span className="postTitle">
                <a href="../post/2" >Grouper from Summer Fishing Trip in the Atlantic </a></span>
                <hr/>
                <span className="postDate">Summer 2021</span>
            </div>
            <p className="postDescription">
            I caught this FISHNAME during my summer fishing trip this year. We were so far out but it was so worth it for this big one.
            I thought my rod was going to break, but I finally got it! This is definitely my biggest catch of all time, and it is going in the 
            books as a good one.
           
            
            </p>



        </div>
    )

}
