import React, { Component }  from "react";
import "../css/CommentsView.scss"

class CommentsView extends Component {
    render() {
        const { comments } = this.props;
        return (
            <ul className="commentsView">
                {
                    comments.map(item=>{
                        return (
                            <li key={item.id}>
                                <div className="title">{item.content}</div>
                                <div className="sub">
                                    <span>{item.username}</span>
                                    <span>.</span>
                                    <span>{item.updatedAt}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default CommentsView;