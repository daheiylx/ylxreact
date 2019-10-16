import React from "react";
import PropsTypes from 'prop-types'; //属性校验和默认属性
import './../cssTest/inner.css'

function PostItem(props) {
    const handleClick = () => {
        props.onVote(props.post.id);
    };
    const { post } = props;
    //内联样式
    const style = {
        fontSize: '12px',
        color: 'gray',
        marginBottom: '10px'
    }
    return (
        <li>
            <div className='test' >
                { post.title }
            </div>
            <div style = {style}> 
                创建人：<span>{ post.author }</span>
            </div>
            <div>
                创建时间：<span>{ post.date }</span>
            </div>
            <div>
                <button onClick={ handleClick }>点赞</button> &nbsp;
                <span>{ post.vote }</span>
            </div>
        </li>
    )
}
//属性校验
PostItem.PropsTypes = {
    // post: PropsTypes.object,
    post: PropsTypes.shape({
        id: PropsTypes.number,
        title: PropsTypes.string,
        author: PropsTypes.string,
        date: PropsTypes.string,
        vote: PropsTypes.number
    }).isRequired,
    onVote: PropsTypes.func.isRequired
}
// 默认属性,有点问题，未见到效果
PostItem.defaultProps = {
    title: '',
    author: '',
    date: '1',
    vote: 0
}

export default PostItem;