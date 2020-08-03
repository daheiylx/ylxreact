import React from "react";
import './userList.scss'
import UserAdd from './userAdd.js'
class UserList extends React.Component{
    // 通过props调用父组件方法，设置当前选中的用户
    handleUserClick(userId){
        this.props.onSetCurrentUser(userId);
    }
    render(){
        return (
            <div>
                <ul className = 'user-list'>
                    {
                        this.props.users.map((user)=>{
                            return (
                                <li key={user.id}
                                /*使用不同样式显示当前用户*/
                                    className = {(this.props.currentUserId===user.id)?'current':''}
                                    onClick = {this.handleUserClick.bind(this,user.id)}>
                                    <span>{user.name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 传递UserListContainer的handleAddUser */}
                <UserAdd onAddUser = {this.props.onAddUser}/>
            </div>
            
        )
    }
}
export default UserList;