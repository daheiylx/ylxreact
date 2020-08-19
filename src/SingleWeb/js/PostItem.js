import "../css/PostItem.scss";                              
import React  from "react";
import like from '../img/vote.svg'
function PostItem(props){
    const {post} = props
    return (
        <li className="postItem">
            <div className="title">{post.title}</div>
            <div>
                创建人：<span>{post.username}</span>
            </div>
            <div>
                更新时间：<span>{post.updatedAt}</span>
            </div>
            <div className="like">
                <span>
                    <img alt="vote" src={like}/>
                </span>
                <span>{post.vote}</span>
            </div>
        </li>
    )
    
}

export default PostItem; 