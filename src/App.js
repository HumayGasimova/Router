import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Link to="/users">Users</Link>
        <br/>
        <Link to="/courses">Courses</Link>
      </div>
    );
  }
}

export default App;
