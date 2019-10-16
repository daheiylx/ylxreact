import React , { Component } from "react"
import "./../cssTest/inner.css"

/* 
ES 6 class 并不会为方法自动绑定this到当前对象中
方法一：箭头函数
箭头函数中的this指向的是函数定义时的对象
 */

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [1,2,3,4],
            current: 1
        }
    }
    /* 
    //这种写法可读性不强且变得很臃肿
    render(){
        return (
            <button onClick = { (event) => {
                console.log(this.state.number);
            }}> Click </button>
        )
    }
     */

    // 可以先封装一个方法，然后在箭头函数中调用这个方法
    //每次点击一次Button，state中的number增加1
    handleClick(item, event) {
        this.setState({
            current: item
        });
    }

    render(){
        return (
            // <div>
            //     <div>{this.state.number}</div>
            //     <button onClick = { (event) => {
            //         this.handleClick(event);
            //     }}> Click </button>
            // </div>
            <ul>
                {this.state.list.map(
                    (item) => (
                        <li className={this.state.current === item ? 'current' : ''}
                        onClick={this.handleClick.bind(this , item)} >{item}
                        </li>
                    )
                )}
            </ul>
        );
    }
}

export default MyComponent;