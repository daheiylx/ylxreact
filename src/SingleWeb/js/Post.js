import React, { Component }  from "react";
import PostEditor from "./PostEditor.js";
import PostView from "./PostView.js"
import "../css/Post.scss"
import CommentList from "./CommentList.js"
class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            post: null,
            comments: [],
            editing: false
        };
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handlePostSave = this.handlePostSave.bind(this);
        this.handlePostCancel = this.handlePostCancel.bind(this);
        this.refreshComments = this.refreshComments.bind(this);
        this.refreshPost = this.refreshPost.bind(this);
    }
    componentDidMount() {
        this.refreshComments();
        this.refreshPost();
    }

    // 获取帖子详情
    refreshPost() {
        const postId = this.props.match.params.id;
        console.log(postId);
        this.setState({
            post: {
                id: 3,                    
                username: 'ylx3',
                updatedAt: '2020-08-16',
                vote: 3,
                title: '大家一起来讨论React吧',
                content: '前端的复杂化，其本质问题是如何将来源于服务端的动态数据和用户的交互行为高效的反映到复杂的用户界面上。React另辟蹊径，通过引入虚拟DOM、状态、单向数据流等设计理念'
            }
        })
    }
    // 获取评论列表
    refreshComments(){
        const postId = this.props.match.params.id;
        this.setState({
            comments: [
                {
                    id: 1,
                    username: 'ylx',
                    content:'大爱react',
                    updatedAt: '2020-08-09'
                },
                {
                    id: 2,
                    username: 'ylx',
                    content:'大爱react',
                    updatedAt: '2020-08-09'
                },
                {
                    id: 3,
                    username: 'ylx',
                    content:'大爱react',
                    updatedAt: '2020-08-09'
                }
            ]
        })
    }

    // 让帖子处于编辑态
    handleEditClick() {
        this.setState({
            editing: true
        })
    }

    // 保存帖子
    handlePostSave(data) {
        const id = this.props.match.params.id;
        this.savePost(id,data);
    }

    // 取消编辑帖子
    handlePostCancel() {
        this.setState({
            editing: false
        })
    }

    // 提交新建的评论
    handleCommentSubmit(content) {
        const postId = this.props.match.params.id;
        const comment = {
            author: this.props.userId,
            post: postId,
            content: content,
            id: this.state.comments.length+1,
            updatedAt: '2020-08-21',
            username: sessionStorage.getItem("username")
        };
        this.saveComment(comment);
    }
    
    // 保存新的评论到服务器
    saveComment(comment) {
        this.setState(preps=>({
            comments: preps.comments.concat(comment)
        }))
    }

    // 同步帖子的修改到服务器
    savePost(id, post) {
        this.setState({
            post: post,
            editing: false
        })
    }
    render(){
        const { post, comments , editing } = this.state;
        const { userId } = this.props;
        if(!post) {
            return null
        }
        const editable = userId === post.id
        return (
            <div className="post">
                {
                    editing ? (
                        <PostEditor 
                            post={post}
                            onSave={this.handlePostSave}
                            onCancel={this.handlePostCancel}
                        />
                    ) : (
                        <PostView
                            post={post}
                            editable={editable}
                            onEditClick={this.handleEditClick}
                        />
                    )
                }
                <CommentList
                    comments={comments}
                    editable={Boolean(userId)}
                    onSubmit={this.handleCommentSubmit}
                />        
            </div>
        )
    }
}

export default Post; 