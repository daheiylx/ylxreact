import React , { Component} from "react";
import {Route} from 'react-router-dom';
import Header from "./Header.js";
import PostList from "./PostList.js";
import Post from "./Post.js";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: sessionStorage.getItem("username"),
            ifLogin: sessionStorage.getItem("username")!=null,
        };
        this.handleLogout = this.handleLogout.bind(this);
    }
    // 退出登录
    handleLogout(val){
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("userId");
        this.setState({
            username: '',
            ifLogin: val
        });
        this.props.history.push('/login')
    }
    render (){
        const { match, location} = this.props;
        const { username } = this.state;
        const userId = sessionStorage.getItem('userId')
        return (
            <div>
                <Header 
                    username={username}
                    onLogout={this.handleLogout}
                    location={location}/>
                {/* 帖子列表路由配置 */}
                <Route 
                    path={match.url}
                    exact
                    render={
                    props => <PostList username={username} 
                            userId={userId}
                            {...props} /> 
                }
                />
                {/* 帖子详情路由配置 */}
                <Route
                    path={`${match.url}/:id`}
                    render={props => <Post username={username} {...props} /> }
                />
            </div>
        )
    }
}

export default Home;