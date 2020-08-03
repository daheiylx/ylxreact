import UserList from './userList.js'
import UserDetail from './userDetail.js'
import React  from "react";

class UserListContainer extends React.Component{
     
    constructor(props){
        super(props);
        this.state = {
            users:[],
            currentUserId:null
        }
        this.handleAdduser = this.handleAdduser.bind(this);
        this.handleSetCurrentUser = this.handleSetCurrentUser.bind(this);
    }

    componentDidMount(){
        let that = this;
        that.setState({
            users:[
                {
                    id:1,
                    name:'张三',
                    age:12,
                    phone:'13768666656',
                    address:'12号'
                },
                {
                    id:2,
                    name:'张三2',
                    age:13,
                    phone:'137686666564',
                    address:'123号'
                }
            ]
        })
    }

    // 新增用户
    handleAdduser(user){
        let that = this;
        that.setState((preState)=>({
            users:preState.users.concat([{
                id:3,
                name:'张三3',
                age:14,
                phone:'13768666616',
                address:'14号'
            }])
        }))
    }

    // 设置选中的用户
    handleSetCurrentUser(userId){
        this.setState({
            currentUserId: userId
        });
    }
    
    render(){
        // 根据currentUserId,筛选出当前用户对象
        let currentUser = ''
        this.state.users.forEach((user)=>{
            if(user.id === this.state.currentUserId){
                currentUser = user
                return ;
            }
        });
        return (
            <div>
                <UserList 
                    users={this.state.users}
                    currentUserId={this.state.currentUserId}
                    onAddUser={this.handleAdduser}
                    onSetCurrentUser={this.handleSetCurrentUser} />
                
                <UserDetail currentUser = {currentUser}/>
            </div>
        )
    }
}

export default UserListContainer;