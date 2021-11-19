import "./SinglePost.css"

import logo from '../fish.jpg';
console.log(logo);


export default function SinglePost(){
    return(
        
        <div className="singlePost">
      
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={logo} />

                <h1 className="singlePostTitle">Test Title
                
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    
                    </div>
                </h1>
                <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Jason Lusk</b></span>
                <span className="singlePostDate">1 hour ago</span>
                
                
                </div>
                <p className="singlePostDescription"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus quis purus ut vehicula. 
                Suspendisse potenti. Vestibulum euismod posuere ante sit amet laoreet. Nullam commodo nulla vel purus viverra, ut rutrum dui venenatis. 
                Suspendisse blandit et erat in rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                Aenean augue ex, mollis nec dapibus in, ornare sit amet purus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus quis purus ut vehicula. 
                Suspendisse potenti. Vestibulum euismod posuere ante sit amet laoreet. Nullam commodo nulla vel purus viverra, ut rutrum dui venenatis. 
                Suspendisse blandit et erat in rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                Aenean augue ex, mollis nec dapibus in, ornare sit amet purus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus quis purus ut vehicula. 
                Suspendisse potenti. Vestibulum euismod posuere ante sit amet laoreet. Nullam commodo nulla vel purus viverra, ut rutrum dui venenatis. 
                Suspendisse blandit et erat in rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                Aenean augue ex, mollis nec dapibus in, ornare sit amet purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus quis purus ut vehicula. 
                Suspendisse potenti. Vestibulum euismod posuere ante sit amet laoreet. Nullam commodo nulla vel purus viverra, ut rutrum dui venenatis. 
                Suspendisse blandit et erat in rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                Aenean augue ex, mollis nec dapibus in, ornare sit amet purus.
                </p>
                
        
            </div>


        </div>
    )

}
