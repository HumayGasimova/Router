import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course';
import registerServiceWorker from './registerServiceWorker';

import {
    Route,
    Switch,
    BrowserRouter,
    Redirect
 } from 'react-router-dom';


 
ReactDOM.render(
    <BrowserRouter >
        <Switch>
            <Route 
                exact
                path='/'
                component={App}/>
            <Route 
                exact
                path='/users'
                component={Users}/>
            <Route 
                exact
                path='/courses'
                component={Courses}/>
                <Redirect from="/all-courses" to="/courses"/>
            <Route 
                exact
                path='/courses/:id'
                component={Course}/>
            <Route 
                render={() => (<div>404</div>)}/>
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
