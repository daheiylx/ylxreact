import React , { Component } from "react";
import { Link } from "react-router-dom";
import PostsView from './PostsView.js'
import PostEditor from './PostEditor.js';
import "../css/PostList.scss"

class PostList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            newPost: false
        }
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleNewPost = this.handleNewPost.bind(this);
        this.refreshPostList = this.refreshPostList.bind(this);
    }
    componentDidMount() {
        this.refreshPostList();
    }
    // 获取帖子列表
    refreshPostList() {
        // 调用后台API获取列表数据，并将返回的数据设置到state中
        this.setState({
            posts:[
                {
                    id: 1,
                    username: 'ylx',
                    updatedAt: '2020-08-18',
                    vote: 1,
                    title: '前端框架，你最爱哪一个'
                },
                {
                    id: 2,                    
                    username: 'ylx2',
                    updatedAt: '2020-08-17',
                    vote: 2,
                    title:'Web App的时代已经到来'
                },
                {
                    id: 3,                    
                    username: 'ylx3',
                    updatedAt: '2020-08-16',
                    vote: 3,
                    title: '大家一起来讨论React吧'
                }
            ],
            newPost: false
        })
    }

    // 保存帖子
    handleSave(data){
        // 当前登录用户的信息和默认的点赞数，同帖子的标题和内容，共同构成最终待保存的帖子对象
        const postData = { 
            ...data, 
            author:this.props.userId,
            vote:0,
            updatedAt: '2020-08-16',
            username: 'ylx',
            id: this.state.posts.length+1
        };
        this.setState(preState=>({
            posts: preState.posts.concat(postData) // 需要创建新数组
        }))
    }

    // 取消新建帖子
    handleCancel(){
        this.setState({
            newPost: false
        })
    }

    // 新建帖子
    handleNewPost(){
        this.setState({
            newPost: true
        })
    }

    render(){
        const { userId } = this.props;
        return ( 
            <div className="postList">
                <div className="head">
                    <h2>帖子列表</h2>
                    {/* 只有在登录状态，才显示发帖按钮 */}
                    {userId ? <button onClick={this.handleNewPost}>发帖</button>: null}
                </div>
                {/* 若当前正在创建新帖子，则渲染PostEditor组件*/}
                {this.state.newPost ?(
                    <PostEditor onSave={this.handleSave} onCancel={this.handleCancel}/>
                ):null}
                {/* PostsView显示帖子的列表数据 */}
                <PostsView posts={this.state.posts}/>
            </div>
        )
    }
}

export default PostList;