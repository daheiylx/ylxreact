import React , { Component } from "react";
import "../css/PostView.scss";
import like from '../img/vote.svg'
class PostView extends Component{
    render() {
        const { post } = this.props;
        console.log(post)
        return (
            <div className="p_view">
                <h1 className="h_view">{post.title}</h1>
                <div>
                    <span>{post.username}</span> . 
                    <span>{post.updatedAt}</span> . 
                    <button onClick={this.props.onEditClick}>编辑</button>
                </div>
                <div className="content">{post.content}</div>
                <div className="like">
                <span>
                    <img alt="vote" src={like}/>
                </span>
                <span>{post.vote}</span>
            </div>
            </div>
        )
    }
}

export default PostView;