// 组件状态提升
import React ,{ Component} from 'react';
function withControlledState(WrappedComponent){
    return class extends Component{
        constructor(props){
            super(props);
            this.state={
                value:'12'
            };
            this.handleValueChange = this.handleValueChange.bind(this);
        }
        handleValueChange(event){
            this.setState({
                value: event.target.value,
            })
            setTimeout(()=>{
                console.log(this.state.value);
                alert(this.state.value)
            },0) 
        }
        render(){
            // newProps 保存受控组件需要使用的属性和事件处理函数
            const newProps = {
                controlledProps:{
                    value: this.state.value,
                    onChange: this.handleValueChange
                }
            }
            return <WrappedComponent {...this.props} {...newProps} />
        }
    }
}

export default withControlledState;