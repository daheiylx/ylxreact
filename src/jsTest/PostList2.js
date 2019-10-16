import React , {Component} from 'react';
import PostItem from "./PostItem2";

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.timer = null; //定时器
        this.handleVote = this.handleVote.bind(this); //ES6 class中，必须手动绑定this的指向，指向constructor
        this.componentDidMount();
    }
    
    componentDidMount() { // 挂载阶段
        // 用setTimeOut模拟异步从服务器端获取数据
        this.timer = setTimeout(() => {
            this.setState({
                posts:[
                    {id:1 , title:"大家一起来讨论React吧" , author: "张三" , date: '2017-09-01 10:10' , vote: 0},
                    {id:2 , title:"大家一起来讨论React吧" , author: "张三" , date: '2017-09-01 10:10' , vote: 0},
                    {id:3 , title:"大家一起来讨论React吧" , author: "张三" , date: '2017-09-01 10:10' , vote: 0},
                ]
            });
        } , 1000);
    }

    componentWillUnmount() { // 卸载阶段
        if(this.timer){
            clearTimeout(this.timer); //清除定时器
        }
    }
    
    handleVote(id){
        // 根据话题id进行过滤 ， 找到待修改的vote 属性的话题 ， 返回新的posts对象
        const posts = this.state.posts.map(item => {
            const newItem = item.id ===id ? {...item, vote: ++item.vote} : item;
            return newItem;
        })
        //使用新的posts对象设置state
        this.setState({
            posts
        });
    }

    render() {
        return (
            <div>
                话题列表
                <ul>
                    { this.state.posts.map(item => 
                        <PostItem
                            key = {item.id}
                            post = { item }
                            onVote = { this.handleVote } //绑定父组件的方法
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default PostList;