import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
} from "react-router-dom";

import Login from './SingleWeb/js/Login.js';
import Home from './SingleWeb/js/Home.js';

const router = (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/posts" component={Home} />
        </Switch>
    </Router>
)

export default router; 