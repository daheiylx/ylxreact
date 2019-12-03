// 弹窗父组件
import React , { Component } from "react";
import Modal from './Modal.js'
class App extends Component{
    constructor(props){
        super(props);
        this.state = { showModal: true};
    }
    // 关闭弹窗
    closeModal = () => {
        this.setState({showModal:false});
    }
    render(){
        return (
            <div>
                <h2>Dashboard</h2>
                {this.state.showModal && (
                    <Modal onClose = {this.closeModal} children = '我是个弹窗'></Modal>
                )}
            </div>
        )
    }
}
export default App;