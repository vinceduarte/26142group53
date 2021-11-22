import "./SinglePost.css"
import logo from '../images/Post2.jpg';
console.log(logo);


export default function SinglePost() {
    return (

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus quis purus ut vehicula. Suspendisse potenti.
                    Vestibulum euismod posuere ante sit amet laoreet. Nullam commodo nulla vel purus viverra, ut rutrum dui venenatis.
                    Suspendisse blandit et erat in rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Aenean augue ex, mollis nec dapibus in, ornare sit amet purus.
                </p>


            </div>


        </div>
    )

}
