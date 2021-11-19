import "./Post.css"
import logo from '../images/Post1.jpg';

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
                <a href="">
                My First Bass in my Jacksonville Neighborhood
                </a></span>

                
                <hr/>
                <span className="postDate">A week ago</span>
            </div>
            <p className="postDescription">
            I caught this bass at my neighborhood pond. It took me a while, but after a couple bites it finally
            popped up. I will never forget this moment!
           
            
            </p>



        </div>
    )

}
