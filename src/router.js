import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home/home';


function Routers() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" exact component={Home}/>
        </Switch>        
        </BrowserRouter>
    )
}   
export default Routers;
