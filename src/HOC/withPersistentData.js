// 操作props
import React ,{ Component} from 'react';
function withPersisitentData(WrappedComponent){
    sessionStorage.data='ylx'
    return class extends Component {
        componentWillMount(){
            let data = sessionStorage.getItem('data');
            this.setState({data});
        }

        render(){
            // 通过{...this.props}把传递给当前组件的属性继续传递给被包装的组件
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }
}

export default withPersisitentData;