import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './cssTest/outset.css'
// import App from './App';
// import PostList from './jsTest/PostList2'
// import MyComponent from  './event/jiantou'
import LoginForm from './form/input.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(< LoginForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
