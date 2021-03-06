import React , { Component} from "react";
import { Redirect } from "react-router-dom";
// import { post } from "../utils/request";
// import url from "../utils/url";
import "../css/Login.css";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            redirectToReferrer: false // 是否重定向到之前的页面
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // 处理用户名、密码的变化
    handleChange(e) {
        if(e.target.name === "username") {
            this.setState(
                {
                    username: e.target.value
                }
            );
        } else if (e.target.name === "password") {
            this.setState(
                {
                    password: e.target.value
                }
            );
        } else {
            // do nothing
        }
    }
    // 提交登录表单
    handleSubmit(e) {
        e.preventDefault(); // 阻止默认操作
        const username = this.state.username;
        const password = this.state.password;
        if(username.length === 0 || password.length === 0){
            alert("用户名或密码不能为空！");
            return;
        }
        // 保存登录信息到sessionStorage
        sessionStorage.setItem("userId", '1');
        sessionStorage.setItem("username", this.state.username)
        // 假设登录成功后，设置redirectToReferrer为true
        this.setState({
            redirectToReferrer: true
        })
    }

    render() {
        // from 保存跳转到登录页前的页面路径，用于在登录成功后重定向原来的页面
        const { from } = (this.props.location && this.props.location.state) || {from: { pathname:"/" }};
        const { redirectToReferrer } = this.state;
        // 登录成功后，redirectToReferrer为true，使用Redirect组件重定向页面
        if (redirectToReferrer) {
            return <Redirect to={from} />
        }
        return (
            <form className='login' onSubmit={this.handleSubmit}>
                <h3>用户登录</h3>
                <ul>
                    <li>
                        <label>用户名：</label>
                        <input 
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}/>
                    </li>
                    <li>
                        <label>密码：</label>
                        <input 
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}/>
                    </li>
                </ul>
                <input className="login-btn" type="submit" value="登录"/>
            </form> 
        )
    }
}

export default Login;