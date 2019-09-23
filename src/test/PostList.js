import React , { Component } from "react";
import PostItem from "./PostItem";

const data = [
    {title :'这是一个React' , author :'Lily' , date:'2017-09-01 10:00'},
    {title :'这是一个React' , author :'Lily' , date:'2017-09-01 10:00'},
    {title :'这是一个React' , author :'Lily' , date:'2017-09-01 10:00'},
];

class PostList extends Component{
    render(){
        return(
            <div>
                数据列表:
                <ul>
                    {data.map(item => 
                        <PostItem 
                            title={item.title}
                            author={item.author}
                            date={item.date}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default PostList;