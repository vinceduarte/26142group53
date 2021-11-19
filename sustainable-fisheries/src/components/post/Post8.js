import "./Post.css"
import logo from '../images/Post8.jpg';

console.log(logo);

export default function Post(){
    return(
        <div className="post">
        <img className="postImg" src={logo} alt="Logo" />

            <div className="postInfo">

                <div className="postCategories">
                <span className="postCategory">Caught Fish</span>

                </div>
                <span className="postTitle"><a href="">Shovel nose shark in St. Johns River</a></span>
                <hr/>
                <span className="postDate">Summer 2019</span>
            </div>
            <p className="postDescription">
            I caught a shovel nose shark here. This was my first time even seeing a shark in real life, so it was pretty cool.
           
            
            </p>



        </div>
    )

}
