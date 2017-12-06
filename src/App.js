import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Error404 from './containers/Error404/Error404';
import {Redirect, Route, Link, Switch} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Link to="/users">Users</Link>
        <Link to="/courses">Courses</Link>
        <Switch>
          <Redirect from="/all-courses" to="/courses" />
          <Route path="/users" component={Users}/>
          <Route path="/courses" component={Courses}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
