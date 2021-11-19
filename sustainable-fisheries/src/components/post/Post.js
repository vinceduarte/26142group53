import "./Post.css"
import logo from '../images/fish.jpg';

console.log(logo);

export default function Post(){
    return(
        <div className="post">
        <img className="postImg" src={logo} alt="Logo" />

            <div className="postInfo">

                <div className="postCategories">
                    <span className="postCategory">Fish</span>
                    <span className="postCategory">Fishing Gear</span>
                </div>
                <span className="postTitle">Testing</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus quis purus ut vehicula. Suspendisse potenti. 
            Vestibulum euismod posuere ante sit amet laoreet. Nullam commodo nulla vel purus viverra, ut rutrum dui venenatis. 
            Suspendisse blandit et erat in rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Aenean augue ex, mollis nec dapibus in, ornare sit amet purus.
           
            
            </p>



        </div>
    )

}
