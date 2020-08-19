import React , { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.js";
import "../css/Header.scss"

class Header extends Component {
    render(){
        const { username, onLogout, location } = this.props;
        return (
            <div className="header">
                <div className="nav">
                    <span className="left-link">
                        <Link className="link" to="/">首页</Link>
                    </span>
                    {/* 用户已登录，显示登录用户的信息；否则显示登录按钮 */}
                    {username && username.length > 0 ? (
                        <div className="user">
                            <span> 当前用户:{username}&nbsp;&nbsp;</span>
                            <button onClick={onLogout}>注销</button>
                        </div>
                    ):(
                        <span className="right-link">
                            {/* 通过state属性，保存当前页面的地址 */}
                            <Link className="link" to={{pathname:"/login" , state:  {from: location}}} >
                                登录
                            </Link>
                        </span>
                    )}
                </div>
            </div>
        )
    }
}

export default Header;